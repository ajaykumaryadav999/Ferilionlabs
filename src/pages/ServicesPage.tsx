import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Monitor, Video, MessageSquare, Workflow as Workshop, Briefcase, Network, CheckCircle, ArrowRight, Clock, Award, Target } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Users,
      title: 'Classroom Training',
      description: 'Traditional in-person training with direct interaction, hands-on learning, and immediate feedback from expert instructors.',
      features: [
        'Face-to-face instruction',
        'Interactive learning environment',
        'Immediate doubt resolution',
        'Peer-to-peer learning',
        'Structured curriculum',
        'Regular assessments'
      ],
      benefits: [
        'Better focus and concentration',
        'Strong peer networking',
        'Disciplined learning schedule',
        'Direct mentor interaction'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: Monitor,
      title: 'Virtual Training',
      description: 'Live online training sessions with the same quality and interaction as classroom training, but from the comfort of your home.',
      features: [
        'Live interactive sessions',
        'Screen sharing capabilities',
        'Digital whiteboard',
        'Recording access',
        'Online collaboration tools',
        'Flexible location'
      ],
      benefits: [
        'No commute time',
        'Cost-effective',
        'Access to recorded sessions',
        'Global accessibility'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      icon: Video,
      title: 'Recorded Training',
      description: 'Self-paced learning with high-quality recorded video content, assignments, and assessments that you can access anytime.',
      features: [
        'High-quality video content',
        'Self-paced learning',
        'Downloadable resources',
        'Progress tracking',
        'Multiple device access',
        'Lifetime access'
      ],
      benefits: [
        'Learn at your own pace',
        'Revisit content anytime',
        'Cost-effective option',
        'Flexible scheduling'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      icon: MessageSquare,
      title: 'Career Counselling',
      description: 'One-on-one career guidance sessions to help you choose the right career path and develop a strategic plan for success.',
      features: [
        'Personalized career assessment',
        'Industry insights',
        'Skill gap analysis',
        'Career roadmap creation',
        'Regular follow-ups',
        'Goal setting support'
      ],
      benefits: [
        'Clear career direction',
        'Informed decision making',
        'Personalized guidance',
        'Strategic career planning'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      icon: Workshop,
      title: 'Workshops',
      description: 'Short-term intensive workshops on specific technologies and skills to quickly upskill or learn new concepts.',
      features: [
        'Technology-specific focus',
        'Hands-on activities',
        'Industry case studies',
        'Expert-led sessions',
        'Networking opportunities',
        'Certificate of completion'
      ],
      benefits: [
        'Quick skill acquisition',
        'Cost-effective learning',
        'Focused content',
        'Networking opportunities'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      icon: Briefcase,
      title: 'Placement Assistance',
      description: 'Comprehensive job placement support including resume building, interview preparation, and connecting with our hiring partners.',
      features: [
        'Resume optimization',
        'Interview preparation',
        'Mock interviews',
        'Job matching',
        'Salary negotiation tips',
        'Follow-up support'
      ],
      benefits: [
        'Higher placement success',
        'Better salary packages',
        'Interview confidence',
        'Professional growth'
      ],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600'
    },
    {
      icon: Network,
      title: 'Professional Networking & Guidance',
      description: 'Access to our alumni network, industry professionals, and ongoing career guidance throughout your professional journey.',
      features: [
        'Alumni network access',
        'Industry meetups',
        'Mentorship programs',
        'Professional events',
        'Skill development sessions',
        'Continuous guidance'
      ],
      benefits: [
        'Strong professional network',
        'Career growth opportunities',
        'Industry connections',
        'Lifelong support'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Students Trained', icon: Users },
    { value: '95%', label: 'Placement Success', icon: Award },
    { value: '500+', label: 'Partner Companies', icon: Briefcase },
    { value: '50+', label: 'Expert Services', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive IT training and career development services designed to transform 
              your professional journey and accelerate your career growth.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Flexible Learning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Career Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Service Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From flexible training formats to career support, we offer everything you need 
              to succeed in your IT career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${service.color} text-white p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 rounded-full p-3">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className={`h-4 w-4 ${service.textColor} flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className={`${service.bgColor} rounded-lg p-4`}>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-gray-600 text-sm flex items-center space-x-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${service.textColor.replace('text-', 'bg-')}`}></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures you get the maximum value from our services 
              and achieve your career goals efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">We assess your current skills, career goals, and learning preferences to recommend the best services.</p>
            </div>

            <div className="text-center">
              <div className="bg-secondary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">Create a personalized learning and career development plan tailored to your specific needs and timeline.</p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Execution</h3>
              <p className="text-gray-600">Implement the plan with our expert trainers, mentors, and career counselors supporting you every step.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Success</h3>
              <p className="text-gray-600">Achieve your career goals with our placement assistance and ongoing professional support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive service packages designed for different career stages and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Package</h3>
                <p className="text-gray-600">Perfect for beginners</p>
                <div className="text-3xl font-bold text-primary-600 mt-4">₹15,000</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Career Counselling Session</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Basic Course Access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Recorded Training Materials</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Basic Placement Assistance</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-primary-200 p-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Package</h3>
                <p className="text-gray-600">Comprehensive training solution</p>
                <div className="text-3xl font-bold text-primary-600 mt-4">₹35,000</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>All Starter Package features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Live Virtual/Classroom Training</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Hands-on Projects</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Advanced Placement Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Professional Networking Access</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center py-3 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all"
              >
                Choose Professional
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise Package</h3>
                <p className="text-gray-600">Complete career transformation</p>
                <div className="text-3xl font-bold text-primary-600 mt-4">₹55,000</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>All Professional Package features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>1-on-1 Mentorship</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Job Guarantee Program</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Lifetime Alumni Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Advanced Workshops</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Go Enterprise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose the services that align with your career goals and let our experts 
            guide you to success. Start with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/courses"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;