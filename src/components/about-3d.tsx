"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { Rocket } from 'lucide-react';
import ClientOnly from '@/components/ClientOnly';

export default function About3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    container: undefined
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const techStack = [
    "Python", "FastAPI", "MySQL", "Supabase", 
    "Docker", "JavaScript", "HTML5", "CSS3"
  ];

  return (
    <section ref={ref} className="relative py-20 overflow-hidden" style={{ position: 'relative' }}>
          {/* Holographic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20"></div>
      
      {/* Floating Tech Icons - Client Only */}
      <ClientOnly fallback={null}>
        <div className="absolute inset-0 overflow-hidden">
          {techStack.map((tech, index) => {
            // Use deterministic positioning to avoid hydration mismatch
            const left = (index * 12) % 100;
            const top = (index * 15) % 100;
            
            return (
              <motion.div
                key={tech}
                className="absolute text-6xl opacity-5"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {tech === "Next.js 15" && "⚡"}
                {tech === "TypeScript" && "🔷"}
                {tech === "Tailwind" && "🎨"}
                {tech === "Shadcn UI" && "🧩"}
                {tech === "Stripe" && "💳"}
                {tech === "Supabase" && "🗄️"}
                {tech === "SEO" && "🔍"}
                {tech === "Analytics" && "📊"}
              </motion.div>
            );
          })}
        </div>
      </ClientOnly>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Holographic Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
                  {/* Holographic Frame */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-orange-500/30">
                {/* Holographic Scan Lines */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-400/10 to-transparent"
                    animate={{ y: [-100, 400] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl border-4 border-orange-500">
                    <img 
                      src="/bilel-photo.jpg.png" 
                      alt="Bilel Ayari" 
                      className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-white text-4xl font-bold">BA</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bilel Ayari</h3>
                  <p className="text-orange-400 mb-2">AI Software Developer & IT Administrator</p>
                  <p className="text-sm text-gray-400">Python • FastAPI • AI Development</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Floating Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About me
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 mb-6 leading-relaxed"
            >
              AI-driven, results-focused, and innovation-oriented.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              I help businesses leverage AI for intelligent software development and 
              automation. From requirements analysis to deployment, I use AI-powered 
              tools and modern development practices to build scalable applications. 
              My expertise includes Python, FastAPI, AI code generation, and 
              intelligent automation solutions.
            </motion.p>

            {/* Floating Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-3"
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                      className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm text-orange-300 rounded-full text-sm font-medium border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Resume Download Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-12"
            >
              <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/30">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Download My Resume
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Get a detailed overview of my experience, skills, and projects
                  </p>
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resumer.html';
                      link.download = 'Bilel_Ayari_Resume.html';
                      link.click();
                    }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                  >
                    <Rocket className="w-5 h-5 mr-3" />
                    Download Resume (HTML)
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
