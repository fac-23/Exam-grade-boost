import { renameEssay, getSessionInfo } from "../../database/model";
import Cookies from "cookies";

export default async function createEssay(req, res) {
  const { question } = req.body;
  const currEssay = req.cookies.currEssay;

  const userData = await getSessionInfo(req.cookies.sid);
  const user_id = JSON.parse(userData.data).user_id;

  const essayId = await renameEssay(question, user_id, currEssay);

  const cookies = new Cookies(req, res);
  cookies.set("currEssay", `${essayId.id}`, {
    maxAge: 60 * 60 * 1000 * 24,
  });

  res.redirect(303, "/essayOverview");
}
