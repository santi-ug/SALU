import cors from "cors";
import { Router } from "express";
import authRouter from "./authRouter.js";
import customerRouter from "./customerRouter.js";

const mainRouter = Router();

mainRouter.use('/customers', customerRouter);
mainRouter.use('/auth', authRouter);

export default mainRouter;