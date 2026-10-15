import { NextResponse } from "next/server";
import { transporter, MAIL_FROM, MAIL_TO } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, interest, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry from ${name}${company ? ` · ${company}` : ""}`,
      text: `Name: ${name}
Email: ${email}
Company: ${company || "—"}
Solution needed: ${interest || "Not sure yet"}

Message:
${message}`,
      html: `
        <h2>New enquiry from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "—"}</p>
        <p><strong>Solution needed:</strong> ${interest || "Not sure yet"}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please email info@quadsupreme.com directly." },
      { status: 500 },
    );
  }
}