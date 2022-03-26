import {
  retrieveResetToken,
  clearResetTokens,
  updatePassword,
  getUser,
} from "../../database/model";
import { saveSession, cookie_options } from "../../auth";
import bcrypt from "bcryptjs";
import Cookies from "cookies";

export function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export default async function commitReset(req, res) {
  switch (req.method) {
    case "POST": {
      const { email, token, password } = req.body;

      const storedRecord = await retrieveResetToken(email);
      await clearResetTokens();

      if (token === storedRecord.token) {
        const hashedPassword = await hashPassword(password);
        const updated = await updatePassword(hashedPassword, email);

        if (updated) {
          const cookies = new Cookies(req, res);
          //clear cookies and reissue new
          cookies.set("sid");
          const user = await getUser(email);
          const sid = await saveSession({ user_id: user[0].id });

          cookies.set("sid", `${sid}`, {
            maxAge: cookie_options.maxAge,
          });
          return res.redirect(303, "/home");
        }
      } else {
        return res.redirect(303, "/loginError");
      }
    }
    default:
      res.status(405).send("Method not allowed");
      break;
  }
}
