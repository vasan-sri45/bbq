import express from "express";
import { registerEmployee, login,logoutEmployee, getMe } from "../../controllers/auth/employee.controller.js";
import { employeeProtectRoute } from "../../middleware/protect.route.js";

const router = express.Router();

router.post("/register", registerEmployee);
router.post("/login", login);
router.post("/logout", logoutEmployee);

// 🔐 Protected route test
router.get("/me", employeeProtectRoute, getMe);

export default router;