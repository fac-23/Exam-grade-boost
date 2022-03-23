import { saveSpiderDiagram } from "../../database/model";
import Cookies from "cookies";

export default async function getSpiderDiagram(req, res) {
  console.log(req.body);
  const { branch1, branch2, branch3, branch4 } = req.body;
  const essayId = req.cookies.currEssay;

  const planningText =
    branch1 + "\n" + branch2 + "\n" + branch3 + "\n" + branch4;

  const returnedEssayId = await saveSpiderDiagram(planningText, essayId);

  const cookies = new Cookies(req, res);
  cookies.set("currEssay", `${returnedEssayId.id}`, {
    maxAge: 60 * 60 * 1000 * 24,
  });

  res.redirect(303, "/essayOverview");
}
