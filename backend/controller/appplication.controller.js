import { Application } from "../models/applicationModel";
import { Scholarship } from "../models/scholarshipModel";

export const applyForScholarship = async (req, res) => {
  try {
    let userId = req.id;
    let scholarshipId = req.params.id;
    if (!scholarshipId) {
      return res.status(400).json({
        success: false,
        message: "Scholarship requires",
      });
    }

    const scholarship = await Application.create({
      scholarshipId,
      userId,
    });

    return res.status(200).json({
      success: true,
      message: "Applied Successfully",
      scholarship,
    });
  } catch (error) {
    return res.status(500).json({
        success : false,
        message : "Something went wrong",
        error
    })
  }
};
