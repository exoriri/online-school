import nodemailer from "nodemailer";

async function main(name, number, description) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    requireTLS: false,
    secure: false,
    service: 'Gmail',
    auth: {
      user: "romchikacc@gmail.com",
      pass: "R2#uotochuvak19977",
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  let info = await transporter.sendMail({
    from: '"Essential skills " <foo@example.com>',
    to: "essentialskills2@gmail.com",
    subject: "Новый ученик 👻",
    text: "Новый ученик 👻",
    html: `<p><b>Имя: ${name}</b></p>
           <p><b>Номер или аккаунт: ${number}</b></p>
           <p><b>Описание: ${description}</b></p>
    `,
  });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, number, description, c_token } = req.body;
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    let captchaResponse: any = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=6Ldp-yseAAAAAG3JYpazb4cdJ_YT-Aqy2aJTRc8n&response=${c_token}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    captchaResponse = await captchaResponse.json();

    if (!captchaResponse.success) {
      res.end(
        JSON.stringify({
          success: false,
          message: "Ботам запрещенно отправлять запросы!",
        })
      );
    }

    if (name !== "" && number !== "" && description !== "") {
      await main(name, number, description);
      res.end(
        JSON.stringify({
          success: true,
          message: "Заявка успешно отправлена! Скоро с вами свяжутся",
        })
      );
    } else {
      res.end(
        JSON.stringify({
          success: false,
          message: "Поля не должны быть пустые",
        })
      );
    }
  }
}
