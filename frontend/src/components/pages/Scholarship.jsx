import { useGetScholarship } from "@/hooks/useGetScholarship";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import { errorHandler, successHandler } from "../../ToastMessage/toast";
import { ToastContainer } from "react-toastify";
export const Scholarship = () => {
  useGetScholarship();
  const scholarshipData = useSelector((state) => state.entities.scholarships);
  let user = useSelector((state) => state.auth.user);
  let studentId = user._id;
  console.log(studentId);
  const handleApply = async (scholarshipId) => {
    let data = {
      studentId: studentId,
      scholarshipId: scholarshipId,
    };
    try {
      let res = await axios.post(`${USER_API_END_POINT}/student/apply`, data, {
        withCredentials: true,
      });
      console.log(res);
      console.log(res.data.message);
      successHandler(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const checkAlreadyApplied = (applicants) => {
    return applicants.some((id) => id.toString() === studentId.toString());
  };
  return (
    <>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarshipData.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2 text-indigo-700">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <div className="text-sm text-gray-500 mb-2">
              <span className="block">
                <strong>Amount:</strong> ₹{item.amount}
              </span>
              <span className="block">
                <strong>Deadline:</strong>{" "}
                {new Date(item.deadline).toLocaleDateString()}
              </span>
              <span className="block">
                <strong>Eligibility:</strong> {item.eligibility?.degree}
              </span>
              <span className="block">
                <strong>Location:</strong> {item.eligibility?.location}
              </span>
            </div>
            {checkAlreadyApplied(item.applicants) ? (
              <button  disabled className="mt-4 px-4 py-2 bg-indigo-300 text-white rounded  transition">
                Already Applied
              </button>
            ) : (
              <button
                onClick={() => {
                  handleApply(item._id);
                }}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Apply
              </button>
            )}
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};
