import express from "express";
const app = express();

import connectToMongoDB from "./connections/mongo";
connectToMongoDB("mongodb://127.0.0.1:27017", "DatabaseName");

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
