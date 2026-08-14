// Vercel serverless function. Requires env vars set in the Vercel project:
//   RESEND_API_KEY     - secret API key from resend.com
//   ADMISSION_TO_EMAIL  - inbox that should receive enquiries (defaults to a placeholder)
//
// The `from` address below must belong to a domain verified in Resend before
// this can send to real inboxes — swap it once a domain is verified.

const escapeHtml = (str = '') =>
  String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { studentName, studentMobile, studentEmail, course, parentName, parentMobile } = req.body || {}

  if (!studentName || !studentMobile || !studentEmail || !course || !parentName || !parentMobile) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.ADMISSION_TO_EMAIL || 'admissions-placeholder@example.com'

  if (!apiKey) {
    return res.status(500).json({ error: 'Email service is not configured' })
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AMACEDU Admissions <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: studentEmail,
        subject: `New Admission Enquiry — ${studentName}`,
        html: `
          <h2>New Admission Enquiry</h2>
          <h3>Student Details</h3>
          <p><strong>Name:</strong> ${escapeHtml(studentName)}</p>
          <p><strong>Mobile:</strong> ${escapeHtml(studentMobile)}</p>
          <p><strong>Email:</strong> ${escapeHtml(studentEmail)}</p>
          <p><strong>Course Interested In:</strong> ${escapeHtml(course)}</p>
          <h3>Parent Details</h3>
          <p><strong>Name:</strong> ${escapeHtml(parentName)}</p>
          <p><strong>Mobile:</strong> ${escapeHtml(parentMobile)}</p>
        `,
      }),
    })

    if (!resendRes.ok) {
      const errText = await resendRes.text()
      console.error('Resend error:', errText)
      return res.status(502).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Admission email error:', err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
