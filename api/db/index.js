require("dotenv").config();

const Pool = require('pg').Pool

const client = new Pool({
  user: (process.env.user || 'development'),
  host: (process.env.host || 'localhost'),
  database: (process.env.database || 'expenses'),
  password: (process.env.password || 'development'),
  port: (process.env.port || 5432),
})

module.exports = client;