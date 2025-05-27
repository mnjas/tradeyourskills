import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { title, description } = await req.json()

  if (!title || !description) {
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
    from: `"Plateforme Compétences" <${process.env.ADMIN_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: '📥 Nouvelle compétence proposée',
    text: `💡 Titre : ${title}\n\n📝 Description :\n${description}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'e-mail' }, { status: 500 })
  }
}
