import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
export const MyApplication = () => {
  let user = useSelector((state) => state.auth.user);
  let studentId = user._id;
  console.log(user)
  const [applicationData, setApplicationData] = useState([]);
  const [loading,setLoading] = useState(false)
  console.log(studentId);
  useEffect(() => {
    const getApplicationData = async () => {
      try {
        const res = await axios.get(
          `${USER_API_END_POINT}/student/viewApplication/${studentId}`,{
            withCredentials:true
          }
        );
        console.log(res);
        setApplicationData(res.data.applications);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getApplicationData();
  }, []);
  return (
    <>
      <div className="p-6 font-sans">
        {loading ? (
          <div className="space-y-4">
            {applicationData.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-md p-5 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  <span className="font-bold text-blue-600">Title:</span>{" "}
                  {item.scholarship?.title}
                </h3>
                <p className="text-gray-700">
                  <span className="font-medium">Status:</span> {item.status}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Amount:</span> $
                  {item.scholarship?.amount}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Deadline:</span>{" "}
                  {new Date(item.scholarship?.deadline).toLocaleDateString()}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Eligibility:</span>{" "}
                  {item.scholarship?.eligibility?.degree} in{" "}
                  {item.scholarship?.eligibility?.location}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-base">Loading...</p>
        )}
      </div>
    </>
  );
};
