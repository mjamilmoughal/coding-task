import { Router } from "express";

import {
  addNewProduct,
  getAllProducts,
} from "../controllers/product.controller";

const router = Router();

router.post("/", addNewProduct);
router.get("/", getAllProducts);

export default router;
