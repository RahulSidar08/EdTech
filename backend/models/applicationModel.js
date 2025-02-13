import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    scholarship : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Scholarship",
        required : true
    },
    Applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true
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
