import React from "react";

export const Advertise = () => {
  return (
    <>
      <section className="relative h-[500px] text-center text-white dark:text-black duration-50">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl font-bold">Join Us Today</h2>
          <p className="text-lg mt-4 max-w-xl">
            Sign up now and take the next step in your educational journey.
          </p>
        </div>
      </section>
    </>
  );
};
