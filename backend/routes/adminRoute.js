import express from "express"
const router = express.Router();
import { login, logout } from "../controller/authController.js";
import { checkAdminRole } from "../middleware/roleChecker.js";
import {isAuthenticated} from "../middleware/isAuthenticated.js"
import { createScholarship } from "../controller/scholarship.controller.js";
import { adminRegister, assignAgent, getAllAgents, getAllStudents } from "../controller/admin.controller.js";
router.post("/register", adminRegister)
router.post("/login", checkAdminRole, login)
router.post("/postScholarship", isAuthenticated , createScholarship)
router.get("/getStudents",isAuthenticated,getAllStudents)
router.get("/getAgents" , isAuthenticated , getAllAgents)
router.post("/assign",isAuthenticated,assignAgent)
router.post("/logout" ,logout)

export default router;