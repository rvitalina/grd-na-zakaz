import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT) || 4000

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE !== 'false',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.post('/api/lead', async (req, res) => {
  const { name, phone, source } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: 'Заполните имя и телефон.' })
  }

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      subject: 'У вас новая заявка с сайта',
      text: `Новая заявка с лендинга Titan-GS\n\nИмя: ${name}\nТелефон: ${phone}\nИсточник: ${source ?? 'не указан'}`,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Mail send error:', error)
    return res.status(500).json({ error: 'Не удалось отправить заявку.' })
  }
})

app.listen(PORT, () => {
  console.log(`API server started on http://localhost:${PORT}`)
})
