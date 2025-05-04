import { useGetAgents } from "@/hooks/useGetAgents";
import { Item } from "@radix-ui/react-radio-group";
import React from "react";
import { useSelector } from "react-redux";

export const Agent = () => {
  useGetAgents();
  const agentData = useSelector((state) => state.entities.agents);
  console.log("agent : ", agentData);
  return (
    <>
      <div className="flex flex-col">
        {
          <div className="p-6 space-y-6">
            {agentData.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-lg p-6 space-y-4"
              >
                <div className="text-lg font-bold text-gray-800">
                  {item.fullname}
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">Email:</span> {item.email}
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">Phone:</span>{" "}
                  {item.phoneNumber}
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">Agency Detail:</span>
                  <p>Agency Address:{item.agencyDetails.agencyAddress}</p>
                  <p>Agency Name:{item.agencyDetails.agencyName}</p>
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">Role:</span> {item.role}
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">Assigned Student :</span>{" "}
                  {item.assignedStudents[0]}
                </div>

                <div className="text-gray-600">
                  <span className="font-semibold">Profile Photo:</span>{" "}
                  {item.profilePhoto || "Not Uploaded"}
                </div>
                <div className="text-gray-500 text-sm">
                  Created At: {new Date(item.createdAt).toLocaleString()}
                </div>
                <div className="text-gray-500 text-sm">
                  Updated At: {new Date(item.updatedAt).toLocaleString()}
                </div>
                <div className="text-gray-500 text-sm">
                  Agent ID: {item._id}
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </>
  );
};
