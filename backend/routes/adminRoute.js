import express from "express"
const router = express.Router();
import { adminRegister , login } from "../controller/authController.js";
import { checkAdminRole } from "../middleware/roleChecker.js";
router.post("/register", checkAdminRole, adminRegister)
router.post("/login", checkAdminRole, login)
export default router;