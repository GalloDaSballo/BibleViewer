import db from '../../../data/db-config'
export default async (req, res) => {
  if (req.method !== "GET") {
    res.status(500).json({ message: "sorry we only accept GET requests" });
  }
  const verse = await db
    .from("t_asv")
    .select("id", "c", "v", "t")
    .where("id", req.query.verseId)

  console.log("result is", verse)

  res.statusCode = 200;
  res.json({ byId: req.query.verseId });
};
