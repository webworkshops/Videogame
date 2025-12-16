import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { businessInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f10] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-black text-[#F4C430] mb-4">
              VIDEOGAMES<br />Then & Now
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Chicago's premier destination for retro and modern video games, collectibles, and gaming accessories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#F4C430] text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#F4C430] text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/inventory" className="text-gray-400 hover:text-[#F4C430] text-sm transition-colors">
                  Inventory
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-[#F4C430] text-sm transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#F4C430] text-sm transition-colors">
                  Visit Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#F4C430] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {businessInfo.address.fullAddress}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#F4C430] flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-gray-400 hover:text-[#F4C430] text-sm transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#F4C430] flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-gray-400 hover:text-[#F4C430] text-sm transition-colors">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-[#F4C430]" />
              Store Hours
            </h4>
            <ul className="space-y-1">
              {businessInfo.hours.map((schedule, index) => (
                <li key={index} className="text-gray-400 text-sm flex justify-between">
                  <span className="font-medium">{schedule.day}:</span>
                  <span className="ml-2">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Videogames Then & Now. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;