const knex = require("knex")({
    client: "sqlite3",
    connection: {
      filename: "./data/bible-sqlite.db",
    },
    useNullAsDefault: true,
  });
  
  // for debug purposes, show a verse when connecting
  knex
    .from("t_asv")
    .select("id", "c", "v", "t")
    .where("id", "1001003")
    .then((data) => console.log("data retreived:", data))
    .catch((err) => console.log(err));
  
  module.exports = knex;