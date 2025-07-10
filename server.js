import express from "express";
import "dotenv/config";
import connectDb from "./src/config.js";
import { Publisher } from "./src/models/publisher.js";
import { Magazine } from "./src/models/magazine.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello Mongoose" });
});

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
