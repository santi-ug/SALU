import { Router } from "express";
import { serverTest } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/test', serverTest);

export default userRouter;