const { Pool } = require("pg");
const express = require("express");
const app = express();
const cors = require("cors");

// Database configuration
const pool = new Pool({
  connectionString:
    "postgres://default:VG0Qvzr9qMoW@ep-morning-frost-10189410-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

// Middleware
app.use(express.json());
app.use(cors());

app.get("/library", async (req, res) => {
  try {
    const client = await pool.connect();
    const query = `SELECT * FROM library`;
    const { rows } = await client.query(query);
    client.release();
    res.json(rows);
  } catch (error) {
    console.error("Error retrieving library data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const client = await pool.connect();
    const query = `
      SELECT * FROM users
      WHERE username = $1 AND password = $2
    `;
    const { rows } = await client.query(query, [username, password]);

    if (rows.length === 0) {
      res.status(401).json({ error: "Invalid username or password" });
    } else {
      const user = rows[0];
      res.status(200).json(user);
    }

    client.release();
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/set-bookmarks", async (req, res) => {
  const { username, bookmarks } = req.body;

  try {
    const client = await pool.connect();
    const query = `
      UPDATE users
      SET bookmarks = $1
      WHERE username = $2
    `;
    await client.query(query, [bookmarks, username]);
    client.release();
    res.status(200).json({ message: "Bookmarks updated successfully" });
  } catch (error) {
    console.error("Error setting bookmarks:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
