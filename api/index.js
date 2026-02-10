import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware - Keep these ABOVE your routes
app.use(cors({
  origin: '*' 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test route
app.get('/api', (req, res) => {
  res.json({ message: 'Saltum Technologies Email API is running' });
});

// Send email route
app.post('/api/send-email', async (req, res) => {
  const { name, email, company, phone, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please fill in all required fields' 
    });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Contact Request from ${name} - ${service}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #06b6d4; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #06b6d4; }
          .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">🚀 New Contact Request</h1>
            <p style="margin: 5px 0 0 0;">Saltum Technologies Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${company ? `
            <div class="field">
              <div class="label">🏢 Company</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            ${phone ? `
            <div class="field">
              <div class="label">📱 Phone</div>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">💼 Service Interested In</div>
              <div class="value">${service}</div>
            </div>
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from your Saltum Technologies website contact form</p>
            <p>Received on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email.' 
    });
  }
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// MANDATORY: Export default for Vercel with "type": "module"
export default app;