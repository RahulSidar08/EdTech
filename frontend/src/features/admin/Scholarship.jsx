import { useGetScholarship } from "@/hooks/useGetScholarship";
import React from "react";
import { useSelector } from "react-redux";


export const Scholarship = () => {
  useGetScholarship();
  const scholarshipData = useSelector((state) => state.entities.scholarships);

  return (
    <div className="flex flex-col gap-8 mt-6 px-4">
      {scholarshipData &&
        scholarshipData.map((scholarship, idx) => {
          return (
            <div
              key={scholarship._id}
              className={`w-full p-6 bg-white shadow-xl rounded-2xl border-l-8 border-blue-500 hover:shadow-2xl transition-shadow duration-300`}
            >
              {/* Title */}
              <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-indigo-500 to-blue-500 p-3 rounded-md mb-4 shadow-md">
                {scholarship.title}
              </h1>

              {/* Description */}
              <p className="text-gray-700 mb-4">{scholarship.description}</p>

              {/* Eligibility */}
              <div className="mb-4 bg-gray-50 p-4 rounded-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Eligibility
                </h2>
                <p className="text-gray-600">
                  🎓 Degree: <span className="font-medium">{scholarship.eligibility.degree}</span>
                </p>
                <p className="text-gray-600">
                  📍 Location: <span className="font-medium">{scholarship.eligibility.location}</span>
                </p>
                <p className="text-gray-600">
                  💰 Amount: <span className="font-medium">${scholarship.amount.toLocaleString()}</span>
                </p>
                <p className="text-gray-600">
                  🗓️ Deadline:{" "}
                  <span className="font-medium">
                    {new Date(scholarship.deadline).toLocaleDateString()}
                  </span>
                </p>
              </div>

              {/* Added By */}
              <div className="mb-4 text-sm text-gray-500">
                <p>
                  📌 Added By: <span className="font-semibold text-gray-700">{scholarship.addedBy}</span>
                </p>
              </div>

              {/* Applications */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Applications
                </h2>
                {scholarship.applications.length > 0 ? (
                  <ul className="list-disc pl-5 text-gray-700">
                    {scholarship.applications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No applications yet.</p>
                )}
              </div>

              {/* Timestamps */}
              <div className="text-gray-500 text-sm">
                <p>
                  🕒 Created At:{" "}
                  {new Date(scholarship.createdAt).toLocaleDateString()}
                </p>
                <p>
                  🔄 Updated At:{" "}
                  {new Date(scholarship.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
