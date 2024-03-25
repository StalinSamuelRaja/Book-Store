import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import { bookRouter } from "./router/bookRouter.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connected!"));

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use(cors());

app.get("/",(req,res)=>{res.status(234).send("WELCOME TO MY BOOK STORE")})
app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
