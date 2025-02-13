import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
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
      enum: ["admin"],
      default: "admin",
      required: true,
    },
    permissions: {
      manageUsers: { type: Boolean, default: true },
      manageAgents: { type: Boolean, default: true },
      viewReports: { type: Boolean, default: true },
    },
    managedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student", // Referencing Student Schema
      },
    ],
    managedAgents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agent", // Referencing Agent Schema
      },
    ],
  },
  { timestamps: true }
);

export const Admin = mongoose.model("Admin", adminSchema);
