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

      console.log({ storedRecord });
      console.log({ token });
      if (token === storedRecord.token) {
        const hashedPassword = await hashPassword(password);
        console.log({ email });
        const updated = await updatePassword(hashedPassword, email);
        console.log({ updated });
        if (updated) {
          console.log("runs 31");
          const cookies = new Cookies(req, res);
          //clear cookies and reissue new
          cookies.set("sid");
          const user = await getUser(email);
          const sid = await saveSession({ user_id: user[0].id });
          console.log(sid);
          console.log({ user });
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
