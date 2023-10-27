import { Router } from "express";
import customerRouter from "./customerRouter.js";

const mainRouter = Router();

mainRouter.use('/customers', customerRouter);

export default mainRouter;