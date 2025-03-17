import React from "react";

export const Feature = () => {
  return (
    <section id="features" className="py-10 bg-white text-center dark:bg-gray-700 dark:text-black duration-50">
      <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 px-10">
        <div className="p-5 shadow-md rounded-lg bg-gray-50">
          <img
            src="https://images.unsplash.com/photo-1615494488088-43ac74d0c232?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Application Tracking"
            className="mx-auto rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Application Tracking</h3>
          <p className="text-gray-600">
            Monitor and manage your university applications with ease.
          </p>
        </div>
        <div className="p-5 shadow-md rounded-lg bg-gray-50">
          <img
            src="https://plus.unsplash.com/premium_photo-1714265043317-b49141f2197b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Scholarship Finder"
            className="mx-auto rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Scholarship Finder</h3>
          <p className="text-gray-600">
            Discover scholarships that match your profile and apply
            effortlessly.
          </p>
        </div>
        <div className="p-5 shadow-md rounded-lg bg-gray-50">
          <img
            src="https://plus.unsplash.com/premium_photo-1671069848132-92977175e560?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Personalized Learning"
            className="mx-auto rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Personalized Learning</h3>
          <p className="text-gray-600">
            Get customized recommendations for courses and career growth.
          </p>
        </div>
      </div>
    </section>
  );
};
