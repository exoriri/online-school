import nodemailer from "nodemailer";

async function main(name, number, description) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    requireTLS: false,
    secure: false,
    port: 465,
    service: "Gmail",
    auth: {
      user: "romchikacc@gmail.com",
      pass: "izmmbwvynbbbqgle",
    }
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(
      {
        from: '"Essential skills " <foo@example.com>',
        to: "essentialskills2@gmail.com",
        subject: "Новая завка 👻",
        text: "Новая завка 👻",
        html: `<p><b>Имя: ${name}</b></p>
           <p><b>Номер или аккаунт: ${number}</b></p>
           <p><b>Описание: ${description}</b></p>
    `,
      },
      (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      }
    );
  });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, number, description, c_token } = req.body;
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    try {
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
    } catch (e) {
      res.end(
        JSON.stringify({
          success: false,
          message: e.message,
        })
      );
    }
  }
}
