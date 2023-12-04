import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/productController.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter.post('/', authMiddleware, isAdmin, createProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProduct);
productRouter.put('/:id', authMiddleware, isAdmin, updateProduct);
productRouter.delete('/:id', authMiddleware, isAdmin, deleteProduct);

export default productRouter;
