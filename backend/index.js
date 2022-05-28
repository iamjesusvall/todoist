import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import apiRouter from "./routes/api.js";
import cors from "cors";

dotenv.config({
  path: "variables.env",
});

// Create server
const app = express();

// Server settings
app.use(express.json({ extended: true }));
app.use(cors());

// Server port
const PORT = process.env.PORT || 4000;

// Routes
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
