const express = require("express");
const mysql = require("mysql");
const app = express ();
const conn = require('./db')

app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`dataparu API started on port ${port}`);
});

app.get("/", async (req, res) => {
    res.json({ status: "data paru siap!"});
});

app.get("/:dataparu", async (req, res) => {
    const query = "SELECT * FROM dataparu WHERE name = ?";
    pool.query(query, [ req.params.dataparu ], (error, results) => {
        if (!results[0]) {
            res.json({ status: "Not found!" });
        } else {
            res.json(results[0]);
        }
    });
});

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
});

