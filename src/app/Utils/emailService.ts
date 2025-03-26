import { Resend } from "resend";

// Ensure API key is defined
if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set in environment variables.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(email: any, otp: any, otpExpiresAt: any) {
  try {
    await resend.emails.send({
      to: email,
      from: "onboarding@resend.dev",
      subject: "Your OTP Code",
      html: `
        <h3>Hello, <span style="color: blue; font-size: 18px;">${email}</span></h3>
        <p>Your One-Time Password (OTP) for verification is:</p>
        <h2 style="color:blue;">${otp}</h2>
        <p>This OTP will expire at: <b>${otpExpiresAt.toLocaleTimeString()}</b></p>
        <p>If you did not request this, please ignore this email.</p>
        `,
    });

    console.log("OTP email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export default async function sendEmail(email: string, html_body: string): Promise<void> {
  try {
    await resend.emails.send({
      to: email,
      from: "onboarding@resend.dev",
      subject: "Notification",
      html: html_body,
    });

    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

