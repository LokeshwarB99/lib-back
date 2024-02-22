const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString:
    "postgres://default:VG0Qvzr9qMoW@ep-morning-frost-10189410-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
});

// Function to select all users
const selectAllUsers = async () => {
  let client;

  try {
    client = await pool.connect();
    // SQL query to select all users
    const queryText = `
      SELECT * FROM users;
    `;
    // Execute the query
    const result = await client.query(queryText);
    // Log the result
    console.log("All users:", result.rows);
  } catch (err) {
    console.error("Error selecting all users", err);
  } finally {
    if (client) {
      client.release();
      await pool.end();
    }
  }
};

// Call the selectAllUsers function
selectAllUsers();
