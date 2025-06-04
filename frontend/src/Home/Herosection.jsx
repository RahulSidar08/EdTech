import React, { use, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "@/redux/store";
import { useGetStudents } from "@/hooks/useGetStudents";
import { useGetAgents } from "@/hooks/useGetAgents";
import { Feature } from "./Feature";
import { Testimonial } from "./Testimonial";
import { Advertise } from "./Advertise";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Herosection = () => {
  useGetStudents();
  useGetAgents();
  // const { loading, user } = useSelector((store) => store.auth);
  const { students, agents } = useSelector((store) => store.entities);
  console.log("Fetched all user data for admin: ", students);
  console.log("Fetched all agents data for admin: ", agents);
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

        <div className="container mx-auto px-4 py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Empower Your <span className="text-blue-600 dark:text-blue-400">Learning</span> Journey
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Track applications, discover scholarships, and enhance your academic experience with our comprehensive student platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-center shadow-sm hover:shadow"
              >
                Get Started
              </Link>

              <Link
                to="/scholarships"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-gray-600 transition-colors duration-300 flex items-center justify-center group shadow-sm hover:shadow"
              >
                Find Scholarships
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">92%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Acceptance Rate</div>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">$2.5M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Scholarships Awarded</div>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Feature />
      <Testimonial />
      <Advertise />
      <FAQ />
      <Footer />
    </>
  );
};
