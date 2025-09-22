"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { MessageCircle, Mail, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import ClientOnly from '@/components/ClientOnly';

export default function Contact3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredInput, setHoveredInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 overflow-hidden" style={{ position: 'relative' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      
      {/* Floating Contact Icons */}
      <ClientOnly fallback={null}>
        <div className="absolute inset-0 overflow-hidden">
          {[MessageCircle, Mail, Github, Linkedin].map((Icon, index) => {
            // Use deterministic positioning to avoid hydration mismatch
            const left = (index * 25) % 100;
            const top = (index * 30) % 100;
            
            return (
              <motion.div
                key={index}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your idea into a stunning digital experience?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <a href="https://wa.me/21693783124" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">+216 93 783 124</a>
                  </div>
                </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:ba336158@gmail.com" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">ba336158@gmail.com</a>
                    </div>
                  </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <a href="https://github.com/bilelis" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">github.com/bilelis</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <a href="https://linkedin.com/in/bilel-ayari-88286035b" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">linkedin.com/in/bilel-ayari-88286035b</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Upwork</p>
                    <a href="https://www.upwork.com/nx/find-work/best-matches" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">upwork.com/freelancers/bilel-ayari</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* 3D Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 holographic-border scan-line">
              {/* Enhanced Holographic Scan Lines */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"
                  animate={{ y: [-100, 400] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              {/* Particle Effect */}
              <div className="absolute inset-0 particle-effect opacity-30"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onFocus={() => setHoveredInput('name')}
                        onBlur={() => setHoveredInput(null)}
                        className={`bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 ${
                          hoveredInput === 'name' ? 'shadow-lg shadow-blue-500/20' : ''
                        }`}
                      />
                    </div>
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onFocus={() => setHoveredInput('email')}
                        onBlur={() => setHoveredInput(null)}
                        className={`bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 ${
                          hoveredInput === 'email' ? 'shadow-lg shadow-blue-500/20' : ''
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Select
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        onFocus={() => setHoveredInput('projectType')}
                        onBlur={() => setHoveredInput(null)}
                        className={`bg-gray-800/50 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 ${
                          hoveredInput === 'projectType' ? 'shadow-lg shadow-blue-500/20' : ''
                        }`}
                      >
                        <option value="">Project type</option>
                        <option value="ecommerce">E-commerce website</option>
                        <option value="saas">SaaS application</option>
                        <option value="portfolio">Personal portfolio</option>
                        <option value="other">Other</option>
                      </Select>
                    </div>
                    <div className="relative">
                      <Select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        onFocus={() => setHoveredInput('budget')}
                        onBlur={() => setHoveredInput(null)}
                        className={`bg-gray-800/50 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 ${
                          hoveredInput === 'budget' ? 'shadow-lg shadow-blue-500/20' : ''
                        }`}
                      >
                        <option value="">Budget range</option>
                        <option value="30-50">$30–$50</option>
                        <option value="50-100">$50–$100</option>
                        <option value="100-300">$100–$300</option>
                        <option value="custom">Custom</option>
                      </Select>
                    </div>
                  </div>

                  <div className="relative">
                    <Textarea
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onFocus={() => setHoveredInput('message')}
                      onBlur={() => setHoveredInput(null)}
                      rows={4}
                      className={`bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 resize-none ${
                        hoveredInput === 'message' ? 'shadow-lg shadow-blue-500/20' : ''
                      }`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 spacex-gradient text-white py-3 rounded-lg shadow-2xl cinematic-glow transition-all duration-300 hover:scale-105">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 py-3 rounded-lg kfc-glow"
                      onClick={() => window.open('https://wa.me/21693783124', '_blank')}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                  
                  {/* Resume Download */}
                  <div className="mt-6 text-center">
                    <p className="text-gray-400 text-sm mb-4">Or download my resume for detailed information</p>
                    <Button 
                      variant="outline" 
                      className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 py-3 px-6 rounded-lg"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/resumer.html';
                        link.download = 'Bilel_Ayari_Resume.html';
                        link.click();
                      }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
