import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  
  const [studentData, setStudentData] = useState();
  const [agentData, setAgentData] = useState();
  const [studentScholarshiData , setStudentScholarshiData] = useState()
  
  const getStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/admin/getStudents", {
        withCredentials: true,
      });
      console.log(res);
      setStudentData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(studentData);
  }, [studentData]);
  
  const getStudentScholarshipApplication = async () =>{
    try {
      const res = await axios.get("http://localhost:5000/admin/getStudentScholarship", {
        withCredentials: true,
      });
      console.log(res);
      setStudentData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div className="h-screen w-80 bg-gray-900 text-white p-6 flex flex-col justify-center space-y-6">
      {/* <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1> */}
      <nav className="flex flex-col space-y-4">
        <Link 
          className="px-4 w-full py-2 bg-blue-600 rounded-lg text-center text-white hover:bg-blue-500 transition duration-300"
          to="/students"
        >
          📚 Students
        </Link>
        <Link 
          className="px-4 py-2 bg-green-600 rounded-lg text-center text-white hover:bg-green-500 transition duration-300"
          to="/admins"
        >
          👤 Admins
        </Link>
        <Link 
          className="px-4 py-2 bg-yellow-600 rounded-lg text-center text-white hover:bg-yellow-500 transition duration-300"
          to="/scholarships"
        >
          🎓 Scholarships
        </Link>
        <Link className="px-4 py-2 bg-yellow-600 rounded-lg text-center text-white hover:bg-yellow-500 transition duration-300 relative top-20">
        Logout 
        </Link>
      </nav>
    </div>
    </>
  );
};
