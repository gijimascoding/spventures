const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, company, inquiryType, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Check if SMTP is configured
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      process.env.SMTP_HOST === 'your-smtp-server.com' ||
      process.env.SMTP_HOST.includes('your-') ||
      process.env.SMTP_PASSWORD === 'your-smtp-password'
    ) {
      console.error('SMTP not configured. Please update environment variables with SMTP credentials.');
      console.log('Inquiry received from:', firstName, lastName, email);
      console.log('Form data:', JSON.stringify(req.body, null, 2));

      return res.status(503).json({
        success: false,
        message: 'Email service not configured. Please contact the administrator.'
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Investment Inquiry - ${inquiryType || 'General'} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 700px; margin: 0 auto; background: #FFFFFF;">
          <div style="background: linear-gradient(135deg, #1E293B 0%, #2C3E50 100%); padding: 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #FFFFFF; margin: 0; font-size: 24px; font-weight: 500; letter-spacing: -0.02em;">
              SP<span style="color: #C0785C;">.</span> Ventures
            </h2>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0 0; font-size: 14px;">New Investment Inquiry</p>
          </div>

          <!-- Contact Information -->
          <div style="background-color: #F8FAFC; padding: 24px; margin: 0;">
            <h3 style="margin-top: 0; color: #1A1A2E; font-size: 18px; font-weight: 600; border-bottom: 2px solid #C0785C; padding-bottom: 8px;">
              Contact Information
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #555770; width: 35%;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; color: #1A1A2E;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #555770;"><strong>Email:</strong></td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #C0785C; text-decoration: none;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; color: #555770;"><strong>Company:</strong></td>
                <td style="padding: 10px 0; color: #1A1A2E;">${company}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <!-- Inquiry Details -->
          <div style="background-color: #FFFFFF; padding: 24px; margin: 0;">
            <h3 style="margin-top: 0; color: #1A1A2E; font-size: 18px; font-weight: 600; border-bottom: 2px solid #C0785C; padding-bottom: 8px;">
              Inquiry Details
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #555770; width: 35%;"><strong>Inquiry Type:</strong></td>
                <td style="padding: 10px 0; color: #1A1A2E;">${inquiryType || 'Not specified'}</td>
              </tr>
            </table>
            ${message ? `
            <div style="margin-top: 16px;">
              <strong style="color: #555770;">Message:</strong>
              <div style="margin: 10px 0 0 0; line-height: 1.7; background-color: #F8FAFC; padding: 16px; border-radius: 6px; border-left: 4px solid #C0785C; color: #1A1A2E;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            ` : ''}
          </div>

          <div style="background-color: #F8FAFC; padding: 20px; margin: 0; border-radius: 0 0 8px 8px; border-top: 1px solid #E2E8F0;">
            <p style="margin: 0; color: #94A3B8; font-size: 13px; line-height: 1.5;">
              This inquiry was submitted through the SP Ventures website contact form.
            </p>
            <p style="margin: 12px 0 0 0; font-size: 13px;">
              <a href="mailto:${email}" style="color: #C0785C; text-decoration: none; font-weight: 600;">Reply to Inquiry →</a>
            </p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Inquiry sent successfully'
    });
  } catch (error) {
    console.error('Error sending inquiry email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send inquiry. Please try again later.'
    });
  }
};
