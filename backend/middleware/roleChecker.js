import { Admin } from "../models/adminModel.js";
import { Agent } from "../models/agentModel.js";
import { Student } from "../models/studentModel.js";

export const checkStudentRole = async (req, res, next) => {
  let { email } = req.body;
  const user = await Student.findOne({ email });
  if (!user) {
    return res.status(500).json({
      success: false,
      message: "Unauthorised Access",
    });
  }

  if (user.role !== "student") {
    return res.status(403).json({ message: "Access Forbidden" });
  }
  next();
};

export const checkAdminRole = async (req, res, next) => {
  let { email } = req.body;
  const user = await Admin.findOne({ email });
  if (!user) {
    return res.status(500).json({
      success: false,
      message: "Unauthorised Access",
    });
  }
  if (user.role !== "admin") {
    return res.status(403).json({ message: "Access Forbidden" });
  }
  next();
};

export const checkAgentRole = async (req, res, next) => {
  let { email } = req.body;
  const user = await Agent.findOne({ email });
  if (!user) {
    return res.status(500).json({
      success: false,
      message: "Unauthorised Access",
    });
  }
  if (user.role !== "agent") {
    return res.status(403).json({ message: "Access Forbidden" });
  }
  next();
};
