import { Router } from "express";
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from "../controllers/categoryController.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const categoryRouter = Router();

categoryRouter.post('/', authMiddleware, isAdmin, createCategory);
categoryRouter.get('/:id', getCategory);
categoryRouter.get('/', getAllCategories);
categoryRouter.put('/:id', authMiddleware, isAdmin, updateCategory);
categoryRouter.delete('/:id', authMiddleware, isAdmin, deleteCategory);

export default categoryRouter;
