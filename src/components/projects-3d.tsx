"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Code, Github } from "lucide-react";

export default function Projects3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      title: "AI-Powered Hostel Management System",
      subtitle: "Full-Stack AI Application",
      category: "AI Development",
      description: "A comprehensive hostel management system leveraging AI tools at every stage of development. Features custom AI engine for natural language configuration and predictive analytics.",
      features: ["LLM-driven requirements analysis", "AI code generation for FastAPI", "Custom NLP engine 'Bilel Control AI'", "MySQL & Supabase integration"],
      link: "https://github.com/bilelis",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      icon: "🏨"
    },
    {
      title: "Full Stack Web Application",
      subtitle: "Database-Driven Web App", 
      category: "Web Development",
      description: "Collaborative agile team project building a complete database-driven web application from concept to deployment with responsive frontend and robust SQL backend.",
      features: ["Responsive HTML5/CSS3/JavaScript", "SQL database integration", "Agile development methodology", "End-to-end deployment"],
      link: "https://github.com/bilelis",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      icon: "🌐"
    },
    {
      title: "IT Support & Maintenance",
      subtitle: "Technical Support Solutions",
      category: "IT Administration", 
      description: "Provided comprehensive IT support and maintenance services including system diagnostics, hardware installation, and OS troubleshooting to minimize downtime.",
      features: ["First-level technical support", "Hardware installation & repair", "OS troubleshooting", "System diagnostics"],
      link: "https://github.com/bilelis",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
      icon: "🛠️"
    },
    {
      title: "AI Code Generation Tools",
      subtitle: "Automated Development Solutions",
      category: "AI Development",
      description: "Developed AI-powered tools for automated code generation, requirements analysis, and intelligent debugging to accelerate development workflows.",
      features: ["Automated code generation", "LLM-driven analysis", "Intelligent debugging", "Natural language processing"],
      link: "https://github.com/bilelis", 
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      icon: "🤖"
    },
    {
      title: "Database Management Systems",
      subtitle: "MySQL & Supabase Solutions",
      category: "Database",
      description: "Designed and implemented database schemas and management systems using MySQL and Supabase for scalable application backends.",
      features: ["MySQL database design", "Supabase integration", "Schema optimization", "Data migration tools"],
      link: "https://github.com/bilelis", 
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/20 to-blue-500/20",
      icon: "🗄️"
    }
  ];

  return (
    <section id="projects" ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            5 shipped projects. Click a card to view case study.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
            <Code className="w-5 h-5 mr-2" />
            Build mine
          </Button>
        </motion.div>

        {/* Netflix-Style 3D Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -20, 
                rotateY: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              className="group cursor-pointer perspective-1000"
            >
              <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 holographic-border scan-line">
                {/* Holographic Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Enhanced Scan Lines Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
                  animate={hoveredCard === index ? { y: [-100, 400] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Particle Effect */}
                <div className="absolute inset-0 particle-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Icon */}
                <div className="absolute top-6 left-6 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-2xl`}>
                    <span className="text-2xl">{project.icon}</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Click Indicator */}
                <div className="absolute top-16 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-white">
                    View GitHub
                  </div>
                </div>

                {/* Project Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features Preview */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="text-xs text-gray-400 px-2 py-1">
                        +{project.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-sm text-gray-500 group-hover:text-blue-400 transition-colors">
                    <Github className="w-4 h-4 mr-1" />
                    <span className="truncate">
                      Click to view my GitHub profile
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl"
                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View My GitHub
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
