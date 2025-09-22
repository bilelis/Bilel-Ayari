"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, User, Building, MapPin, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    location: '',
    project: '',
    review: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log('Review submitted:', { rating, ...formData });
    alert('Thank you for your review! It will be published after moderation.');
    
    // Reset form
    setRating(0);
    setFormData({
      name: '',
      role: '',
      location: '',
      project: '',
      review: ''
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30 orange-border-glow"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">
          Leave a Review
        </h3>
        <p className="text-gray-300 text-lg">
          Share your experience working with me
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div className="text-center">
          <label className="block text-white font-medium mb-4">
            How would you rate your experience?
          </label>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-all duration-200 hover:scale-110"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredRating || rating)
                      ? 'text-orange-500 fill-current'
                      : 'text-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white font-medium mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Your Name
            </label>
            <Input
              type="text"
              placeholder="Ahmed Ben Ali / أحمد بن علي"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500/20"
              required
            />
          </div>
          
          <div>
            <label className="block text-white font-medium mb-2">
              <Building className="w-4 h-4 inline mr-2" />
              Your Role/Company
            </label>
            <Input
              type="text"
              placeholder="CEO, TechStart Tunisia / مدير عام، تيك ستارت تونس"
              value={formData.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500/20"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white font-medium mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Location
            </label>
            <Input
              type="text"
              placeholder="Tunis, Tunisia / تونس، تونس"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500/20"
              required
            />
          </div>
          
          <div>
            <label className="block text-white font-medium mb-2">
              Project Type
            </label>
            <Select
              value={formData.project}
              onChange={(e) => handleInputChange('project', e.target.value)}
              className="bg-gray-800/50 border-gray-600 text-white focus:border-orange-500 focus:ring-orange-500/20"
              required
            >
              <option value="">Select project type</option>
              <option value="Portfolio Website">Portfolio Website</option>
              <option value="E-commerce Platform">E-commerce Platform</option>
              <option value="AI Development">AI Development</option>
              <option value="Web Application">Web Application</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Other">Other</option>
            </Select>
          </div>
        </div>

        {/* Review Text */}
        <div>
          <label className="block text-white font-medium mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Your Review
          </label>
          <Textarea
            placeholder="Tell us about your experience working with Bilel. What did you like most? How did the project help your business? / اكتب لنا عن تجربتك في العمل مع بيل. ما الذي أعجبك أكثر؟ كيف ساعدك المشروع في عملك؟"
            value={formData.review}
            onChange={(e) => handleInputChange('review', e.target.value)}
            rows={4}
            className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500/20 resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          >
            <Send className="w-5 h-5 mr-2" />
            Submit Review
          </Button>
        </div>
      </form>

      {/* Note */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          Your review will be published after moderation. We appreciate your feedback!
        </p>
      </div>
    </motion.div>
  );
}
