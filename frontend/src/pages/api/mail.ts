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
    from: '"Fred Foo 👻" <foo@example.com>',
    to: "essentialskills2@gmail.com",
    subject: "Hello ✔",
    text: "Новый ученик 👻",
    html: `<b>Имя: ${name}</b>
           <b>Номер: ${number}</b>`,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

export default async function handler(req, res) {
    const { name, number } = req.body;
    await main(name, number);

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ name: 'John Doe' }));
  };