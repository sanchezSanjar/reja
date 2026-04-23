console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const path = require("path");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish code
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
  // TODO: code with DB here
});

app.get("/develop", (req, res) => {
  res.render("develop", { user: user });
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3001;

server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
