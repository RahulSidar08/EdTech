import { Scholarship } from "../models/scholarshipModel.js";
import { Application } from "../models/applicationModel.js";

export const createScholarship = async (req,res) => {
    try {
        let {title, description,eligibility,amount,deadline} = req.body;
        let userId = req.id;
        if(!title || !description || !eligibility || !amount || !deadline)
        {
            return res.status(400).json({
                success : false,
                message : "All fields are mandatory!"
            })
        }

        let scholarship = await Scholarship.create({
            title,
            description,
            eligibility,
            amount,
            deadline,
            addedBy : userId
        })
        return res.status(200).json({
            success : true,
            message : "Scholarship created Successfully",
            scholarship
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            error
        })
    }
}

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

    let existingApplication = await Application.findOne({ Applicant: userId });
    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "Already Applied",
      });
    }    

    const application = await Application.create({
      scholarship: scholarshipId,
      Applicant : userId,
    });

    return res.status(200).json({
      success: true,
      message: "Applied Successfully",
      application,
    });
  } catch (error) {
    return res.status(500).json({
        success : false,
        message : "Something went wrong",
        error
    })
  }
};
