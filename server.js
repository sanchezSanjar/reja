console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
  // TODO: code with DB here
});

app.get("/", function (req, res) {
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3001;

server.listen(PORT, function () {
  console.log(
    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  );
});
