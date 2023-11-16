import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import mainRouter from "./src/routes/mainRouter.js";
const app = express();

app.use(cors());
// mongoose.connect('mongodb://localhost/DATABASENAME', { useNewUrlParser: true, useUnifiedTopology: true});



app.use('/api/v1', mainRouter);

export default app;
