import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const MAIL_FROM = `"Quadsupreme" <${process.env.EMAIL_USER}>`;
export const MAIL_TO = process.env.EMAIL_TO || process.env.EMAIL_USER!;