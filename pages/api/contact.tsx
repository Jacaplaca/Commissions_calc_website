import type { NextApiRequest, NextApiResponse } from "next";
const emailAddress = process.env.FORMEMAILADDRESS;
const emailPass = process.env.FORMEMAILPASS;
const emailToReceive = process.env.EMAILTORECEIVE;
const appName = process.env.NEXT_PUBLIC_APPNAME;
const formEmailHost = process.env.FORMEMAILHOST;

type Data = {
  email: string;
  message: string;
};

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mailData = {
    from: emailAddress,
    to: emailToReceive,
    subject: `${appName} Message From ${req.body.email}`,
    text: req.body.message,
    html: `<div>${req.body.email}</div><div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, (err: any, info: any) => {
    if (err) console.log("sendMailError", err);
    else console.log("sendMailOk", info);
  });

  res.status(200);
}
