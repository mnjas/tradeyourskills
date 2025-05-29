import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { to, subject, text } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'e-mail' }, { status: 500 })
  }
}
