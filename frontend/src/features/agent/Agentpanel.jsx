import { AgentSidebar } from "./AgentSidebar";
import React, { useState } from "react";
import { AssignedStudent } from "./AssignedStudent";
import { FindApplication } from "./FindApplication";

export const Agentpanel = () => {
  const [activePage, setActivePage] = useState("");
  const renderPage = () => {
    switch (activePage) {
      case "Students":
        return <AssignedStudent />; // Replace with your actual component
      case 'Application':
        return <FindApplication/>;
      // case 'profile':
      //   return <ProfilePage />;
      // case 'Scholarship':
      //   return <Scholarship/>;
      // case 'Create Scholarship':
      //   return <ScholarshipForm/>;
      // case 'Assign-Agent':
      //   return <AssignAgent/>;
      default:
        return <div>Select a page</div>;
    }
  };
  return (
    <>
      <div className="flex h-screen bg-gray-100 ">
        <AgentSidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-1 p-6 overflow-auto bg-gray-100">
          {renderPage(activePage)}
        </main>
      </div>
    </>
  );
};
