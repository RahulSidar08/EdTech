import { useGetScholarship } from "@/hooks/useGetScholarship";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Scholarship = () => {
  useGetScholarship();
  const scholarshipData = useSelector((state) => state.entities.scholarships);
  return (
    <>
    <div className="flex flex-col gap-4 mt-5 space-y-6">
      {scholarshipData && scholarshipData.map((scholarship) => (
        <div
          key={scholarship._id}
          className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg ml-4"
        >
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {scholarship.title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-4">{scholarship.description}</p>

          {/* Eligibility */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Eligibility</h2>
            <p className="text-gray-600">
              Degree: {scholarship.eligibility.degree}
            </p>
            <p className="text-gray-600">
              Location: {scholarship.eligibility.location}
            </p>
            <p className="text-gray-600">
              Amount: ${scholarship.amount.toLocaleString()}
            </p>
            <p className="text-gray-600">
              Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
            </p>
          </div>

          {/* Added By */}
          <div className="mb-4">
            <p className="text-gray-600">
              Added By:{" "}
              <span className="font-semibold">{scholarship.addedBy}</span>
            </p>
          </div>

          {/* Applications */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Applications
            </h2>
            {scholarship.applications.length > 0 ? (
              <ul className="list-disc pl-5">
                {scholarship.applications.map((application, index) => (
                  <li key={index} className="text-gray-600">
                    {application}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No applications yet.</p>
            )}
          </div>

          {/* Created At / Updated At */}
          <div className="text-gray-600 text-sm">
            <p>
              Created At: {new Date(scholarship.createdAt).toLocaleDateString()}
            </p>
            <p>
              Updated At: {new Date(scholarship.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}

    </div>
    </>
  );
};
