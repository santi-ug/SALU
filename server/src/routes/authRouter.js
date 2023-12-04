import { Router } from "express";
import { login, logout, profile, register, test } from "../controllers/authController.js";
import { authRequired } from "../middlewares/validateToken.js";

const authRouter = Router();

// authRouter.

authRouter.get('/', test);

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)

authRouter.get('/profile', authRequired, profile)

export default authRouter;
