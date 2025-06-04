import { AgentSidebar } from "./AgentSidebar";
import React, { useState } from "react";
import { AssignedStudent } from "./AssignedStudent";
import { FindApplication } from "./FindApplication";
import { Right } from "./Right";

export const Agentpanel = () => {
  const [activePage, setActivePage] = useState("");

  const renderPage = () => {
    switch (activePage) {
      case "Students":
        return <AssignedStudent />;
      case "Application":
        return <FindApplication />;
        default:
        return <Right/>
        
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 relative">
      {/* Sidebar (fixed for mobile handled inside AgentSidebar) */}
      <AgentSidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6 overflow-auto">{renderPage()}</main>
    </div>
  );
};
