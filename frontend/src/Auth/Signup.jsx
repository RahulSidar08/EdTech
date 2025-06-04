import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Link } from "react-router-dom";
import axios from "axios";
import { errorHandler, successHandler } from "../ToastMessage/toast";
export const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    institution: "",
    degree: "",
    graduationYear: "",
    agencyName: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const filterDataByRole = () => {
    let {
      fullname,
      email,
      phoneNumber,
      password,
      role,
      institution,
      degree,
      graduationYear,
      agencyName,
    } = input;
    const userRole = role;
    if (userRole === "student") {
      return {
        fullname,
        email,
        phoneNumber,
        password,
        role,
        profile: {
          education: {
            degree,
            institution,
            graduationYear,
          },
        },
      };
    } else if (userRole === "agent") {
      return {
        fullname,
        email,
        phoneNumber,
        password,
        role,
        agencyDetails: { agencyName },
      };
    } else if (userRole === "admin") {
      return { fullname, email, phoneNumber, password, role };
    }
    return { fullname, email, phoneNumber, password, role };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let filterdData = filterDataByRole();
    console.log(filterdData);
    try {
      const res = await axios.post(
        `http://localhost:5000/${input.role}/register`,
        filterdData,
        {
          withCredentials: true,
        }
      );
      console.log("Response: ", res.data);
      successHandler(res.data.message);
    } catch (error) {
      console.log("ErrorData: ", error);
      console.log(error.response.data.message);
      let message = error.response.data.message || error.message;
      errorHandler(message);
    }
  };

  return (
    <>
      <div className="px-4">
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md border border-gray-200 rounded-md p-4 my-10 bg-white shadow-md"
          >
            <h1 className="font-bold text-xl mb-5 text-center">Sign Up</h1>

            <div className="my-2">
              <Label>Full Name</Label>
              <Input
                type="text"
                name="fullname"
                placeholder="Enter Your Name"
                value={input.fullname}
                onChange={changeEventHandler}
              />
            </div>

            <div className="my-2">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter E-mail"
                value={input.email}
                onChange={changeEventHandler}
              />
            </div>

            <div className="my-2">
              <Label>Phone Number</Label>
              <Input
                type="text"
                name="phoneNumber"
                placeholder="Enter Phone"
                value={input.phoneNumber}
                onChange={changeEventHandler}
              />
            </div>

            <div className="my-2">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                value={input.password}
                onChange={changeEventHandler}
              />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 my-5">
              <RadioGroup className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                    onChange={changeEventHandler}
                    id="r1"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="agent"
                    className="cursor-pointer"
                    onChange={changeEventHandler}
                    id="r2"
                  />
                  <Label htmlFor="r2">Agent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="admin"
                    className="cursor-pointer"
                    onChange={changeEventHandler}
                    id="r3"
                  />
                  <Label htmlFor="r3">Admin</Label>
                </div>
              </RadioGroup>
            </div>

            {input.role === "student" && (
              <div>
                <div className="my-1">
                  <Label>University Name</Label>
                  <Input
                    type="text"
                    name="institution"
                    placeholder="Enter your university"
                    value={input.institution}
                    onChange={changeEventHandler}
                    required
                  />
                </div>
                <div className="my-1">
                  <Label>Degree</Label>
                  <Input
                    type="text"
                    name="degree"
                    placeholder="Enter your degree"
                    value={input.degree}
                    onChange={changeEventHandler}
                    required
                  />
                </div>
                <div className="my-1">
                  <Label>Graduation Year</Label>
                  <Input
                    type="text"
                    name="graduationYear"
                    placeholder="Enter your graduation year"
                    value={input.graduationYear}
                    onChange={changeEventHandler}
                    required
                  />
                </div>
              </div>
            )}

            {input.role === "agent" && (
              <div className="my-1">
                <Label>Agency Name</Label>
                <Input
                  type="text"
                  name="agencyName"
                  placeholder="Enter your agency name"
                  value={input.agencyName}
                  onChange={changeEventHandler}
                  required
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-5">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" className="cursor-pointer" />
            </div>

            <Button type="submit" className="w-full my-4">
              Signup
            </Button>

            <span className="text-sm block text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </span>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
