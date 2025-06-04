import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

 const testimonials = [
  {
    id: 1,
    content: "EduPortal has made my scholarship search so much easier! I found three opportunities that perfectly matched my profile and secured funding for my entire degree.",
    author: "Sarah Johnson",
    role: "Undergraduate Student, NYU",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 2,
    content: "The application tracking feature saved me countless hours of stress. I could see all my application statuses in one place and never missed a deadline.",
    author: "Michael Chen",
    role: "Graduate Student, Stanford",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 3,
    content: "As a first-generation college student, the resources on EduPortal were invaluable. The guides and articles helped me navigate the complex world of higher education.",
    author: "Aisha Patel",
    role: "High School Senior",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];

export const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Hear from students who have benefited from our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-blue-500 dark:text-blue-400 opacity-20">
              <Quote size={60} />
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 md:p-12 relative z-10">
              <div className="mb-8">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>
              </div>

              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeIndex === index 
                      ? 'bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 -left-4 -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 -translate-y-1/2">
              <button
                onClick={handleNext}
                className="bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
