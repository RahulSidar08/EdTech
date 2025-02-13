import { Scholarship } from "../models/scholarshipModel.js";


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
            message : "Scholarship created Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "something went wrong",
            error
        })
    }
}