const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./empdb.db");

// const emptable = `
//     CREATE TABLE IF NOT EXISTS bookmarks (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT,
//         author TEXT,
//         subject TEXT,
//         published TEXT
//     )
// `;

// // Execute the SQL query to create the table
// db.run(emptable, (err) => {
//   if (err) {
//     console.error("Error creating courses table:", err.message);
//   } else {
//     console.log("success");
//   }
// });


const query = `SELECT * FROM library`;
db.all(query, [], (err, rows) => {
  console.log(rows);
});
