const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "movie_info",
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed: ", err);
    } else {
        console.log("Connected to MySQL Successfully");
    }
});

app.get("/movie", (req, res) => {
    const query = "SELECT * FROM movie";
    db.query(query, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Database error");
        } else {
            res.json(results);
        }
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});