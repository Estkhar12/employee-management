import express from "express";
import mongoose from "mongoose";
import dotevn from "dotenv";
dotevn.config();
import routeUser from "./routes/user.js";

const app = express();
app.use(express.json());

app.use("/api", routeUser);

const port = 8000;

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on("connected", () => {
  console.log("database connected!");
});

app.listen(port, () => {
  console.log("Server is running on 8000");
});
