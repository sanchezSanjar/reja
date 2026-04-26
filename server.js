const http = require("http");
const mongodb = require("mongodb");

let db;

const connectionString =
  "mongodb+srv://sanchez:qNRrL6g3Fj6GrHzE@cluster0.iaq75mr.mongodb.net/?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("✅ MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3001;
      server.listen(PORT, function () {
        console.log(`✅ Server running on http://localhost:${PORT}`);
      });
    }
  }
);
