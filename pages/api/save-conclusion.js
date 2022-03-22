import { saveConclusion } from "../../database/model";
import Cookies from "cookies";

export default async function saveIntroduction(req, res) {
  const { main, evidence, priority, relate } = req.body;
  const essayId = req.cookies.currEssay;

  const conclusionText =
    main + "\n" + evidence + "\n" + priority + "\n" + relate;

  //use returned id to update global state,
  //enabling rest of application to know what essay is currently being edited
  const returnedEssayId = await saveConclusion(conclusionText, essayId);

  const cookies = new Cookies(req, res);
  cookies.set("currEssay", `${returnedEssayId.id}`, {
    maxAge: 60 * 60 * 1000 * 24,
  });

  res.redirect(303, "/essayOverview");
}
