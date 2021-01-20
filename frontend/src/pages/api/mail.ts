import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

async function main(name, number) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    requireTLS: false,
    secure: false,
    auth: {
      user: 'teavedeniye@gmail.com',
      pass: 'R2#uotochuvak1997',
    },
  });

  let info = await transporter.sendMail({
    from: '"Essential skills " <foo@example.com>',
    to: "essentialskills2@gmail.com",
    subject: "Новый ученик 👻",
    text: "Новый ученик 👻",
    html: `<p><b>Имя: ${name}</b></p>
           <p><b>Номер или аккаунт: ${number}</b></p>`,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

export default async function handler(req, res) {
    const { name, number } = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200

    if (name !== '' && number !== '') {
        await main(name, number);
        res.end(JSON.stringify({ success: true, message: 'Заявка успешно отправлена! Скоро с вами свяжутся'  }));
    } else {
        res.end(JSON.stringify({ success: false, message: 'Поля не должны быть пустые' }))
    }

  };