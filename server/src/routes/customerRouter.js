import { Router } from "express";
import { serverTest } from "../controllers/customerController.js";

const customerRouter = Router();

customerRouter.get('/test', serverTest);

export default customerRouter;