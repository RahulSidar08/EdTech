import React from "react";
import { Button } from "../components/ui/button";
import { errorHandler, successHandler } from "../ToastMessage/toast";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LogOut, X } from 'lucide-react';
const Logout = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:5000/student/logout", {}, {
        withCredentials: true,
      });
      console.log("Response", res)
      Cookies.remove("jwt")
      console.log(res.data.message)
      localStorage.removeItem("token")
      successHandler(res.data.message)
      setTimeout(() => {
        navigate("/")
      }, 2000);
    } catch (error) {
      console.log(error);
      errorHandler(error.message);
    }
  };

  return (
    <>
      <div>
        <Button
          variant="destructive"
          onClick={handleLogout}
          className="w-full gap-2 justify-start bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-all duration-300"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>

      <ToastContainer />
    </>
  );
};

export default Logout;

