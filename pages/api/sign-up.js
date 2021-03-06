import { cookie_options, saveSession } from "../../auth";
import { createUser } from "../../database/model";
import bcrypt from "bcryptjs";
import Cookies from "cookies";

export function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

export default async function sign_up(req, res) {
  //req.method checks the HTTP header method - if it is a POST
  switch (req.method) {
    case "POST": {
      //destructured obj from req.body takes form input which is then
      const { username, email, password } = req.body;

      const hashedPassword = await hashPassword(password);

      //user data is parsed into the createUser which adds new user to user table in db
      const user = await createUser(username, email, hashedPassword).catch(
        (error) => {
          console.log(error);
          res.redirect(303, "/emailError");
        }
      );

      //session saved in auth which calls createSession in model
      const sid = await saveSession({ user_id: user.id });

      //set cookies
      const cookies = new Cookies(req, res);
      cookies.set("sid", `${sid}`, {
        maxAge: cookie_options.maxAge,
      });

      //redirect to home
      res.redirect(303, "/tutorial");
      break;
    }
    default:
      res.status(405).send("Method not allowed");
      break;
  }
}
