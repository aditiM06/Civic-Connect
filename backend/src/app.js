import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.json({
    message: "CivicConnect API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);


export default app;