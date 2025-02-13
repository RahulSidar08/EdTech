import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
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
      enum: ["student"],
      default : "student",
      required: true,
    },
    profile: {
      bio: { type: String },
      education: {
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        graduationYear: { type: Number, required: true },
      },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
    assignedAgent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent", // Referencing Agent Schema
    },
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);
