import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import connectToMongoDB from "./connections/mongo";
connectToMongoDB("mongodb://127.0.0.1:27017", "DatabaseName");

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${port}`);
});
