import express from "express";

import planetRouter from "./routes/api/planets-router.js";
import cors from "cors";

const app = express();
const corsMidl = cors();
app.use(corsMidl);

app.use("/api/planets", planetRouter);
app.listen(3000, () => console.log("Server is runningn"));
