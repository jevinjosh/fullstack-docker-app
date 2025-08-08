const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 5000;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

app.get('/api', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json({ message: 'Hello from backend!', time: result.rows[0] });
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
