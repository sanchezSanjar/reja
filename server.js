const http = require("http");
const mongodb = require("mongodb");

let db;
const user = encodeURIComponent("sanchez");
const password = encodeURIComponent("qNRrL6g3Fj6GrHzE");
const cluster = "cluster0.iaq75mr.mongodb.net";
const connectionString = `mongodb+srv://${user}:${password}@${cluster}/Reja?retryWrites=true&w=majority`;

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3002;
      server.listen(PORT, function () {
        console.log(
          `The server running succesfully on port:${PORT},  http://localhost:${PORT} `,
        );
      });
    }
  },
);