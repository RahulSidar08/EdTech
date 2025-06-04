import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Advertise = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-700 dark:to-indigo-800 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Ready to Take Control of Your Academic Future?
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg text-blue-800 mb-8">
          Join thousands of students who are using EduPortal to streamline their applications, find scholarships, and access valuable educational resources.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/signup" 
            className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            Create Free Account
          </Link>
          
          <Link 
            to="/scholarship" 
            className="px-8 py-3 bg-transparent bg-white text-blue-700 border border-white font-medium rounded-lg hover:bg-blue-50  transition-colors duration-300 inline-flex items-center justify-center group"
          >
            Explore Scholarships
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <p className="text-blue-800 mt-6 text-md">
          No credit card required. Get started in minutes.
        </p>
      </div>
    </section>
  );
};
