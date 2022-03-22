import { createNewEssay, getSessionInfo } from "../../database/model";

export default async function createEssay(req, res) {
  const { question } = req.body;

  const userData = await getSessionInfo(req.cookies.sid);
  const user_id = JSON.parse(userData.data).user_id;

  //use returned id to update global state,
  //enabling rest of application to know what essay is currently being edited
  const essayId = await createNewEssay(user_id, question);

  res.redirect(303, "/essayOverview");
}
