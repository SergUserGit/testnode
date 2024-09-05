import express from "express";
import mongoose from "mongoose";

import planetRouter from "./routes/api/planets-router.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const corsMidl = cors();
app.use(corsMidl);
app.use(express.json());

app.use("/api/planets", planetRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    app.listen(3000, () => console.log("Server is running sucsesfully!"));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
