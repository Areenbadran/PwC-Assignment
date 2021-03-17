const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

//Create connection with local database
const connection = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB
});

connection.query("select 1+1", (err, rows, fields) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;