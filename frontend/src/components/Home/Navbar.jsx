import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { Darkmode } from "../shared/Darkmode";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import Logout from "../authentication/Logout";
import Cookies from "js-cookie";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

export const Navbar = () => {
  let token = localStorage.getItem("token")
  return (
    <>
      <header className="bg-transparent text-blue shadow-md p-5 flex justify-between items-center w-full fixed z-[1000] dark:text-white duration-50 dark:bg-transparent">
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
            <NavLink to="/#faq" className="hover:underline">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/#contact" className="hover:underline">
              Contact
            </NavLink>
          </li>
          <li>
            <div className="flex space-x-2">
          {token ? (
              <div className="flex space-x-2">
                <Logout />
                <div className="flex items-center space-x-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      className="w-10 rounded-2xl"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 flex flex-col justify-center"></PopoverContent>
              </Popover>
            </div>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
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
