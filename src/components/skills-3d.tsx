"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ClientOnly from '@/components/ClientOnly';

export default function Skills3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    { 
      name: "AI Development", 
      level: 95, 
      color: "from-blue-500 to-cyan-500", 
      icon: "🤖",
      description: "LLM-Driven Analysis, NLP, AI Code Generation",
      category: "AI/ML"
    },
    { 
      name: "Backend Development", 
      level: 90, 
      color: "from-green-500 to-emerald-500", 
      icon: "⚙️",
      description: "FastAPI, REST APIs, Python",
      category: "Backend"
    },
    { 
      name: "Database Management", 
      level: 88, 
      color: "from-purple-500 to-pink-500", 
      icon: "🗄️",
      description: "MySQL, Supabase, SQL",
      category: "Database"
    },
    { 
      name: "Frontend Development", 
      level: 85, 
      color: "from-orange-500 to-red-500", 
      icon: "🌐",
      description: "JavaScript, HTML5, CSS3",
      category: "Frontend"
    },
    { 
      name: "DevOps & Tools", 
      level: 80, 
      color: "from-indigo-500 to-blue-500", 
      icon: "🐳",
      description: "Docker, Git, VS Code, Postman",
      category: "DevOps"
    },
    { 
      name: "IT Administration", 
      level: 85, 
      color: "from-yellow-500 to-orange-500", 
      icon: "🛠️",
      description: "System Diagnostics, Hardware, OS Troubleshooting",
      category: "IT Support"
    }
  ];

  return (
    <section id="skills" ref={ref} className="relative py-20 overflow-hidden" style={{ position: 'relative' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"></div>
      
      {/* Floating Skill Icons - Client Only */}
      <ClientOnly fallback={null}>
        <div className="absolute inset-0 overflow-hidden">
          {skills.map((skill, index) => {
            // Use deterministic positioning to avoid hydration mismatch
            const left = (index * 15) % 100;
            const top = (index * 20) % 100;
            
            return (
              <motion.div
                key={skill.name}
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
                {skill.icon}
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
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="spacex-gradient-glow">My Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and tools I master to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid - Clean Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/50 hover:border-blue-400/70 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Category Badge */}
                <div className="absolute -top-3 left-6">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {skill.category}
                  </span>
                </div>
                
                {/* Skill Icon */}
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="text-2xl font-bold text-white text-center mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-center mb-6 text-sm leading-relaxed">
                  {skill.description}
                </p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-300 mb-3">
                    <span className="font-medium">Expertise</span>
                    <span className="font-bold text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="relative w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </motion.div>
                  </div>
                </div>
                
                {/* Hover Glow */}
                {hoveredSkill === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to work with these technologies?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Let&apos;s build something amazing together using cutting-edge tools and modern development practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                View My Projects
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
