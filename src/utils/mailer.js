import nodemailer from 'nodemailer';



export const sendEmail = async ({ email, emailType }) => {
    try {

        var transport = nodemailer.createTransport({
            host: process.env.VITE_MAIL_SERVICE_HOST,
            port: process.env.VITE_MAIL_SERVICE_PORT,
            secure: false,
            auth: {
                user: process.env.VITE_MAIL_SERVICE_USERNAME,
                pass: process.env.VITE_MAIL_SERVICE_PASSWORD
            }
        });

        let mailOptions = {}

        console.log('mail')

        if (emailType === 'inquiry') {
            mailOptions = {
                from: {
                    name: process.env.VITE_MAIL_SERVICE_NAME,
                    address: process.env.VITE_MAIL_SERVER_ADDRESS
                },
                to: email,
                subject: "Verify your email",
                html: `<p>New Mail`
            }
        }


        // const mailOptions = {
        //     from: 'info@devlomatix.com',
        //     to: email,
        //     subject: emailType === "verify" ? "Verify your email" : "Reset your password",
        //     html: `<p>Click <a href="${appConfig.app.appUri}/auth/${emailType}?token=${hashedToken}">here</a> to ${emailType === "verify" ? "verify your email" : "reset your password"}
        //     or copy and paste the link below in your browser. <br> ${appConfig.app.appUri}/auth/${emailType}?token=${hashedToken}
        //     </p>`
        // }

        const mailresponse = await transport.sendMail
            (mailOptions);
        return mailresponse;

    } catch (error) {
        throw new Error(error.message);
    }
}