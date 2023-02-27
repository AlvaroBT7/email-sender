const nodemailer = require("nodemailer");
const colors = require("colors");

const sendEmail = async () => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "barreroalvaro2007@gmail.com",
      pass: "xzzsorqzszhnbztg",
    },
  });

  transport
    .sendMail({
      from: "barreroalvaro2007@gmail.com",
      to: "barreroalvaro2007@gmail.com",
      subject: "Hola mamita",
      html: "<h1>Hello world</h1>",
    })
    .then(() => {
      console.log("Email enviado correctamente !".blue);
    });

  console.log("Enviando email...");
};

sendEmail();
