import cors from "cors";
import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";

const mainRouter = Router();

mainRouter.use('/customers', userRouter);
mainRouter.use('/auth', authRouter);

export default mainRouter;