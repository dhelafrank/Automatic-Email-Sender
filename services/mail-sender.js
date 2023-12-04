const {
    createTransporter
} = require("./mail-transporter")

const sendMail = async (address, subject, content) => {
    try {
        const mailOptions = {
            from: process.env.USER_EMAIL,
            to: address,
            subject: subject,
            html: content
        }

        let emailTransporter = await createTransporter();
        await emailTransporter.sendMail(mailOptions);
        return true;
    } catch (err) {
        console.log("ERROR: ", err)
        return false
    }
};

module.exports = {
    sendMail
          }
