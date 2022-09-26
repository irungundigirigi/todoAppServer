require('dotenv').config();
const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    port: 5432,
    password: process.env.PASSWORD,
    database: "todo_app_db"

})

module.exports = pool;