import { saveBody1 } from "../../database/model";
import Cookies from "cookies";

export default async function saveIntroduction(req, res) {
  const { point, identify, outline, explain1, explain2, relate } = req.body;
  const essayId = req.cookies.currEssay;

  const body1Text =
    point +
    "\n" +
    identify +
    "\n" +
    outline +
    "\n" +
    explain1 +
    "\n" +
    explain2 +
    "\n" +
    relate;

  //use returned id to update global state,
  //enabling rest of application to know what essay is currently being edited
  const returnedEssayId = await saveBody1(body1Text, essayId);

  const cookies = new Cookies(req, res);
  cookies.set("currEssay", `${returnedEssayId.id}`, {
    maxAge: 60 * 60 * 1000 * 24,
  });

  res.redirect(303, "/essayOverview");
}
