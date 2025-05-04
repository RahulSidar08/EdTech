import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { Darkmode } from "../shared/Darkmode";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../components/ui/button";
import Logout from "../Auth/Logout";
import Cookies from "js-cookie";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

export const Navbar = () => {
  let token = localStorage.getItem("token");
  return (
    <>
      <header className="text-blue p-5 flex justify-between items-center w-full fixed z-[1000] dark:text-white duration-50 dark:bg-transparent">
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          EdTech Platform
        </NavLink>
        <ul className="flex space-x-6 text-blue-600">
          <li>
            <div className="flex justify-center items-center p-2">
              <Darkmode />
            </div>
          </li>
          <li>
            <NavLink to="/#features" className="hover:underline">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/#testimonials" className="hover:underline">
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/scholarship" className="hover:underline">
              Scholarship
            </NavLink>
          </li>
          <li>
            <NavLink to="/#contact" className="hover:underline">
              Contact
            </NavLink>
          </li>
          <li>
            <div className="flex space-x-2 items-center">
              {!token ? (
                <>
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Login
                  </Link>
                  <Link to="/signup" className="text-blue-600 hover:underline">
                    Signup
                  </Link>
                </>
              ) : (
                <div className="bg-white">
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        className="w-10 h-10 rounded-full"
                        src="https://github.com/shadcn.png"
                        alt="User Avatar"
                      />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-2 space-y-2">
                    <Link
                      to="/My-Application"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
                    >
                      My Applications
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
                    >
                      My Profile
                    </Link>
                    <Logout />
                  </PopoverContent>
                </Popover>
                </div>
              )}
            </div>
          </li>
        </ul>
      </header>
      <br />
      <br />
    </>
  );
};
