import { GraduationCap, Mail, Github as GitHub, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    icon: <Twitter size={18} />,
    url: "https://twitter.com/"
  },
  {
    icon: <GitHub size={18} />,
    url: "https://github.com/RahulSidar08"
  },
  {
    icon: <Linkedin size={18} />,
    url: "https://www.linkedin.com/in/rahul-sidar/"
  },
  {
    icon: <Mail size={18} />,
    url: "https://www.goole.com/"
  },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-20 dark:bg-gray-800 pt-12 pb-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-4">
              <GraduationCap size={24} />
              <span className="text-lg font-bold">EduPortal</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Empowering students to achieve their academic goals through simplified application tracking and scholarship discovery.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item, idx) => (
                <Link className='text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors' key={idx} to={item.url}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Features
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/applications" label="Application Tracking" />
              <FooterLink to="/scholarships" label="Scholarship Finder" />
              <FooterLink to="/blog" label="Education Blog" />
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/blog" label="Academic Guides" />
              <FooterLink to="/blog" label="Financial Aid Tips" />
              <FooterLink to="/blog" label="Career Resources" />
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/" label="About Us" />
              <FooterLink to="/" label="Contact" />
              <FooterLink to="/" label="Privacy Policy" />
              <FooterLink to="/" label="Terms of Service" />
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            &copy; {currentYear} EduPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
    >
      {label}
    </Link>
  </li>
);
