import { saveSpiderDiagram } from "../../database/model";
import Cookies from "cookies";

export default async function getSpiderDiagram(req, res) {
  console.log(req.body);
  const { 
    branch1,branch1_key,branch1_agree,branch1_disagree,
    branch2,branch2_key,branch2_agree,branch2_disagree, 
    branch3,branch3_key,branch3_agree,branch3_disagree,
    branch4,branch4_key,branch4_agree,branch4_disagree 
  } = req.body;
  
  const essayId = req.cookies.currEssay;

  const topic1 = branch1 + '\n' + branch1_key + '\n' + branch1_agree + '\n' + branch1_disagree
  const topic2 = branch2 + '\n' + branch2_key + '\n' + branch2_agree + '\n' + branch2_disagree
  const topic3 = branch3 + '\n' + branch3_key + '\n' + branch3_agree + '\n' + branch3_disagree
  const topic4 = branch4 + '\n' + branch4_key + '\n' + branch4_agree + '\n' + branch4_disagree
  
  const planningText = {topic1: topic1 ,topic2:topic2 , topic3:topic3, topic4:topic4 }

console.log(planningText)

  const returnedEssayId = await saveSpiderDiagram(planningText, essayId);

  const cookies = new Cookies(req, res);
  cookies.set("currEssay", `${returnedEssayId.id}`, {
    maxAge: 60 * 60 * 1000 * 24,
  });

  res.redirect(303, "/essayOverview");
}
