import { Router } from "express";
import * as HomeController from "../controllers/home.controller.js";
import * as ProductController from "../controllers/product.controller.js";

const router = Router();

router.get("/products/:name", ProductController.detail);
router.get("/products", ProductController.index);
router.get("/home", HomeController.index);
router.get("/", HomeController.index);

export default router;