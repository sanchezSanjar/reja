const { MongoClient } = require("mongodb");

const user = encodeURIComponent("sanchez");
const password = encodeURIComponent("qNRrL6g3Fj6GrHzE");
const cluster = "cluster0.iaq75mr.mongodb.net";
const connectionString = `mongodb+srv://${user}:${password}@${cluster}/?retryWrites=true&w=majority`;

console.log("String:", connectionString);

async function test() {
  try {
    const client = await MongoClient.connect(connectionString);
    console.log("✅ Connected!");
    client.close();
  } catch (err) {
    console.log("❌ ERROR:", err.message);
  }
}

test();
