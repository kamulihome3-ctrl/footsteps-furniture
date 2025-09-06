import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/public/WhatsApp Image 2025-09-06 at 06.15.50.jpeg" 
                alt="Footsteps Furniture" 
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">Footsteps Furniture</h3>
                <p className="text-sm text-gray-400">Company Limited</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Creating beautiful, functional furniture for your home and office. Quality craftsmanship meets modern design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/category/home-office" className="text-gray-400 hover:text-white">Home Office</Link></li>
              <li><Link to="/category/kitchen" className="text-gray-400 hover:text-white">Kitchen</Link></li>
              <li><Link to="/category/sitting-room" className="text-gray-400 hover:text-white">Sitting Room</Link></li>
              <li><Link to="/category/dining-room" className="text-gray-400 hover:text-white">Dining Room</Link></li>
              <li><Link to="/category/bedroom" className="text-gray-400 hover:text-white">Bedroom</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="text-gray-400">123 Furniture Street</p>
                  <p className="text-gray-400">Kampala, Uganda</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <p className="text-gray-400">+256 123 456 789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-600" />
                <p className="text-gray-400">sales@footstepsfurniture.com</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-gray-400">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Sat: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-400">Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-3">Subscribe for updates and promotions</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
                <button className="px-4 py-2 bg-amber-600 text-white rounded-r-md hover:bg-amber-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Footsteps Furniture Company Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;