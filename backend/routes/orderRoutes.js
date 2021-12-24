import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
  updateOrderToPriced,
  updateOrderToShipped,
  createPayment,
  validatePayment,
} from "../controllers/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/").post(addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(getOrderById);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);
router.route("/:id/priced").put(protect, admin, updateOrderToPriced);
router.route("/:id/ship").put(protect, admin, updateOrderToShipped);
router.route("/createPayment").post(createPayment);
router.route("/validatePayment").post(validatePayment);

export default router;
