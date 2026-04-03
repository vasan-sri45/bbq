import express from "express";
import {
  checkoutCart,
  getCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  AllCart
} from "../../controllers/product/cart.controller.js";

const router = express.Router();

router.post("/add", checkoutCart);
router.get("/:guestId", getCart);
router.get("/", AllCart);
router.post("/remove", removeFromCart);
router.post("/update", updateQuantity);
router.post("/clear", clearCart);

export default router;