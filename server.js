const http = require("http");
const mongodb = require("mongodb");

let db;

const connectionString =
  "mongodb+srv://sanchez:3MdMF6hB4YKloWgA@cluster0.imuv4gc.mongodb.net/?appName=Cluster0/REJA";

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
