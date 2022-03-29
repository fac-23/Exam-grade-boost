import Cookies from "cookies";
import { deleteCurrEssay } from "../../database/model";

export default async function DeleteEssay(req, res) {
  const { essayId } = req.body;

  deleteCurrEssay(essayId);

  const cookies = new Cookies(req, res);
  cookies.set("currEssay");

  res.redirect(303, "/home");
}
