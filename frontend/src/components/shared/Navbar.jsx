import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { Darkmode } from "./Darkmode";
import { FaCaretDown } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <>
      <div className="flex w-full justify-between px-20 items-center p-2 bg-white shadow-lg text-black dark:bg-gray-700 dark:text-white duration-50">
        <div className="flex text-3xl items-center bold">ED-TECH</div>
        <div className="flex justify-between space-x-2 text-xl items-center">
          <div className="flex justify-center items-center p-2">
            <Darkmode />
          </div>
          <div className="flex justify-between space-x-5 text-2xl">
            <Link to="/">Home </Link>
            <div className="flex items-center group relative cursor-pointer mt-[-10px]">
              <p className="text-center">Quick Links</p>
              <FaCaretDown className="transition duration-200 group-hover:rotate-180" />
              <div className="absolute top-2 mt-10 z-[10] hidden group-hover:block w-[100%]  bg-white dark:text-white duration-500 dark:bg-gray-700">
                <ul className=" flex flex-col rounded-lg border-gray-500 dark:text-white duration-500">
                  <li>
                    <Link
                      to="/trending-books"
                      className="block px-1 py-4 hover:bg-blue-300  text-[18px] dark:text-white duration-500"
                    >
                      Trending Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/best-sellers"
                      className="block px-1 py-4 hover:bg-blue-300  text-[18px] dark:text-white duration-500"
                    >
                      Best Sellers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/authors"
                      className="block px-1 py-4 hover:bg-blue-300  text-[18px] dark:text-white duration-500"
                    >
                      Authors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex space-x-2">
              <Link to="/login" >Login</Link>
              <Link to="/signup" >Signup</Link>
            </div>

            <div className="flex items-center space-x-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage className="w-10 rounded-2xl"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 flex flex-col justify-center">

                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
