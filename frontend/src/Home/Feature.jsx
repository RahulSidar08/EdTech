import { BookOpen, Calendar, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "Application Tracking",
    description: "Keep track of all your university applications in one place with status updates and deadlines.",
    link: "/applications",
    image: "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    title: "Scholarship Finder",
    description: "Discover scholarships that match your profile and apply effortlessly with our comprehensive database.",
    link: "/scholarships",
    image: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
    title: "Educational Resources",
    description: "Access guides, articles, and resources to help you navigate the academic landscape successfully.",
    link: "/blog",
    linkText: "View",
    image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export const Feature = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Streamline Your Academic Journey
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Our platform provides everything you need to succeed in your educational pursuits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                {
                  feature.linkText && (
                    <Link
                      to={feature.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      {feature.linkText}
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )
                }

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = ({ className = "" }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
