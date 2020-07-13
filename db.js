// Create connection to SQLite database
// did not both use a knexfile, which allows for different config environments like dev, staging, prod
// so I skipped $npx knex init -- which creates a knexfile.js
// is this important? breaking it out into knexfile + db-config.js as in the article?

// feed in connection to db, requires a config object
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
