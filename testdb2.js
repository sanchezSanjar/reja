const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

console.log("MongoDB version:", mongodb.version);

const user = "sanchez";
const password = "3MdMF6hB4YKloWgA";
const cluster = "cluster0.imuv4gc.mongodb.net";
const dbName = "REJA";

const connectionString = `mongodb+srv://${user}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;

console.log("Connection string:", connectionString); // ✅ lets see what string is built

MongoClient.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("❌ ERROR:", err.message);
    } else {
      console.log("✅ Connected!");
      client.close();
    }
  }
);
