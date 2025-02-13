import mongoose from "mongoose";

const scholarshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    eligibility: {
      degree: { type: String, required: true },
      location: { type: String }
    },
    amount: {
      type: Number,
      required: true
    },
    deadline: {
      type: Date,
      required: true
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin" // or "Agent"
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
  },
  { timestamps: true }
);

export const Scholarship = mongoose.model("Scholarship", scholarshipSchema);
