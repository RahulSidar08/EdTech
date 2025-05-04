import express from "express"
const router = express.Router();
import {  login, getDetails, logout } from "../controller/authController.js";
import { checkStudentRole } from "../middleware/roleChecker.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { applyForScholarship, getMyApplications, getProfile, updateProfile } from "../controller/student.controller.js";
import { studentRegister, viewAllScholarship } from "../controller/student.controller.js";
import { getScholarshipRecommendations } from "../controller/profileMathcer.controller.js";

router.post("/register",studentRegister)
router.post("/login",checkStudentRole, login)
router.post("/logout",logout);
router.get("/details", isAuthenticated , getDetails)
router.post("/apply",isAuthenticated,applyForScholarship)
router.get("/getScholarship",viewAllScholarship)
router.get("/viewApplication/:studentId",getMyApplications)
router.get("/profile/:id",getProfile)
router.patch("/updateProfile/:id",updateProfile)
router.get("/recommendation",getScholarshipRecommendations)


export default router;