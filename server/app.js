import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import db from "./src/config/dbconfig.js";
import mainRouter from "./src/routes/mainRouter.js";
const app = express();

app.use(cors());
db();


app.use('/api/v1', mainRouter);

export default app;