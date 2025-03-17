import React from "react";

export const FAQ = () => {
  return (
    <>
      <section id="faq" className="py-10 bg-gray-100 text-center dark:bg-gray-700 dark:text-white duration-50">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 max-w-3xl mx-auto text-left">
          <div className="mb-6">
            <p className="text-lg font-semibold">
              How does the scholarship finder work?
            </p>
            <p className="text-gray-600">
              We match your profile with available scholarships and help you
              apply.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">
              Is the platform free to use?
            </p>
            <p className="text-gray-600">
              Yes, we offer a free plan with essential features. A premium plan
              is available for additional benefits.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">
              How do I track my university applications?
            </p>
            <p className="text-gray-600">
              You can use our application tracking feature to monitor your
              application status in real time.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">
              Can I get personalized course recommendations?
            </p>
            <p className="text-gray-600">
              Yes! Our AI-powered system suggests courses based on your
              interests and career goals.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">How can I contact support?</p>
            <p className="text-gray-600">
              You can reach out to us via email at{" "}
              <a
                href="mailto:support@edtech.com"
                className="text-blue-600 underline"
              >
                support@edtech.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
