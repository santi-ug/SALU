import cors from "cors";
import { Router } from "express";
import { loginUser, registerUser, test } from "../controllers/authController.js";

const authRouter = Router();

// authRouter.

authRouter.get('/', test);
authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)

export default authRouter;
