import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!firstName || !email || !service || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create a Nodemailer transport using Gmail or your email service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content for yourself
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "surajdwivedi644@gmail.com", // Your email address
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email to yourself
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the user
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message!",
      html: `
        <h2>Thank You!</h2>
        <p>Hi ${firstName},</p>
        <p>Thank you for reaching out! I've received your message and will get back to you soon.</p>
        <p>Best regards,<br>Suryakant Dwivedi</p>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
