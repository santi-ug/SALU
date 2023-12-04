import { Router } from "express";
import { deleteUser, getAllUsers, getUser, login, logout, profile, register, test, updateUser } from "../controllers/authController.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import { authRequired } from "../middlewares/validateToken.js";

const authRouter = Router();

// authRouter.

authRouter.get('/', test);

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logout)

authRouter.get('/all-users', getAllUsers)
authRouter.get('/:id', authMiddleware, isAdmin, getUser)
authRouter.delete('/:id', deleteUser)
authRouter.put('/edit-user', authMiddleware, updateUser)

// authRouter.get('/profile', authRequired, profile)

export default authRouter;
