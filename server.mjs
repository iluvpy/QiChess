import express from "express";
import path from "path";
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

var db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  console.log()
});

const app = express();
const port = 3000;
const host = "localhost";

app.set("view-engine", "ejs");
app.use(express.static("public"));


function getWebPage(url) {
    return path.join(process.cwd(), `views/${url}.ejs`);
}

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    res.render(getWebPage("home"));
});

app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`);
});