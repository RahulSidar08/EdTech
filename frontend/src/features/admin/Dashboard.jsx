import { useState } from "react";
import { Link } from "react-router-dom";
import { Student } from "./Student";
import { Agent } from "./Agent";
import { Sidebar } from "./Sidebar";
import ScholarshipForm from "./ScholarshipForm";
import { AssignAgent } from "./AssignAgent";
import { Scholarship } from "./Scholarship";
import { Right } from "./Right";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("");
  console.log(activePage);
  const renderPage = () => {
    switch (activePage) {
      case "Dashboard" :
        return <Right/>
      case "Students":
        return <Student />; // Replace with your actual component
      case "Agents":
        return <Agent />;
      case "profile":
        return <ProfilePage />;
      case "Scholarship":
        return <Scholarship />;
      case "Create Scholarship":
        return <ScholarshipForm />;
      case "Assign-Agent":
        return <AssignAgent />;
      default:
        return <Right/>
    }
  };
  return (
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-6 overflow-auto bg-gradient-to-br from-blue-50 to-indigo-50">
        {renderPage(activePage)}
      </main>
    </div>
  );
}
