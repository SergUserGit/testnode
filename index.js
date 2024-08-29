import express from "express";

import planetRouter from "./routes/api/planets-router.js";
import cors from "cors";

const app = express();
const corsMidl = cors();
app.use(corsMidl);

app.use("/api/planets", planetRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => console.log("Server is runningn"));
