import { Agent } from "../models/agentModel";
import { Student } from "../models/studentModel";

import { Agent } from "../models/agentModel";
import { Student } from "../models/studentModel";

export const assignAgent = async (req, res) => {
  try {
    let { studentId, agentId } = req.body;

    // Check if required fields are present
    if (!studentId || !agentId) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    // Check if student and agent exist
    let student = await Student.findById(studentId);
    let agent = await Agent.findById(agentId);

    if (!student || !agent) {
      return res.status(400).json({
        success: false,
        message: "Student or Agent does not exist",
      });
    }

    // Assign the agent to the student
    student.assignedAgent = agentId;
    agent.assignedStudents.push(studentId)
    await student.save();
    await agent.save();

    return res.status(200).json({
      success: true,
      message: "Agent Assigned Successfully",
    });

  } catch (error) {
    console.error("Error in assigning agent:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error
    });
  }
};

