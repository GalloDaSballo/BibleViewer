const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

// trying to get 4.0.12 version of sqlite package working
// significant changes from v3 with what feels like a lot more moving parts
// https://www.npmjs.com/package/sqlite#opening-the-database

// ATTEMPT 1
// ATTEMPT 1 RESULT: error no such table + error async function rejecting promise without catch block
// const setup = async () => {
//   const db = await sqlite.open({
//     filename: "./bible-sqlite.db",
//     driver: sqlite3.Database,
//   });

//   const verse = await db.all("SELECT id, t FROM t_asv WHERE id");
//   console.log(JSON.stringify(verse, null, 2));
// };

// setup();

// ATTEMPT 2
// ATTEMPT 2 RESULT: error no such table + error async function rejecting promise without catch block
// const setup = async () => {
//   db = await sqlite
//     .open({
//       filename: "./bible-sqlite.db",
//       driver: sqlite3.Database,
//     })
//     .then(async (db) => {
//       const verse = await db.all("SELECT id, t FROM t_asv WHERE id");
//       console.log(JSON.stringify(verse, null, 2));
//     });
// };

// setup();

// ATTEMPT 3
// ATTEMPT 3 RESULT: SyntaxError: Missing initializer in const declaration
// const async openDb = () => {
//   return await sqlite.open({
//     filename: "./bible-sqlite.db",
//     driver: sqlite3.Database,
//   });
// };

// openDb().then((db) => {
//   const verse = db.all("SELECT id, t FROM t_asv WHERE id");
//   console.log(JSON.stringify(verse, null, 2));
// });
