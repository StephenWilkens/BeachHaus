import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { resolve } from "styled-jsx/css";

export async function POST(request) {
  const { name, email, phone, beerInfo } = await request.json();

  const user = process.env.user;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: process.env.pass,
    },
  });

  const mailOptions = {
    from: user,
    to: user,
    subject: `Contract Brewing Inquerey from ${name}`,
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phone}</p>
      <p>Brew Information: ${beerInfo}</p>`,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email Sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email Sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
