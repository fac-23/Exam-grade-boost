import { saveSpiderDiagram } from "../../database/model";
import Cookies from "cookies";

export default async function getSpiderDiagram(req, res) {
  const {
    topic1,
    topic1_key,
    topic1_agree,
    topic1_disagree,
    topic2,
    topic2_key,
    topic2_agree,
    topic2_disagree,
    topic3,
    topic3_key,
    topic3_agree,
    topic3_disagree,
    topic4,
    topic4_key,
    topic4_agree,
    topic4_disagree,
  } = req.body;

  const essayId = req.cookies.currEssay;

  const branch1 =
    topic1 + "\n" + topic1_key + "\n" + topic1_agree + "\n" + topic1_disagree;

  const branch2 =
    topic2 + "\n" + topic2_key + "\n" + topic2_agree + "\n" + topic2_disagree;

  const branch3 =
    topic3 + "\n" + topic3_key + "\n" + topic3_agree + "\n" + topic3_disagree;

  const branch4 =
    topic4 + "\n" + topic4_key + "\n" + topic4_agree + "\n" + topic4_disagree;

  const planningText = {
    branch1: branch1,
    branch2: branch2,
    branch3: branch3,
    branch4: branch4,
  };


  const returnedEssayId = await saveSpiderDiagram(planningText, essayId);

  const cookies = new Cookies(req, res);
  cookies.set("currEssay", `${returnedEssayId.id}`, {
    maxAge: 60 * 60 * 1000 * 24,
  });

  res.redirect(303, "/essayOverview");
}
