import nodemailer from 'nodemailer';
import * as yup from 'yup';
import { rateLimit } from 'express-rate-limit';

// Validation schemas
const contactFormSchema = yup.object({
  service: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  countryCode: yup.string().required(),
  phone: yup.string().required(),
  message: yup.string().required()
});

// Helper function to format email content
const formatEmailContent = (data, formType) => {
  const formattedDate = new Date().toLocaleString('en-US', { 
    timeZone: 'Africa/Nairobi' 
  });

  return `
    <h2>New ${formType} Form Submission</h2>
    <p><strong>Received on:</strong> ${formattedDate}</p>
    <hr>
    ${Object.entries(data)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join('')}
  `;
};

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Apply rate limiting
    await new Promise((resolve, reject) => {
      limiter(req, res, (result) => {
        if (result instanceof Error) {
          reject(result);
        }
        resolve(result);
      });
    });

    // Validate form data
    const formData = await contactFormSchema.validate(req.body);
    console.log('Validated form data:', formData);

    // Verify email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing');
      throw new Error('Email service not configured properly');
    }

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: formData.recipientEmail || process.env.EMAIL_USER,
        subject: 'New Contact Form Submission - DotCreative',
        html: formatEmailContent(formData, 'Contact'),
        replyTo: formData.email
      });
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      throw new Error('Failed to send email. Please check email configuration.');
    }

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(error.name === 'ValidationError' ? 400 : 500).json({ 
      error: error.name === 'ValidationError' 
        ? `Invalid form data: ${error.message}`
        : error.message || 'Failed to submit form'
    });
  }
} 