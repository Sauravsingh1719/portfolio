import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Create a transporter with your email configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare email options for both admin and user
    const mailOptionsAdmin = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`,
    };

    const mailOptionsUser = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Thank you for reaching out!',
      text: `Hello ${data.name},\n\nThank you for your message! We will get back to you soon.\n\nBest regards,\nSaurav`,
    };

    // Send emails
    await transporter.sendMail(mailOptionsAdmin);
    await transporter.sendMail(mailOptionsUser);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
