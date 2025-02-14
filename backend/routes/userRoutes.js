import express from "express"
const router = express.Router();
import {  login, getDetails, logout } from "../controller/authController.js";
import { checkStudentRole } from "../middleware/roleChecker.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { applyForScholarship } from "../controller/scholarship.controller.js";
import { studentRegister } from "../controller/student.controller.js";

router.post("/register",studentRegister)
router.post("/login",checkStudentRole, login)
router.post("/logout",logout);
router.get("/details", isAuthenticated , getDetails)
router.post("/apply/:id",isAuthenticated,applyForScholarship)
export default router;