
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      inquiry,
      message,
    } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "The Preferred Mortgage <onboarding@resend.dev>",
      to: ["info@betisports.com"],
      replyTo: email,
      subject: `New Mortgage Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #071a31;">
          <div style="background:#071a31; padding:30px; text-align:center;">
            <h1 style="color:#f1b900; margin:0;">
              The Preferred Mortgage
            </h1>
            <p style="color:#ffffff; margin:8px 0 0;">
              New Website Inquiry
            </p>
          </div>

          <div style="padding:30px; background:#ffffff;">
            <h2 style="margin-top:0;">
              New Contact Form Submission
            </h2>

            <table style="width:100%; border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0; font-weight:bold;">Name</td>
                <td style="padding:10px 0;">
                  ${firstName} ${lastName}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Email</td>
                <td style="padding:10px 0;">
                  ${email}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">Phone</td>
                <td style="padding:10px 0;">
                  ${phone || "Not provided"}
                </td>
              </tr>

              <tr>
                <td style="padding:10px 0; font-weight:bold;">
                  Inquiry
                </td>
                <td style="padding:10px 0;">
                  ${inquiry || "General question"}
                </td>
              </tr>
            </table>

            <div style="margin-top:25px;">
              <h3>Message</h3>

              <div style="
                background:#f4f7fb;
                border-radius:12px;
                padding:20px;
                line-height:1.7;
              ">
                ${message.replace(/\n/g, "<br />")}
              </div>
            </div>

            <p style="
              margin-top:30px;
              font-size:13px;
              color:#64748b;
            ">
              This message was submitted through
              The Preferred Mortgage website.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

