import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const EditProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const studentId = user._id;
  console.log(studentId)

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    profilePhoto: "",
    education: {
      degree: "",
      institution: "",
      graduationYear: ""
    }
  });

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  // Fetch current data
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/student/profile/${studentId}`);
        const student = res.data.student;
        setFormData({
          fullname: student.fullname || "",
          email: student.email || "",
          phoneNumber: student.phoneNumber || "",
          profilePhoto: student.profilePhoto || "",
          education: {
            degree: student.profile?.education?.degree || "",
            institution: student.profile?.education?.institution || "",
            graduationYear: student.profile?.education?.graduationYear || ""
          }
        });
        setLoading(false);
      } catch (error) {
        console.error("Error loading student:", error);
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["degree", "institution", "graduationYear"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          [name]: value
        }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`http://localhost:5000/student/updateProfile/${studentId}`, formData );
      console.log(res)
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8 border">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Full Name" name="fullname" value={formData.fullname} onChange={handleChange} />
        <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
        <Input label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        <Input label="Profile Photo URL" name="profilePhoto" value={formData.profilePhoto} onChange={handleChange} />

        <h3 className="text-lg font-semibold text-gray-700 mt-6">Education Info</h3>
        <Input label="Degree" name="degree" value={formData.education.degree} onChange={handleChange} />
        <Input label="Institution" name="institution" value={formData.education.institution} onChange={handleChange} />
        <Input label="Graduation Year" name="graduationYear" value={formData.education.graduationYear} onChange={handleChange} />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Save Changes
        </button>

        {success && <p className="text-green-600 text-center mt-2">Profile updated successfully!</p>}
      </form>
    </div>
  );
};

// Reusable input component
const Input = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
    />
  </div>
);
