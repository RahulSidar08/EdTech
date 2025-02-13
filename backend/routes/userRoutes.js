import express from "express"
const router = express.Router();
import { studentRegister , login, getDetails } from "../controller/authController.js";
import { checkStudentRole } from "../middleware/roleChecker.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
router.post("/register",checkStudentRole, studentRegister)
router.post("/login",checkStudentRole, login)

router.get("/details", isAuthenticated , getDetails)
export default router;