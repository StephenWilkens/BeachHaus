import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, business, email, phone, beerInfo } = await request.json();
  
  const user = process.env.user;

  const data = {
    name,
    business,
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
    const mail = await transporter.sendMail({
      from: user,
      to: user,
      replyTo: data.email,
      subject: `Distribution Inquerey from ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Business: ${business}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phone}</p>
      <p>Message Body: ${beerInfo}</p>`,
    });

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 },
    );
  }
}
