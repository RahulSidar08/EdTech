import React from "react";
import { Button } from "../ui/button";
import { errorHandler, successHandler } from "../ToastMessage/toast";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
const Logout = () => {
  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:5000/student/logout",{}, {
        withCredentials: true,
      });
      console.log("Response" , res)
      Cookies.remove("jwt")
      console.log(res.data.message)
      localStorage.removeItem("token")
      successHandler(res.data.message)
    } catch (error) {
      console.log(error);
      errorHandler(error.message);
    }
  };

  return (
    <>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Logout;
