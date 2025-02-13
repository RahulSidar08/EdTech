import express from "express"
const router = express.Router();
import { agentRegister , login } from "../controller/authController.js";
import { checkAgentRole } from "../middleware/roleChecker.js";
router.post("/register",checkAgentRole,  agentRegister)
router.post("/login",checkAgentRole, login)
export default router;