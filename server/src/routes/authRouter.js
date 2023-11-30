import cors from "cors";
import { Router } from "express";
import { registerUser, test } from "../controllers/authController.js";

const authRouter = Router();

// authRouter.

authRouter.get('/', test);
authRouter.post('/register', registerUser)

export default authRouter;
