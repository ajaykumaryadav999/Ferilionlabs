import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Users, 
  Award, 
  TrendingUp, 
  BookOpen, 
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Briefcase,
  Clock,
  Sparkles,
  Zap,
  ChevronDown
} from 'lucide-react';
import RegistrationPopup from '../components/RegistrationPopup';

const HomePage = () => {
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const stats = [
    { icon: Users, value: '10,000+', label: 'Successful Alumni', color: 'text-primary-600', bg: 'bg-primary-100' },
    { icon: Award, value: '95%', label: 'Placement Success', color: 'text-secondary-600', bg: 'bg-secondary-100' },
    { icon: BookOpen, value: '50+', label: 'Expert Courses', color: 'text-primary-600', bg: 'bg-primary-100' },
    { icon: TrendingUp, value: '₹8L', label: 'Average Package', color: 'text-green-600', bg: 'bg-green-100' },
  ];

  const models = [
    {
      name: 'Bootcamp',
      description: 'Intensive in-house training with strict attendance and Monday-Saturday schedule',
      features: ['In-house only', 'Strict attendance', 'Monday-Saturday', 'Eligibility criteria'],
      color: 'from-primary-400 to-primary-500',
      icon: '🎯'
    },
    {
      name: 'Premium Bootcamp',
      description: 'Flexible training with both in-house and virtual options',
      features: ['In-house or Virtual', 'Relaxed rules', 'Phase-wise payment', 'Flexible schedule'],
      color: 'from-secondary-400 to-secondary-500',
      icon: '⭐'
    },
    {
      name: 'Placement+',
      description: 'Job assurance based model with post-placement payment',
      features: ['Job assurance', 'Post-placement payment', 'Guaranteed placement', 'Career support'],
      color: 'from-accent-400 to-accent-500',
      icon: '🚀'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at Google',
      content: 'Ferilion Labs transformed my career completely. The practical approach and industry mentorship helped me land my dream job.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400'
    },
    {
      name: 'Rahul Kumar',
      role: 'Data Scientist at Microsoft',
      content: 'The placement+ model was perfect for me. Got placed immediately after completion with 300% salary hike!',
      rating: 5,
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=400'
    },
    {
      name: 'Sneha Patel',
      role: 'Full Stack Developer at Amazon',
      content: 'Excellent training quality and support. The survival-focused approach made me industry-ready from day one.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-primary-50/20 text-gray-800 py-8 md:py-16 overflow-hidden min-h-screen flex items-center">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-red-200/20 rounded-full animate-bounce-gentle"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-300/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-primary-400/10 rounded-full animate-ping"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 opacity-0 animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div>
              
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
                  Transform Your
                  <span className="block bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-pulse">
                    Career Today
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
                  Join 10,000+ successful professionals who accelerated their careers with our 
                  <span className="font-bold text-primary-600 bg-primary-100 px-2 py-1 rounded-lg"> 90% survival-focused</span> training approach. 
                  Get placed in top companies with guaranteed job assistance.
                </p>
              </div>

          <div className="flex flex-col sm:flex-row gap-4">
               <button
                     onClick={() => setShowRegistrationPopup(true)}
                        className="bg-gradient-to-r  from-blue-500 to-blue-300 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl  transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-3 group"
  >
                     <Zap className="h-6 w-6 group-hover:animate-bounce" />
                      <span>Start Your Journey</span>
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
               </button>
              <Link to="/courses" className="bg-white border-2 border-primary-200 text-primary-600 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl group"
            >
                <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>Explore Courses</span>
           </Link>
        </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 text-sm animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-semibold">Free Demo Session</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-semibold">100% Job Assistance</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-semibold">Industry Mentors</span>
                </div>
              </div>

          
            </div>

            {/* Hero Image/Card */}
            <div className="relative opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                <div className="bg-gradient-to-br from-primary-50/80 to-secondary-50/80 rounded-2xl p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center space-x-3">
                    <Target className="h-8 w-8 text-primary-600" />
                    <span>Why Choose Ferilion Labs?</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="bg-primary-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <Target className="h-6 w-6 text-primary-600" />
                      </div>
                      <span className="font-bold text-gray-700 text-base md:text-lg">90% Survival + 10% Job Focus</span>
                    </div>
                    <div className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="bg-secondary-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <Briefcase className="h-6 w-6 text-secondary-600" />
                      </div>
                      <span className="font-bold text-gray-700 text-base md:text-lg">Real-time Capstone Projects</span>
                    </div>
                    <div className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="bg-primary-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <Clock className="h-6 w-6 text-primary-600" />
                      </div>
                      <span className="font-bold text-gray-700 text-base md:text-lg">Flexible Learning Models</span>
                    </div>
                    <div className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="bg-green-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <Award className="h-6 w-6 text-green-600" />
                      </div>
                      <span className="font-bold text-gray-700 text-base md:text-lg">Industry Expert Mentorship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats" 
        data-animate 
        className={`py-24 bg-white transition-all duration-1000 ${
          isVisible.stats ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group hover:scale-110 transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl ${stat.bg} mb-6 group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6`}>
                    <IconComponent className={`h-12 w-12 ${stat.color} group-hover:scale-125 transition-transform duration-300`} />
                  </div>
                  <div className="text-5xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">{stat.value}</div>
                  <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section 
        id="overview" 
        data-animate 
        className={`py-24 bg-gradient-to-br from-gray-50/50 to-primary-50/30 transition-all duration-1000 ${
          isVisible.overview ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">About Ferilion Labs</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're not just another training institute. We're career transformation specialists 
              committed to your professional success through our unique survival-focused methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <h3 className="text-4xl font-bold text-gray-800">Our Unique Formula</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 group">
                  <div className="bg-primary-100 rounded-2xl p-4 group-hover:scale-110 transition-transform">
                    <Target className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl mb-2">90% Survival-Focused Training</h4>
                    <p className="text-gray-600 text-lg">Real-world skills that help you survive and thrive in the industry</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 group">
                  <div className="bg-secondary-100 rounded-2xl p-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="h-8 w-8 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl mb-2">10% Job-Focused</h4>
                    <p className="text-gray-600 text-lg">Interview preparation and placement assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 group">
                  <div className="bg-primary-100 rounded-2xl p-4 group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl mb-2">Real-time Capstone Projects</h4>
                    <p className="text-gray-600 text-lg">Hands-on experience with industry-relevant projects</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold text-xl group"
              >
                Learn More About Us
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <div className="bg-gradient-to-br from-primary-50/80 to-secondary-50/80 rounded-3xl p-10">
                <h4 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h4>
                <p className="text-gray-700 mb-10 leading-relaxed text-lg">
                  To provide dignity, financial stability, work-life balance, and career growth 
                  opportunities through comprehensive IT training and placement assistance.
                </p>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl font-bold text-primary-600 mb-2">5%</div>
                    <div className="text-gray-600 font-semibold">CSR Free Training</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl font-bold text-secondary-600 mb-2">100%</div>
                    <div className="text-gray-600 font-semibold">Practical Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Models */}
      <section 
        id="models" 
        data-animate 
        className={`py-24 bg-white transition-all duration-1000 ${
          isVisible.models ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">Choose Your Learning Path</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Flexible training models designed to fit your schedule, learning style, and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {models.map((model, index) => (
              <div 
                key={index} 
                className="group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 h-full">
                  <div className={`bg-gradient-to-r ${model.color} text-white p-8 rounded-3xl mb-8 text-center group-hover:scale-105 transition-transform`}>
                    <div className="text-5xl mb-4">{model.icon}</div>
                    <h3 className="text-3xl font-bold">{model.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{model.description}</p>
                  <ul className="space-y-4 mb-10">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-4">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-semibold text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/models"
                    className="block w-full bg-gradient-to-r from-blue-500 to-blue-200 text-gray-800 text-center  text-white py-5 rounded-2xl font-bold text-lg hover:text-white transition-all duration-300 group-hover:shadow-xl transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/models"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-200 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:border-2 hover:border-2 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Compare All Models
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
         </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials" 
        data-animate 
        className={`py-24 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 transition-all duration-1000 ${
          isVisible.testimonials ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">Success Stories</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our successful alumni who transformed their careers with Ferilion Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-8">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-primary-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl">{testimonial.name}</h4>
                    <p className="text-gray-600 font-semibold">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed text-lg">"{testimonial.content}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/success-stories"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-bold text-xl group"
            >
              Read More Success Stories
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-200 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Transform Your Career?</h2>
          <p className="text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have accelerated their careers with our proven training methodology. 
            Start your journey today with a free demo session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowRegistrationPopup(true)}
              className="bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Register for Free Demo
            </button>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Registration Popup */}
      {showRegistrationPopup && (
        <RegistrationPopup onClose={() => setShowRegistrationPopup(false)} />
      )}
    </div>
  );
};

export default HomePage;