import type { NextApiRequest, NextApiResponse } from "next";
const emailAddress = process.env.FORMEMAILADDRESS;
const emailPass = process.env.FORMEMAILPASS;
const emailToReceive = process.env.EMAILTORECEIVE;
const appName = process.env.NEXT_PUBLIC_APPNAME;
const formEmailHost = process.env.FORMEMAILHOST;

let nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465,
  host: formEmailHost,
  auth: {
    user: emailAddress,
    pass: emailPass,
  },
  secure: true,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const mailData = {
    from: emailAddress,
    to: emailToReceive,
    subject: `${appName} Message From ${req.body.email}`,
    text: req.body.message,
    html: `<div>${req.body.email}</div><div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, (err: any, info: any) => {
    if (err) {
      console.log("sendMailError", err);
      return res.status(500).json({ message: "Error sending message" });
    } else console.log("sendMailOk", info);
  });

  res.status(200).json({ message: req.body });
}
