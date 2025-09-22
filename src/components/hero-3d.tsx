"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink, Rocket } from "lucide-react";
import ClientOnly from "@/components/ClientOnly";

export default function Hero3D() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        textRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Enhanced 3D Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-800 to-red-800 opacity-95"></div>
            {/* Dynamic orange grid overlay */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `
                linear-gradient(rgba(255, 102, 0, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 102, 0, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

      {/* Floating Particles - Client Only */}
      <ClientOnly fallback={null}>
        <div className="absolute inset-0 z-10">
          {[...Array(50)].map((_, i) => {
            // Use a seeded random function to ensure consistent positioning
            const seededRandom = (seed: number) => {
              const x = Math.sin(seed) * 10000;
              return x - Math.floor(x);
            };
            
            const left = seededRandom(i * 0.1) * 100;
            const top = seededRandom(i * 0.1 + 1000) * 100;
            const duration = 3 + seededRandom(i * 0.1 + 2000) * 2;
            const delay = seededRandom(i * 0.1 + 3000) * 2;
            
            return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      delay: delay,
                    }}
                  />
            );
          })}
        </div>
      </ClientOnly>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge - KFC Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 kfc-gradient backdrop-blur-sm border border-red-500/30 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 kfc-glow"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span>Available for work</span>
          <span className="text-yellow-300">From $30–$50</span>
        </motion.div>

        {/* Main Heading with 3D Effect */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="metallic-text cinematic-glow">
              I build fast, beautiful
            </span>
            <br />
            <span className="spacex-gradient-glow">
              websites that convert
            </span>
          </h1>
          
          {/* SpaceX-style subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4"
          >
              <div className="inline-flex items-center space-x-2 text-orange-500 text-lg font-mono">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
                <span className="font-bold orange-text-glow">AI SOFTWARE DEVELOPER & IT ADMINISTRATOR</span>
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
              </div>
          </motion.div>
        </motion.div>

        {/* Subtitle in Orange Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-orange-900/50 border-2 border-orange-500 rounded-lg p-6 backdrop-blur-sm shadow-2xl shadow-orange-500/20 orange-border-glow orange-pulse">
            <p className="text-xl md:text-2xl text-orange-50 leading-relaxed font-medium">
                  I&apos;m Bilel Ayari, an AI Software Developer & IT Administrator specializing in
              AI-powered code generation, full-stack development, and intelligent automation. 
              I leverage cutting-edge AI tools to build scalable applications and deliver 
              innovative solutions that drive business growth.
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button 
            size="lg" 
            className="spacex-gradient text-white px-8 py-4 text-lg font-bold rounded-lg shadow-2xl cinematic-glow transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/21693783124', '_blank')}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Start on WhatsApp
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg font-bold rounded-lg border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm kfc-glow"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ExternalLink className="w-6 h-6 mr-3" />
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg font-bold rounded-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg shadow-orange-500/25"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resumer.html';
              link.download = 'Bilel_Ayari_Resume.html';
              link.click();
            }}
          >
            <Rocket className="w-6 h-6 mr-3" />
            Download Resume
          </Button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
        >
          <div className="flex items-center">
            <Rocket className="w-5 h-5 mr-2 text-orange-500" />
            <span className="font-medium">1‑week delivery</span>
          </div>
          <div className="flex items-center">
            <Rocket className="w-5 h-5 mr-2 text-orange-600" />
            <span className="font-medium">Free consultation</span>
          </div>
          <div className="flex items-center">
            <Rocket className="w-5 h-5 mr-2 text-orange-400" />
            <span className="font-medium">Ongoing support</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
