const express = require('express');
const db = require('./config/db'); // Import PostgreSQL connection


const app = express();
app.use(express.json());



const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log(`Server is now  running on port ${port}`);
});

module.exports = db;