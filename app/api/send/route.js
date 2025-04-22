import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log("Sending email from:", email);

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail], 
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p><strong>From:</strong> {email}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
