const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./empdb.db");
const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

app.get("/db", (req, res) => {
  const query = `SELECT * FROM library`;
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Error retrieving datas:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(rows);
    console.log(rows);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});