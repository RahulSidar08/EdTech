import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import Logout from "@/Auth/Logout";
import { ToastContainer } from "react-toastify";
import {
  Users, GraduationCap, Award, UserCheck, FileSpreadsheet,
  LayoutDashboard, LogOut, X
} from 'lucide-react';

export const AgentSidebar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebar = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />
    },
    {
      name: "Students",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      name: "Application",
      icon: <Users className="h-5 w-5" />
    },
  ];

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white shadow rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMenu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-40 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Sidebar content fills full height */}
        <div className="flex flex-col justify-between h-full p-5">
          {/* Top section: Logo & nav */}
          <div className="mt-10">

            <Link to="/" className="text-xl font-bold mb-10 p-10 pb-40">ED-TECH</Link>


            <nav className="space-y-4">
              {sidebar.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-center items-center space-x-4 rounded-md p-2 hover:bg-blue-500 hover:text-white ${activePage === item.name ? "bg-gray-200 font-semibold" : ""
                    }`}
                >
                  {item.icon}
                  <button
                    onClick={() => {
                      setActivePage(item.name);
                      setIsOpen(false); // Close sidebar on mobile after selecting
                    }}
                    className="block w-full text-left p-2 rounded"
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </nav>
          </div>
          <div className="w-full md:absolute md:bottom-4 md:w-[80%] px-4">
            <Logout />
          </div>

        </div>
      </aside>
      <ToastContainer />
    </>
  );
};


