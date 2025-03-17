import React from "react";

export const Testimonial = () => {
  return (
    <>
      <section id="testimonials" class="py-10 bg-gray-100 text-center dark:bg-gray-700 dark:text-white duration-50">
        <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
        <p className="text-lg text-gray-600 mt-4 dark:text-white">
          Hear from students who have benefited from our platform.
        </p>
        <div className="mt-6 max-w-3xl mx-auto">
          <blockquote class="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700 dark:text-white duration-50">
            <p className="italic">
              “This platform has made my scholarship search so much easier!”
            </p>
            <cite className="block mt-4 text-blue-600">- A Happy Student</cite>
          </blockquote>
        </div>
      </section>
    </>
  );
};
