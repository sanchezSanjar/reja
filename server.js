const http = require("http");
const { MongoClient } = require("mongodb"); // ✅ correct import

let db;

const user = encodeURIComponent("sanchez");
const password = encodeURIComponent("qNRrL6g3Fj6GrHzE");
const cluster = "cluster0.iaq75mr.mongodb.net";
const connectionString = `mongodb+srv://${user}:${password}@${cluster}/?retryWrites=true&w=majority`; // ✅ template literal avoids hidden character issues

async function start() {
  try {
    const client = await MongoClient.connect(connectionString);
    console.log("✅ MongoDB connection succeed");

    db = client.db("Reja"); // ✅ get db

    const app = require("./app");
    app.locals.db = db; // ✅ pass db to app correctly

    const server = http.createServer(app);
    let PORT = 3001;
    server.listen(PORT, function () {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("❌ ERROR:", err.message);
    process.exit(1);
  }
}

start();
