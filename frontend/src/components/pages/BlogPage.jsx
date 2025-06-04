import { useState } from 'react';
import { Search, BookOpen, User, Clock } from 'lucide-react';

export const formatDate = () => {
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  
  return new Date().toLocaleDateString('en-US', options);
};
const mockBlogPosts=  [
  {
    id: '1',
    title: 'How to Craft a Standout College Application Essay',
    author: 'Dr. Emily Johnson',
    date: '2023-11-10',
    category: 'admissions',
    excerpt: 'Learn the key strategies for writing a compelling college application essay that showcases your unique voice and experiences.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/4145347/pexels-photo-4145347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '2',
    title: 'Understanding FAFSA Changes for 2025-2026',
    author: 'Michael Rodriguez',
    date: '2023-12-05',
    category: 'financial-aid',
    excerpt: 'Important updates to the Free Application for Federal Student Aid (FAFSA) and how these changes might affect your financial aid eligibility.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '3',
    title: 'Top 10 Study Techniques Based on Cognitive Science',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    category: 'study-tips',
    excerpt: 'Evidence-based study methods that can help you retain information better and prepare effectively for exams.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '4',
    title: 'Navigating the Graduate School Application Process',
    author: 'James Wilson',
    date: '2024-02-08',
    category: 'admissions',
    excerpt: 'A comprehensive guide to applying for graduate programs, from researching schools to securing letters of recommendation.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '5',
    title: 'Building a Professional Network During College',
    author: 'Lisa Thompson',
    date: '2024-02-25',
    category: 'career',
    excerpt: 'How to develop meaningful professional connections while still in school that can help launch your career after graduation.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '6',
    title: 'International Student Guide: Adapting to American Campus Life',
    author: 'Dr. Carlos Mendez',
    date: '2024-03-10',
    category: 'international',
    excerpt: 'Tips and resources for international students adjusting to university life in the United States.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

export default mockBlogPosts;
export const NewBlogPage = () => {
  const [posts, setPosts] = useState(mockBlogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const categories = ['all', 'admissions', 'financial-aid', 'study-tips', 'career', 'international'];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Educational Resources
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore articles, guides, and resources to help you navigate your academic journey.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0">
                      {post.image && (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-60 object-cover rounded-lg mb-4"
                        />
                      )}
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-2">
                          {post.category}
                        </span>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {post.title}
                        </h2>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <div className="flex items-center mr-4">
                            <User size={14} className="mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {post.excerpt}
                        </p>
                        <div>
                          <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                            Read More
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    No articles found matching your search.
                  </p>
                  <button
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    onClick={() => {
                      setSearchTerm('');
                      setCategory('all');
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      category === cat
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setCategory(cat)}
                  >
                    {cat === 'all'
                      ? 'All Categories'
                      : cat
                          .split('-')
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(' ')}
                  </button>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                Popular Posts
              </h3>
              <div className="space-y-4">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <BookOpen size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                        {post.title}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(post.date)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
