import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { Login } from "./Auth/Login";
import { Signup } from "./Auth/Signup";
import { Agentpanel } from "./features/agent/Agentpanel";
import { Navbar } from "./Home/Navbar.jsx";
import { Herosection } from "./Home/Herosection.jsx";
import Dashboard from "./features/admin/Dashboard";
import { Scholarship } from "./components/pages/Scholarship";
import { MyApplication } from "./features/student/MyApplication";
import { MyProfile } from "./features/student/MyProfile";
import { EditProfile } from "./features/student/EditProfile";
import { PageNotFound } from "./components/pages/PageNotFound";
import BlogPage from "./features/Blogs/BlogPage";
import BlogDetail from "./features/Blogs/BlogDetail";
import ProtectedRoute from "./components/ProtectedRoutes";
import { Recommendation } from "./features/student/Recommendation";
import { NewBlogPage } from "./components/pages/BlogPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <br />
        <Herosection />
      </div>
    ),
  },
  {
    path: "/scholarship",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["student"]}>
          <Scholarship />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "/recommendation",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["student"]}>
          <Recommendation/>
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "/My-Application",
    element: (
      <div>
        <MyApplication />
      </div>
    ),
  },
  {
    path: "/edit",
    element: <EditProfile />,
  },
  {
    path: "/profile",
    element: <MyProfile />,
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Signup />
      </div>
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["admin"]}>
          <Dashboard />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "/agent/dashboard",
    element: (
      <div>
        <ProtectedRoute allowedRoles={["agent"]}>
          <Agentpanel />
        </ProtectedRoute>
      </div>
    ),
  },
  {
    path: "/blog",
    element: <BlogPage /> // parent
  },
  {
    path: "/blog/details/:id",
    element: (
      <div>
        <BlogDetail />
      </div>
    ),
  },
  {
    path : "/newblog",
    element : (
      <div>
        <NewBlogPage/>
      </div>
    )
  },

  {
    path: "*",
    element: (
      <div>
        <PageNotFound />
      </div>
    ),
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={appRouter} />

    </>
  );
}

export default App;
