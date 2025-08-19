import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/FL copy.png"
                alt="Ferilion Labs"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-stone-950">
                  Ferilion Labs
                </h3>
                <p className="text-sm text-secondary-600 font-medium">Transform Your Career</p>
              </div>
            </div>
            <p className="text  text-sm leading-relaxed">
              Empowering careers through expert IT training with 90% survival-focused and 10% job-focused approach. 
              Join thousands of successful alumni who have transformed their careers with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-primary-50">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-primary-50">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-primary-50">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-primary-50">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-primary-50">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Courses', href: '/courses' },
                { name: 'Pricing', href: '/models' },
                { name: 'Success Stories', href: '/success-stories' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Classroom Training',
                'Virtual Training',
                'Recorded Training',
                'Career Counselling',
                'Placement Assistance',
                'Professional Networking',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-600 text-sm font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary-100 rounded-lg p-2">
                  <MapPin className="h-5 w-5 text-primary-600" />
                </div>
                <p className="text text-sm">
                  Bangalore, Karnataka<br />
                  India - 560001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 rounded-lg p-2">
                  <Phone className="h-5 w-5 text-primary-600" />
                </div>
                <div className="text text-sm">
                  <p>+91 6366548237</p>
                  <p>+91 6366548235</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 rounded-lg p-2">
                  <Mail className="h-5 w-5 text-primary-600" />
                </div>
                <p className="text text-sm">info@ferilionlabs.com</p>
              </div>
              
              {/* WhatsApp Links */}
              <div className="space-y-2 pt-2">
                <a
                  href="https://wa.me/+916366548237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-gray-600 text-sm">
              © 2024 Ferilion Labs. All rights reserved.
            </span>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/help" className="text-gray-600 hover:text-primary-600 text-sm transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link to="/help" className="text-gray-600 hover:text-primary-600 text-sm transition-colors font-medium">
                Terms of Service
              </Link>
              <Link to="/help" className="text-gray-600 hover:text-primary-600 text-sm transition-colors font-medium">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
