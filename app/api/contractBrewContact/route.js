import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req) {
  const { name, email, phone, beerInfo } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.OAUTH_USER,
      pass: process.env.OAUTH_PASS,
    },
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

  const mailData = {
    from: process.env.OAUTH_USER,
    replyTo: email,
    to: process.env.OAUTH_USER,
    subject: `Contract Brewing inquiry from ${name}`,
    text: name,
    email,
    phone,
    beerInfo,
    html: `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone Number: ${phone}</p>
    <p>Brew Information: ${beerInfo}</p>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return NextResponse.json({ status: 200 });
}

// OAUTH TRANSPORTER
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     type: "OAuth2",
//     user: process.env.OAUTH_USER,
//     clientId: process.env.OAUTH_CLIENT_ID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//     accessToken: process.env.OAUTH_ACCESS_TOKEN,
//   },
// });
