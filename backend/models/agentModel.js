import mongoose from "mongoose";

const agentSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["agent"],
      default: "agent",
      required: true,
    },
    agencyDetails: {
      agencyName: { type: String, required: true },
      agencyAddress: { type: String, required: true },
    },
    assignedStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student", // Referencing Student Schema
      },
    ],
  },
  { timestamps: true }
);

export const Agent = mongoose.model("Agent", agentSchema);
