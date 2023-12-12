const mysql = require('mysql');
const conn = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    charset: "utf8mb4",
    database: "kuliah",
    timezone: '+07:00'
});

conn.getConnection((err) => {
    if (err) throw err
    console.log('Connected!')
});

module.exports = conn;