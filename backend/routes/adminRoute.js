import express from "express"
const router = express.Router();
import { login, logout } from "../controller/authController.js";
import { checkAdminRole } from "../middleware/roleChecker.js";
import {isAuthenticated} from "../middleware/isAuthenticated.js"
import { createScholarship } from "../controller/scholarship.controller.js";
import { adminRegister, assignAgent } from "../controller/admin.controller.js";
router.post("/register", adminRegister)
router.post("/login", checkAdminRole, login)
router.post("/postScholarship", isAuthenticated , createScholarship)
router.post("/assign",isAuthenticated,assignAgent)
router.post("/logout" ,logout)

export default router;