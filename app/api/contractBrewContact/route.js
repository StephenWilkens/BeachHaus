import { NextResponse } from "next/server";
import { resolve } from "styled-jsx/css";
// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

export async function POST(request) {
  const { name, email, phone, beerInfo } = await request.json();

  const user = process.env.user;

  const data = {
    name,
    email,
    phone,
    beerInfo,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.pass,
    },
  });

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: user,
          to: user,
          replyTo: data.email,
          subject: `Contract Brewing Inquerey from ${name}`,
          html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phone}</p>
      <p>Brew Information: ${beerInfo}</p>`,
        },
        (err, info) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(info);
          }
        },
      );
    });
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 },
    );
  }
}
// try {
//   const mail = await transporter.sendMail({
//     from: user,
//     to: user,
//     replyTo: data.email,
//     subject: `Contract Brewing Inquerey from ${name}`,
//     html: `
//     <p>Name: ${name}</p>
//     <p>Email: ${email}</p>
//     <p>Phone Number: ${phone}</p>
//     <p>Brew Information: ${beerInfo}</p>`,
//   });

//   return NextResponse.json(
//     { message: "Email Sent Successfully" },
//     { status: 200 },
//   );
// } catch (error) {
//   console.log(error);
//   return NextResponse.json(
//     { message: "Failed to Send Email" },
//     { status: 500 },
//   );
// }
