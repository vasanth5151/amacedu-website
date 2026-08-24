// Resend Email Service Integration
// Set VITE_RESEND_API_KEY in your .env file

export async function sendEmail({ to = 'admin@amacedu.edu.in', subject, html, text }) {
  const apiKey = import.meta.env.VITE_RESEND_API_KEY || '';

  if (!apiKey) {
    console.warn('Resend API key not configured yet. Form submission logged locally:');
    console.log({ subject, text });
    // Simulate successful API network request latency
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, simulated: true };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AMACEDU Website <onboarding@resend.dev>',
        to: [to],
        subject,
        html,
        text,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email via Resend');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    throw error;
  }
}
