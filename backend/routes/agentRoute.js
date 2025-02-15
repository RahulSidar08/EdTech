import express from "express"
const router = express.Router();
import { login, logout } from "../controller/authController.js";
import { checkAgentRole } from "../middleware/roleChecker.js";
import { agentRegister, getStudents } from "../controller/agent.controller.js";
import {isAuthenticated} from "../middleware/isAuthenticated.js"


router.post("/register", agentRegister)
router.post("/login",checkAgentRole, login)
router.post("/logout",logout)
router.post("/getStudent",isAuthenticated ,getStudents)
export default router;