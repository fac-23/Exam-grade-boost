import Cookies from "cookies";

export default async function saveIntroduction(req, res) {
  const { essayId } = req.body;

  const cookies = new Cookies(req, res);
  cookies.set("currEssay", `${essayId}`, {
    maxAge: 60 * 60 * 1000 * 24,
  });

  res.redirect(303, "/essayOverview");
}
