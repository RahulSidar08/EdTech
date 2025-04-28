import { useState } from "react";
import { Link } from "react-router-dom";
import { Student } from "./Student";
import { Agent } from "./Agent";
import { Sidebar } from "./Sidebar";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("");
  console.log(activePage)
  const pageComponents = {
    dashboard: <Dashboard />,
    agents: <Agent />,
    students: <Student />,
    // scholarship: <Scholarship />,
    // 'assign-agent': <AssignAgent />,
    // 'post-scholarship': <PostScholarship />,
  };
  const renderPage = () => {
    switch (activePage) {
      case 'Students':
        return <Student />;   // Replace with your actual component
      case 'Agents':
        return <Agent />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <div>Select a page</div>;
    }
  };
  return (
    <div className="flex h-screen bg-gray-100 ">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-6 overflow-auto bg-gray-100">
        {
          renderPage(activePage)
        }
      </main>
    </div>
  );
}
