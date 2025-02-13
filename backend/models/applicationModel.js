import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    scholarship : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Scholarship",
    },
    Applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    status: {
      type: String,
      enum: ["Pending", "Under Review", "Accepted", "Rejected"],
      default: "Pending"
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent" // or "Admin"
    }
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);
