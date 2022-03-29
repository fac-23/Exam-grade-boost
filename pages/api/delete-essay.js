import Cookies from "cookies";
import { deleteCurrEssay, getSessionInfo } from "../../database/model";

export default async function DeleteEssay(req, res) {
  const { essayId } = req.body;

  const userData = await getSessionInfo(req.cookies.sid);
  const user_id = JSON.parse(userData.data).user_id;

  deleteCurrEssay(essayId, user_id);

  const cookies = new Cookies(req, res);
  cookies.set("currEssay");

  res.redirect(303, "/home");
}
