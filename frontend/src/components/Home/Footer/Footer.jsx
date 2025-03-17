import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer id="contact" className="bg-blue-600 text-white p-10 dark:bg-gray-700 dark:text-white duration-50">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">Products</h3>
            <ul>
              <li>
                <Link to="/learning-management" className="hover:underline">
                  Learning Management
                </Link>
              </li>
              <li>
                <Link to="/course-marketplace" className="hover:underline">
                  Course Marketplace
                </Link>
              </li>
              <li>
                <Link to="/scholarship-finder" className="hover:underline">
                  Scholarship Finder
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Resources</h3>
            <ul>
              <li>
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:underline">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Company</h3>
            <ul>
              <li>
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link to="/linkedin" className="hover:text-blue-400">
                LinkedIn
              </Link>
              <Link to="/twitter" className="hover:text-blue-400">
                Twitter
              </Link>
              <Link to="/facebook" className="hover:text-blue-400">
                Facebook
              </Link>
              <Link to="/instagram" className="hover:text-blue-400">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2025 EdTech Platform. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms-of-service" className="hover:underline">
              {" "}
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};
