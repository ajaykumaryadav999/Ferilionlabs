import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/models' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50">
      {/* Top Bar */}
    <div className="bg-blue-500 text-white py-2 lg:py-3">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center text-xs lg:text-sm">
      
      {/* Contact Info */}
      <div className="flex items-center space-x-3 lg:space-x-6">
        <div className="flex items-center space-x-1 lg:space-x-2 hover:text-blue-100 transition-colors">
          <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
          <span className="hidden sm:inline">+91 6366548237</span>
          <span className="sm:hidden">Call Us</span>
        </div>
        
        <div className="flex items-center space-x-1 lg:space-x-2 hover:text-blue-100 transition-colors">
          <Mail className="h-3 w-3 lg:h-4 lg:w-4" />
          <span className="hidden md:inline">info@ferilionlabs.com</span>
          <span className="md:hidden">Email</span>
        </div>
      </div>
      
      {/* Right Side Info */}
      <div className="hidden lg:flex items-center space-x-6">
        <div className="flex items-center space-x-2 hover:text-blue-100 transition-colors">
          <MapPin className="h-4 w-4" />
          <span>Bangalore, India</span>
        </div>
        
              <Link 
                 to="/help" 
                 className="flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-xl hover:bg-white/20 transition-all"> <span>Help & Support</span>
              </Link>

          </div>
         </div>
        </div>
       </div>


      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3 group flex-shrink-0">
                <div className="relative">
            <img
             src="/FL copy.png"
               alt="Ferilion Labs"
             className="w-xl object-contain group-hover:scale-110 transition-transform duration-300 h-14 w-14 lg:h-16 lg:w-16"
             />

                </div>
               <div className="min-w-0">
                   <h1 className="text-xl lg:text-3xl font-bold text-stone-950 leading-tight">
                     Ferilion Labs
                  </h1>
                  <p className="text-sm lg:text-base text-red-600 font-semibold leading-tight">
                 Transform Your Career
                  </p>
               </div>
            </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 xl:px-6 py-2 rounded-full text-base xl:text-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-gradient-to-r from-primary-50 to-blue-50 shadow-lg'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 hover:shadow-lg'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-300 to-blue-600 text-white px-6 xl:px-8 py-3 xl:py-4 rounded-full font-bold text-base xl:text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl whitespace-nowrap"
              >
                Enroll Now
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 xl:px-8 py-3 xl:py-4 rounded-full font-bold text-base xl:text-lg hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl whitespace-nowrap"
              >
                Join
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-gradient-to-r from-primary-50 to-blue-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-3 mt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-gradient-to-r  from-blue-300 to-blue-600 text-white px-6 py-4 rounded-full font-bold text-center hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-xl"
                >
                  Enroll Now
                </Link>
                <a
                     href="https://www.ferilion.com"
                     onClick={() => setIsMenuOpen(false)}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-gradient-to-r from-blue-300 to-blue-600 text-white px-6 py-4 rounded-full font-bold text-center hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 shadow-xl"
                 >
                   Join
                </a>

              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;