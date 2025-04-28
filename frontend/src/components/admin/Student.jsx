import { useGetStudents } from "@/hooks/useGetStudents";
import { Item } from "@radix-ui/react-radio-group";
import React from "react";
import { useSelector } from "react-redux";

export const Student = () => {
  useGetStudents();
  const studentData = useSelector((state) => state.entities.students);
  console.log(studentData);
  return (
    <>
      <div className="flex flex-col">
        {
          <div className="p-6 space-y-6">
            {studentData.map((item) => (
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
                  <span className="font-semibold">Role:</span> {item.role}
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">Assigned Agent:</span>{" "}
                  {item.assignedAgent}
                </div>

                <div className="text-gray-600">
                  <span className="font-semibold">Education:</span>
                  <div className="ml-4">
                    <div>
                      <span className="font-medium">Degree:</span>{" "}
                      {item.profile.education.degree}
                    </div>
                    <div>
                      <span className="font-medium">Institution:</span>{" "}
                      {item.profile.education.institution}
                    </div>
                    <div>
                      <span className="font-medium">Graduation Year:</span>{" "}
                      {item.profile.education.graduationYear}
                    </div>
                  </div>
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
              </div>
            ))}
          </div>
        }
      </div>
    </>
  );
};
