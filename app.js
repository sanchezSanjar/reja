console.log("Web Serverni boshlash");
const express = require("express");
const { ObjectId } = require("mongodb"); // ✅ needed to delete by ID
const app = express();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", async (req, res) => {
  console.log("user entered /create-item");
  try {
    const db = req.app.locals.db;
    const new_reja = req.body.reja;
    console.log("Adding item:", new_reja);
    await db.collection("plans").insertOne({ reja: new_reja });
    res.redirect("/");
  } catch (err) {
    console.log("❌ create-item error:", err.message);
    res.end("something went wrong: " + err.message);
  }
});

// ✅ Delete one item
app.post("/delete-item", async (req, res) => {
  console.log("user entered /delete-item");
  try {
    const db = req.app.locals.db;
    await db.collection("plans").deleteOne({ _id: new ObjectId(req.body.id) });
    console.log("✅ Item deleted");
    res.redirect("/");
  } catch (err) {
    console.log("❌ delete-item error:", err.message);
    res.end("something went wrong: " + err.message);
  }
});

// ✅ Delete all items
app.post("/delete-all", async (req, res) => {
  console.log("user entered /delete-all");
  try {
    const db = req.app.locals.db;
    await db.collection("plans").deleteMany({});
    console.log("✅ All items deleted");
    res.redirect("/");
  } catch (err) {
    console.log("❌ delete-all error:", err.message);
    res.end("something went wrong: " + err.message);
  }
});

app.get("/", async (req, res) => {
  console.log("user entered /");
  try {
    const db = req.app.locals.db;
    const data = await db.collection("plans").find().toArray();
    console.log("✅ Data from DB:", data);
    res.render("reja", { items: data });
  } catch (err) {
    console.log("❌ GET / error:", err.message);
    res.end("something went wrong: " + err.message);
  }
});

module.exports = app;
