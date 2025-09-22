"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import ClientOnly from '@/components/ClientOnly';
import ReviewForm from '@/components/review-form';

export default function Reviews3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Ahmed Ben Ali",
      role: "CEO, TechStart Tunisia",
      location: "Tunis, Tunisia",
      rating: 5,
                  text: "Bilel wakhalni portfolio website 5idma yessir tayara w b 3D effects. L&apos;clients kollhom 3ajbhom l&apos;design w l&apos;performance. M3a Bilel, l&apos;business dyalna bda ykbar b shakl kbir!",
      project: "Corporate Portfolio",
      avatar: "AB"
    },
    {
      id: 2,
      name: "Fatma Khelil",
      role: "Founder, 9athstore.tn",
      location: "Sfax, Tunisia",
      rating: 5,
                  text: "Bilel 3amel m3aya e-commerce platform 9athstore.tn w 5idma yessir tayara. L&apos;sales dyalna zedet b 300%! L&apos;clients kollhom 3ajbhom l&apos;interface w l&apos;user experience.",
      project: "E-commerce Platform",
      avatar: "FK"
    },
    {
      id: 3,
      name: "Leila Ben Salem",
      role: "Art Gallery Owner",
      location: "Tunis, Tunisia",
      rating: 5,
                  text: "Bilel wakhalni nhar 3andi gallery online b 3D effects kima l&apos;portfolio dyalo w 5idma yessir tayara. L&apos;clients kollhom 3ajbhom l&apos;design w l&apos;user experience. M3a Bilel, l&apos;business dyalna zed b 200%!",
      project: "Art Gallery Platform",
      avatar: "LB"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Startup Founder",
      location: "San Francisco, USA",
      rating: 5,
      text: "Working with Bilel was a game-changer for our startup. His AI-powered development approach and 3D design skills created a website that investors couldn't stop talking about. We raised $2M after launching!",
      project: "Startup Platform",
      avatar: "SJ"
    },
    {
      id: 5,
      name: "Carlos Rodriguez",
      role: "E-commerce Entrepreneur",
      location: "San José, Costa Rica",
      rating: 5,
      text: "Bilel's international expertise and AI development skills helped us expand our business across Central America. The multilingual platform he built increased our regional sales by 400%. Exceptional work!",
      project: "International E-commerce",
      avatar: "CR"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section ref={ref} className="relative py-20 overflow-hidden" style={{ position: 'relative' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20"></div>
      
      {/* Floating Review Icons - Client Only */}
      <ClientOnly fallback={null}>
        <div className="absolute inset-0 overflow-hidden">
          {[Star, Quote].map((Icon, index) => {
            const left = (index * 50) % 100;
            const top = (index * 40) % 100;
            
            return (
              <motion.div
                key={index}
                className="absolute text-8xl opacity-5"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 5 + index * 0.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <Icon className="w-16 h-16" />
              </motion.div>
            );
          })}
        </div>
      </ClientOnly>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="spacex-gradient-glow">Client Reviews</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            What Tunisian entrepreneurs and businesses say about working with me
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-orange-500/30 orange-border-glow">
            {/* Review Content */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
                ))}
              </div>
              
              <Quote className="w-12 h-12 text-orange-500 mx-auto mb-6" />
              
              <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                &ldquo;{reviews[currentReview].text}&rdquo;
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-white text-xl font-bold">
                    {reviews[currentReview].avatar}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="text-orange-400 font-medium">
                    {reviews[currentReview].role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {reviews[currentReview].location}
                  </p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
                  {reviews[currentReview].project}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevReview}
                className="p-3 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-orange-500/30 hover:bg-orange-500/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextReview}
                className="p-3 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <ReviewForm />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to join these satisfied clients?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Let&apos;s discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-xl hover:bg-orange-400 hover:text-white transition-all duration-300 hover:scale-105">
                View More Reviews
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
