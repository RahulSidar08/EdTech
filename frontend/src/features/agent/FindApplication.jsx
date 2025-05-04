import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";

export const FindApplication = () => 
{
  const user = useSelector((state) => state.auth.user);
  const [studentId, setStudentId] = useState("");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newStatus, setNewStatus] = useState("Pending");

  const agentId = user._id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!studentId.trim()) {
      setError("Please enter a valid Student ID");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const res = await axios.get(
        `${USER_API_END_POINT}/agent/getApplication`,
        {
          params: { agentId, studentId },
          withCredentials: true,
        }
      );
      console.log("API Response:", res.data);
      setApplications([res.data.application]);
      if (res.data.application.length === 0) {
        setError("No applications found for this Student ID.");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };
  

  const handleUpdate = async (id) => {
    const data = {
      status : newStatus,
      applicationId : id,
      agentId:agentId
    }
    try {
      const res = await axios.patch(`${USER_API_END_POINT}/agent/updateApplication`,data,
        { withCredentials: true }
      );
      console.log(res)
      alert("Status updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    }
  }

  return (
    <div className="p-4 max-w-lg">
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Fetching..." : "Get Application"}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <table className="min-w-full bg-white border border-gray-300 rounded-md mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Application ID</th>
            <th className="px-4 py-2 border">Student ID</th>
            <th className="px-4 py-2 border">Scholarship ID</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Created At</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={app._id} className="text-center">
              <td className="border px-4 py-2">{app._id}</td>
              <td className="border px-4 py-2">{app.Applicant}</td>
              <td className="border px-4 py-2">{app.scholarship}</td>
              <td className="border px-4 py-2">
                {app.status}
                <select
                  value={newStatus}
                  onChange={(e) => {
                    setNewStatus(e.target.value);
                  }}
                  className="border rounded px-2 py-1 mt-1"
                >
                  <option value="Under Review">Under Review</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td className="border px-4 py-2">
                {new Date(app.createdAt).toLocaleString()}
              </td>
              <td className="border px-4 py-2">
                <button
                onClick={() => {
                  handleUpdate(app._id)
                }}

                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
