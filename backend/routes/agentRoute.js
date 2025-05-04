import express from "express";
const router = express.Router();
import { login, logout } from "../controller/authController.js";
import { checkAgentRole } from "../middleware/roleChecker.js";
import {
  agentRegister,
  getApplications,
  getStudents,
  viewStudentScholarship,
} from "../controller/agent.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { updateStatus } from "../controller/application.controller.js";

router.post("/register", agentRegister);
router.post("/login", checkAgentRole, login);
router.post("/logout", logout);
router.post("/getStudent", isAuthenticated, getStudents);
router.get(
  "/getStudentScholarship/:id",
  isAuthenticated,
  viewStudentScholarship
);
router.get("/getApplication", isAuthenticated, getApplications);
router.patch("/updateApplication", isAuthenticated, updateStatus);
export default router;
