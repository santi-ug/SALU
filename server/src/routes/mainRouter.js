import cors from "cors";
import { Router } from "express";
import authRouter from "./authRouter.js";
import categoryRouter from "./categoryRouter.js";
import productRouter from "./productRouter.js";

const mainRouter = Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/products', productRouter);
mainRouter.use('/categories', categoryRouter);

export default mainRouter;