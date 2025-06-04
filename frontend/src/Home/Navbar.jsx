import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Darkmode } from "../shared/Darkmode";
import { Avatar } from "@radix-ui/react-avatar";
import { Button } from "../components/ui/button";
import Logout from "../Auth/Logout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <>
      <header className={`text-blue p-5 flex justify-between items-center w-full fixed z-[1000] dark:text-white bg-white dark:bg-black shadow-md ${isScrolled
          ? 'bg-white dark:bg-gray-800 shadow-xl py-4'
          : 'bg-transparent py-5'
        }`}>
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          EdTech Platform
        </NavLink>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden md:flex space-x-10 mr-10 items-center text-blue-600">

          {user?.role === "student" ? (
            <>
              <li className="relative group">
                <a href="/#home" className="transition hover:text-blue-600">
                  Home
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>

              <li className="relative group">
                <NavLink to="/scholarship" className="transition hover:text-blue-600">
                  Scholarship
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink to="/recommendation" className="transition hover:text-blue-600">
                  Recommend
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>

            </>
          ) : user?.role && (
            <li>
              <NavLink to={`/${user.role}/dashboard`} className="text-blue-600 hover:underline">
                Go to Dashboard
              </NavLink>
            </li>
          )}

          {/* Show Profile dropdown only if student AND logged in */}
          {token && user?.role === "student" && (
            <li>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <p className="group relative px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-600 transition-colors duration-300">
                      Profile
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </p>
                  </Avatar>
                </PopoverTrigger>

                <PopoverContent className="w-48 mt-5 bg-white shadow-xl border border-gray-200 py-4 space-y-2">
                  <Link
                    to="/My-Application"
                    className="block px-4 py-2 text-sm text-gray-700 rounded-md transition-colors duration-200 hover:bg-gray-100 hover:text-blue-600"
                  >
                    My Applications
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 rounded-md transition-colors duration-200 hover:bg-gray-100 hover:text-blue-600"
                  >
                    My Profile
                  </Link>
                  <div className="px-4 pt-2"><Logout /></div>
                </PopoverContent>
              </Popover>
            </li>
          )}

          <li>
            {!token && (
              <ul className="flex space-x-4">
                <li className="group relative">
                  <Link to="/login" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-300">
                    Login
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="group relative">
                  <Link to="/signup" className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-300">
                    Signup
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-black text-blue-600 shadow-md z-[999]">
          <ul className="flex flex-col space-y-4 p-4">
            <li><Darkmode /></li>

            {user?.role === "student" && (
              <>
                <li><NavLink to="/#home" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                <li><NavLink to="/features" onClick={() => setMenuOpen(false)}>Features</NavLink></li>
                <li><NavLink to="/scholarship" onClick={() => setMenuOpen(false)}>Scholarship</NavLink></li>
                <li><NavLink to="/#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
              </>
            )}

            {user?.role === "admin" || user?.role === "agent" ? (
              <li>
                <NavLink to={`/${user.role}/dashboard`} onClick={() => setMenuOpen(false)}>
                  Go to Dashboard
                </NavLink>
              </li>
            ) : null}

            <li>
              {!token ? (
                <div className="flex flex-col space-y-2">
                  <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                  <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
                </div>
              ) : user?.role === "student" ? (
                <div className="flex flex-col space-y-2">
                  <Link to="/My-Application" onClick={() => setMenuOpen(false)}>My Applications</Link>
                  <Link to="/profile" onClick={() => setMenuOpen(false)}>My Profile</Link>
                  <Logout />
                </div>
              ) : (
                <Logout />
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};



