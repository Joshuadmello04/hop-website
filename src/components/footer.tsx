import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, ExternalLink } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-black to-black"></div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-none">
          
          {/* Church Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            {/* Logo and Church Name */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">House of Prayer</h2>
                <p className="text-gray-400 text-sm">Mumbai</p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              House of Prayer Mumbai is a vibrant community of believers dedicated to worship, fellowship, and serving our city with Gods love.
            </p>
            
            {/* Contact Info in Horizontal Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Address */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="text-red-400" size={16} />
                  <h4 className="text-white font-medium text-sm">Visit Us</h4>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Rotary Club, Juhu Tara Road<br/>
                  Santacruz (West), Mumbai
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rotary%20Club%20Of%20Bombay%20West%20Gr.%20Floor%2C%20Rotary%20Club%2C%20Juhu%20Tara%20Rd%2C%20Mangelwadi%2C%20Shivaji%20Nagr%2C%20Santacruz%20(West)%2C%20Mumbai%2C%20Maharashtra%20400054%2C%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 text-xs flex items-center space-x-1 mt-1 transition-colors"
                >
                  <span>View Map</span>
                  <ExternalLink size={12} />
                </a>
              </div>
              
              {/* Phone */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="text-red-400" size={16} />
                  <h4 className="text-white font-medium text-sm">Call Us</h4>
                </div>
                <a href="tel:+919819064045" className="text-gray-300 hover:text-white transition-colors text-xs block">
                  +91 98190 64045
                </a>
                <p className="text-gray-500 text-xs">Thomas Jayaraj (Pastor)</p>
              </div>
              
              {/* Email */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="text-red-400" size={16} />
                  <h4 className="text-white font-medium text-sm">Email Us</h4>
                </div>
                <a 
                  href="mailto:thomas.hopnet@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors text-xs"
                >
                  thomas.hopnet@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-600/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Events Calendar", href: "/events" },
                { label: "Community", href: "/community" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact Us", href: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 text-sm transition-all duration-200 hover:translate-x-1 inline-block transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Service Times */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-600/30 pb-2">
              Service Times
            </h3>
            <div className="space-y-4">
              
              {/* Hindi Service */}
              <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="text-red-400" size={16} />
                  <h4 className="font-medium text-white text-sm">Hindi Service</h4>
                </div>
                <p className="text-gray-300 text-xs">Sunday: 8:00 AM - 11:00 AM</p>
              </div>
              
              {/* English Service */}
              <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="text-red-400" size={16} />
                  <h4 className="font-medium text-white text-sm">English Service</h4>
                </div>
                <p className="text-gray-300 text-xs">Sunday: 11:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
          
          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-600/30 pb-2">
              Follow Us
            </h3>
            <div className="flex space-x-3 mb-6">
              <LinkPreview
                url="https://www.instagram.com/hop.mumbai/"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Instagram className="text-white" size={18} />
              </LinkPreview>
              
              <LinkPreview
                url="https://www.youtube.com/@hop.mumbai"
                className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                <Youtube className="text-white" size={18} />
              </LinkPreview>
            </div>
            
            {/* Connect with us section */}
            <div className="bg-gray-900/30 rounded-lg p-3 border border-gray-800">
              <h4 className="text-white font-medium mb-3 flex items-center space-x-2 text-sm">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span>Connect with us</span>
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-3 text-justify">
                Join our vibrant online community! Follow our 
                <LinkPreview 
                  url="https://www.instagram.com/hop.mumbai/" 
                  className="text-purple-400 hover:text-purple-300 mx-1 font-medium"
                >
                  Instagram
                </LinkPreview>
                for daily inspiration and behind-the-scenes moments, and subscribe to our
                <LinkPreview 
                  url="https://www.youtube.com/@hop.mumbai" 
                  className="text-red-400 hover:text-red-300 mx-1 font-medium"
                >
                  YouTube channel
                </LinkPreview>
                for powerful sermons and worship sessions.
              </p>
              <div className="text-xs text-gray-500 text-justify">
                Never miss live streams, events, and fellowship opportunities with our growing community.
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 w-full">
            
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center lg:text-left">
              © 2024 House of Prayer Mumbai. All rights reserved.
            </div>
            
            {/* Built by */}
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-gray-500">Built with</span>
              <span className="text-red-500">♥</span>
              <span className="text-gray-500">by</span>
              <LinkPreview
                url="https://joshuadmello.vercel.app/"
                className="text-red-400 font-medium hover:text-red-300 transition-colors duration-300"
              >
                Joshua Dmello
              </LinkPreview>
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
    </footer>
  );
}