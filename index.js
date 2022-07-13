const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
// Connection URL
const url =
  "mongodb+srv://dedikurniawanx:dedi12345@cluster0.6tm4xmc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
// Database Name
const dbName = "webnext";

app.get("/", async (asyreq, res) => {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("nextjs");
  //   console.log(await collection.find({}).toArray());
  const dataWeb = await collection.find({}).toArray();
  res.status(200).json({ dataWeb });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
