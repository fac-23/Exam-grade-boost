const crypto = require("crypto");
import { storeResetToken } from "../../database/model";

export default async function sendResetEmail(req, res) {
  switch (req.method) {
    case "POST": {
      const { email } = req.body;
      const resetToken = crypto
        .randomBytes(18)
        .toString("base64")
        .replace(/[^a-z]+/g, "");

      const reset = await storeResetToken(email, resetToken);

      console.log(reset);

      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: email,
        from: "essayboost.app@gmail.com",
        subject: "Exam boost password reset",
        text: "Reset your password",
        html: `<h1>Exam Boost</h1><h2>Password reset link:</h2><p><a href=${"https://exam-grade-boost.vercel.app"}/resetPassword?email=${email}&token=${resetToken}>Reset</a>`,
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log("Resetmail sent");
        })
        .catch((error) => {
          console.error(error);
        })
        .then(res.redirect(303, "/"));

      break;
    }
    default:
      res.status(405).send("Method not allowed");
      break;
  }
}
