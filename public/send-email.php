<?php

const FROM_EMAIL = 'AMACEDU Admissions <admissions@mags.edu.in>';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $code, array $body): void
{
    http_response_code($code);
    echo json_encode($body);
    exit;
}

function clean($value, int $max = 500): string
{
    return mb_substr(trim(strip_tags((string) $value)), 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['error' => 'Method not allowed']);
}

$config = is_file(__DIR__ . '/send-email.config.php') ? require __DIR__ . '/send-email.config.php' : [];
$apiKey = $config['api_key'] ?? getenv('RESEND_API_KEY');
$toEmail = $config['to'] ?? getenv('ADMISSION_TO_EMAIL');

if (!$apiKey || !$toEmail) {
    error_log('send-email.php: Resend API key or recipient not configured');
    respond(500, ['error' => 'Email service is not configured']);
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    $input = $_POST;
}

// Honeypot: bots fill hidden fields, humans don't. Pretend success.
if (!empty($input['website'])) {
    respond(200, ['ok' => true]);
}

$fields = [
    'studentName'   => 'Student Name',
    'studentMobile' => 'Student Mobile',
    'studentEmail'  => 'Student Email',
    'course'        => 'Course Interested In',
    'parentName'    => 'Parent Name',
    'parentMobile'  => 'Parent Mobile',
];

$data = [];
foreach ($fields as $key => $label) {
    $data[$key] = clean($input[$key] ?? '');
    if ($data[$key] === '') {
        respond(400, ['error' => "Missing required field: $label"]);
    }
}

if (!filter_var($data['studentEmail'], FILTER_VALIDATE_EMAIL)) {
    respond(400, ['error' => 'Invalid email address']);
}

$rows = '';
foreach ($fields as $key => $label) {
    $rows .= '<p><strong>' . htmlspecialchars($label, ENT_QUOTES, 'UTF-8') . ':</strong> '
        . htmlspecialchars($data[$key], ENT_QUOTES, 'UTF-8') . '</p>';
}

$payload = [
    'from'     => FROM_EMAIL,
    'to'       => [$toEmail],
    'reply_to' => $data['studentEmail'],
    'subject'  => 'New Admission Enquiry — ' . $data['studentName'],
    'html'     => '<h2>New Admission Enquiry</h2>' . $rows,
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS     => json_encode($payload),
]);
$response = curl_exec($ch);
$status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false || $status < 200 || $status >= 300) {
    error_log("send-email.php: Resend failed (HTTP $status) $curlError $response");
    respond(502, ['error' => 'Failed to send email']);
}

respond(200, ['ok' => true]);
