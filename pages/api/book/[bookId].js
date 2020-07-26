export default (req, res) => {
  if (req.method !== "GET") {
    res.status(500).json({ message: "sorry we only accept GET requests" });
  }

  res.statusCode = 200;
  res.json({ byId: req.query.bookId });
};
