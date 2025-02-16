
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Digital Marketer",
    content: "This temp mail service has been a game-changer for my workflow. It's incredibly reliable and user-friendly.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    content: "The best temporary email service I've used. Clean interface and instant email generation make it perfect for testing.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Emma Davis",
    role: "Freelancer",
    content: "I use this service daily for my client registrations. It's fast, secure, and exactly what I need.",
    rating: 5,
    image: "/placeholder.svg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-accent/10 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our Users Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Join thousands of satisfied users who trust our temporary email service
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-8 premium-shadow hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden premium-shadow">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">{testimonial.name}</h3>
                    <p className="text-primary">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -right-40 -top-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
    </section>
  );
};
