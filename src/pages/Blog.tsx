import { Navigation } from '../components/Navigation';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "How to Use Temporary Email Services Safely",
      excerpt: "Learn the best practices for using temporary email services while maintaining your privacy and security online.",
      author: "John Doe",
      date: "March 15, 2024",
      category: "Security"
    },
    {
      title: "The Benefits of Disposable Email Addresses",
      excerpt: "Discover why using temporary email addresses can help protect your privacy and reduce spam in your primary inbox.",
      author: "Jane Smith",
      date: "March 10, 2024",
      category: "Privacy"
    },
    {
      title: "Temporary Email vs Regular Email: What's the Difference?",
      excerpt: "Understanding the key differences between temporary and regular email services, and when to use each.",
      author: "Mike Johnson",
      date: "March 5, 2024",
      category: "Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, tips, and insights about temporary emails and online privacy.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8 animate-fade-in">
            {posts.map((post, index) => (
              <article 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest updates and insights delivered directly to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;