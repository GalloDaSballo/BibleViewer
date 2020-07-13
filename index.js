const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const api = require("./routes/api");

// create a specific route for API calls to the sqlite database
app.use("/api", api);

// basic route served up
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
