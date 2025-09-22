import { MessageCircle, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 Bilel Ayari. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Fiverr
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Upwork
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-green-400 transition-colors flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
