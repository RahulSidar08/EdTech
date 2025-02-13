import express from "express"
const router = express.Router();
import { login } from "../controller/authController.js";
import { checkAgentRole } from "../middleware/roleChecker.js";
import { agentRegister } from "../controller/agent.controller.js";
router.post("/register",checkAgentRole,  agentRegister)
router.post("/login",checkAgentRole, login)
export default router;