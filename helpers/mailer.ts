import nodemailer from 'nodemailer'


export const sendEmail = async (userEmail: string,
    subject: string,
      htmlContent: string) => {
    try {

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const mailOptions = {
            from: '"Shreya Vision Care" <noreply@shreyavision.com>',
            to: userEmail,
            subject,
               html: htmlContent,
        }

        const mailResponse = await transporter.sendMail(mailOptions)
        return mailResponse

    } catch (error: any) {
    console.error("Email sending failed:", error);
    throw new Error(error.message);
  }
}