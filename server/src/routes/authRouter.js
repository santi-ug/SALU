import cors from "cors";
import { Router } from "express";
import { test } from "../controllers/authController.js";

const authRouter = Router();

authRouter.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

authRouter.get('/test', test);

export default authRouter;
