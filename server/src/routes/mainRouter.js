import cors from "cors";
import { Router } from "express";
import authRouter from "./authRouter.js";
import productRouter from "./productRouter.js";

const mainRouter = Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/products', productRouter);

export default mainRouter;