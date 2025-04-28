import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

export const AgentSidebar = ({ activePage, setActivePage }) => {
  const sidebar = [
    "Agents",
    "Students",
    "Scholarship",
    "Assign-Agent",
    "Create Scholarship",
  ];

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  return (
    <div>
      <aside className="w-64 bg-white shadow-lg p-5 h-screen relative">
        <h1 className="text-xl font-bold mb-6">ED-TECH</h1>
        <nav className="space-y-4">
          {sidebar.map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`block w-full text-left p-2 rounded hover:bg-gray-200 ${
                activePage === item ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <Link
          to="/login"
          className="flex justify-center gap-2 absolute bottom-5 left-5 right-5 bg-red-100 text-red-700 p-3 rounded shadow hover:bg-red-200"
        >
          Logout <IoIosLogOut size={20} />
        </Link>
      </aside>
    </div>
  );
};
