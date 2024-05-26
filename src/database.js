const mysql = require('mysql2')

const { config } = require('dotenv')
config()

const pool = mysql.createPool({
    host: process.env.Classroom_MYSQL_HOST,
    port: process.env.Classroom_MYSQL_PORT,
    user: process.env.Classroom_MYSQL_USER,
    password: process.env.Classroom_MYSQL_PASSWORD,
    database: process.env.Classroom_MYSQL_DATABASE
}).promise()

module.exports = pool