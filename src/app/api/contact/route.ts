import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { lastname, firstname, mail, tel, message } = await req.json()

  if (!lastname || !firstname || !message || !mail) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"Contact TYS" <${process.env.ADMIN_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: '📩 Nouveau message de contact via le site',
    text: `
            Nom : ${lastname}
            Prénom : ${firstname}
            Email : ${mail}
            Téléphone : ${tel}

            Message :
            ${message}
                `,
    }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'e-mail' }, { status: 500 })
  }
}
