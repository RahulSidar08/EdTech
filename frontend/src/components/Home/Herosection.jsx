import React from "react";
import { Feature } from "./Features/Feature";
import { Testimonial } from "./Testimonials/Testimonial";
import { Advertise } from "./Testimonials/Advertise";
import { FAQ } from "./FAQ/FAQ";
import {Footer} from "./Footer/Footer.jsx";

export const Herosection = () => {
  return (
    <>
      <div
        className="relative text-center h-[500px] py-20 bg-cover bg-center dark:bg-gray-700 dark:text-white duration-50"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573165231977-3f0e27806045?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>{" "}
        {/* Dark overlay */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold">Empower Your Learning Journey</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            A modern platform to track applications, find scholarships, and
            enhance your academic experience.
          </p>
        </div>
      </div>
        <Feature/>
        <Testimonial/>
        <Advertise/>
        <FAQ/>
        <Footer/>
    </>
  );
};
