// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request) {
//   const { name, email, phone, beerInfo } = await request.json();

//   const user = process.env.user;

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: user,
//       pass: process.env.pass,
//     },
//   });

//   const mailOptions = {
//     from: user,
//     to: user,
//     subject: `Contract Brewing Inquerey from ${name}`,
//     html: `
//       <p>Name: ${name}</p>
//       <p>Email: ${email}</p>
//       <p>Phone Number: ${phone}</p>
//       <p>Brew Information: ${beerInfo}</p>`,
//   };

//   await new Promise((resolve, reject) => {
//     // send mail
//     transporter.sendMail(mailData, (err, info) => {
//         if (err) {
//             console.error(err);
//             reject(err);
//         } else {
//             console.log(info);
//             resolve(info);
//         }
//     });
// });

// res.status(200).json({ status: "OK" });
// };


//   const sendMailPromise = () =>
//     new Promise((resolve, reject) => {
//       transporter.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve("Email Sent");
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: "Email Sent" });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }
