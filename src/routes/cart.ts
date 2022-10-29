import { Router } from "express";
import {
  addNewCart,
  getUserCart,
  getAllCarts,
} from "../controllers/cart.controller";

const router = Router();

router.post("/", addNewCart);
router.get("/", getAllCarts);
router.get("/:userId", getUserCart);

export default router;
