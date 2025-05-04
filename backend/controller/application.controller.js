import { Application } from "../models/applicationModel.js";

export const updateStatus = async (req, res) => {
    try {
      let { status,applicationId ,agentId} = req.body;
  
      // Check if the status is valid
      const validStatuses = ["Pending", "Under Review", "Accepted", "Rejected"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Invalid status",
        });
      }
  
      // Find the application
      let application = await Application.findById(applicationId);
      if (!application) {
        return res.status(404).json({
          success: false,
          message: "Application not found",
        });
      }
  
      // Update the status and the person who updated it
      application.status = status;
      application.updatedBy = agentId;
      await application.save(); // Await the save
  
      return res.status(200).json({
        success: true,
        message: "Status Updated Successfully",
      });
    } catch (error) {
      console.error("Error in Updating Status:", error);
      return res.status(500).json({
        success: false,
        message: "Server Error",
        error,
      });
    }
  };