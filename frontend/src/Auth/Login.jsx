import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { errorHandler, successHandler } from "../ToastMessage/toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/redux/store";
import { setLoading, setUser } from "@/redux/authSlice";

export const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(input);
    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `http://localhost:5000/${input.role}/login`,
        input,
        {
          withCredentials: true,
        }
      );

      console.log(res);
      console.log(res.data.user);
      dispatch(setUser(res.data.user));
      localStorage.setItem("token", res.data.token);
      successHandler(res.data.message);
      setTimeout(() => {
        if (input.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-4">
      <div className="flex items-center justify-center max-w-7xl mx-auto mt-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md border border-gray-200 rounded-md p-4 my-10 bg-white shadow-md"
        >
          <h1 className="font-bold text-xl mb-5 text-center">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter your email"
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter password"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 my-5">
            <RadioGroup className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  id="r1"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="agent"
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  id="r2"
                />
                <Label htmlFor="r2">Agent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="admin"
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  id="r3"
                />
                <Label htmlFor="r3">Admin</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full my-4">
            Login
          </Button>

          <span className="text-sm block text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
