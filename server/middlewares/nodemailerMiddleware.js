const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "souvikmakur143@gmail.com",
    pass: "wdbhlgqkvmzlnevm",
  },
});

const sendEmail = async (mailOptions) => {
  try {
    const response = await transporter.sendMail(mailOptions);

    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email could not be sent!");
  }
};

module.exports = sendEmail;
