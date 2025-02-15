import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [studentData, setStudentData] = useState();
  const [agentData,setAgentData] = useState()
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

  const getAgents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/admin/getAgents",{
        withCredentials : true
      })
      console.log(res);
      setAgentData(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(agentData)
  },[agentData])

  return (
    <>
      <div className="min-h-[500px] w-[20%] bg-white flex flex-col gap-5 justify-center border-r-2 border-b-2 border-sky-400 py-10">
        <div className="py-2  flex justify-center items-center">
          <Link
            onClick={getStudents}
            className="bg-red-200 p-5 px-5 py-5 w-full flex justify-center"
            to="/admin"
          >
            Students
          </Link>
        </div>
        <div className="py-2 flex justify-center">
          <Link onClick={getAgents}
            className="bg-red-200 p-5 px-5 py-5 w-full flex justify-center"
            to="/admin"
          >
            Agents
          </Link>
        </div>
        <div className="py-2 flex justify-center">
          <Link
            className="bg-red-200 p-5 px-5 py-5 w-full flex justify-center"
            to="/admin"
          >
            Assign Agent
          </Link>
        </div>
      </div>
    </>
  );
};
