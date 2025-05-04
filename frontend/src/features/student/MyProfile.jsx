import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const MyProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const studentId = user._id;
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApplicationData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/student/profile/${studentId}`
        );
        setStudentData(res.data.student);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setLoading(false);
      }
    };
    getApplicationData();
  }, [studentId]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">Loading profile...</p>
    );
  }

  if (!studentData) {
    return (
      <p className="text-center mt-10 text-red-500">No student data found.</p>
    );
  }

  const {
    fullname,
    email,
    phoneNumber,
    profile,
    role,
    assignedAgent,
    profilePhoto,
  } = studentData;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        My Profile
      </h2>

      {profilePhoto && (
        <div className="flex justify-center mb-4">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
          />
        </div>
      )}

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Full Name:</span> {fullname}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Phone Number:</span> {phoneNumber}
        </p>
        <p>
          <span className="font-semibold">Role:</span> {role}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
        <p>
          <span className="font-medium">Degree:</span>{" "}
          {profile?.education?.degree}
        </p>
        <p>
          <span className="font-medium">Institution:</span>{" "}
          {profile?.education?.institution}
        </p>
        <p>
          <span className="font-medium">Graduation Year:</span>{" "}
          {profile?.education?.graduationYear}
        </p>
      </div>
      <div className="items-center mt-5">
      <Link className="px-4 py-2 bg-blue-600 rounded-md text-white" to="/edit">Edit Profile </Link>
      </div>
    </div>
  );
};
