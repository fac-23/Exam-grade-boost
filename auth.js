import {
  createSession,
  getUser,
  getSessionInfo,
  getEssayInfo,
} from "./database/model";
const crypto = require("crypto");
import bcrypt from "bcryptjs";

import Cookies from "cookies";

export const cookie_options = {
  httpOnly: true,
  maxAge: 60 * 60 * 1000 * 24,
  sameSite: "strict",
  signed: true,
};

export async function saveSession(data) {
  //create random sid
  const sid = crypto.randomBytes(18).toString("base64");
  //run create session in model.js, which inserts session into db (data and sid)
  return createSession(sid, data);
}

//called in log-in
export async function verifyUser(email, password) {
  //calls getUser in model
  const savedUser = await getUser(email);
  if (savedUser[0]) {
    return bcrypt.compare(password, savedUser[0].password).then((match) => {
      if (!match) {
        return undefined;
      } else {
        delete savedUser[0].password;
        return savedUser;
      }
    });
  }
}

export async function cookiesTampered(req, res) {
  const sid = req.cookies.sid;
  const essayId = req.cookies.currEssay;
  const cookies = new Cookies(req, res);

  if (!sid || !essayId) {
    cookies.set("currEssay");
    return true;
  }

  const essayInfo = await getEssayInfo(essayId);
  const userData = await getSessionInfo(sid);
  const user_id = JSON.parse(userData.data).user_id;

  if (user_id === essayInfo.user_id) {
    return false;
  } else {
    cookies.set("currEssay");
    return true;
  }
}
