require('dotenv').config(); // Load environment variables
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test the connection to the database
pool.connect()
  .then(client => {
    console.log("✅ Successfully connected to the database!");
    client.release(); // Release the client back to the pool
  })
  .catch(err => {
    console.error("❌ Error connecting to the database:", err.stack);
  });



module.exports = pool;
