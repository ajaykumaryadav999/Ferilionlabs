import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  MapPin,
  CreditCard,
  Target,
  Briefcase,
  Star
} from 'lucide-react';

const ModelsPage = () => {
  const models = [
    {
      name: 'Bootcamp',
      tagline: 'Intensive & Focused',
      description: 'Our most intensive training model designed for dedicated learners who want to immerse themselves completely in their chosen technology.',
      price: 'Starting from ₹25,000',
      duration: '3-6 months',
      schedule: 'Monday - Saturday',
      mode: 'In-house only',
      features: [
        'Strict attendance policy (90%+ required)',
        'Monday to Saturday schedule',
        'In-house training only',
        'Small batch sizes (max 15 students)',
        'Intensive hands-on projects',
        'Direct mentor interaction',
        'Peer learning environment',
        'Fast-track career preparation'
      ],
      benefits: [
        'Fastest skill acquisition',
        'Maximum mentor attention',
        'Strong peer networking',
        'Disciplined learning environment',
        'Higher completion rates',
        'Quick job readiness'
      ],
      eligibility: [
        'Minimum graduate degree',
        'Basic computer knowledge',
        'Commitment to attend all sessions',
        'Available Monday-Saturday'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      popular: false
    },
    {
      name: 'Premium Bootcamp',
      tagline: 'Flexible & Comprehensive',
      description: 'Perfect balance of flexibility and comprehensive learning, suitable for working professionals and students with varying schedules.',
      price: 'Starting from ₹35,000',
      duration: '4-8 months',
      schedule: 'Flexible timings',
      mode: 'In-house or Virtual',
      features: [
        'Flexible attendance policy',
        'Choose your preferred timings',
        'Both in-house and virtual options',
        'Phase-wise payment options',
        'Extended learning period',
        'Recorded session access',
        'Personal learning dashboard',
        'Weekend batch options'
      ],
      benefits: [
        'Work-life balance',
        'Self-paced learning',
        'Location flexibility',
        'Payment flexibility',
        'Comprehensive coverage',
        'Lifetime access to materials'
      ],
      eligibility: [
        'Any educational background',
        'Basic computer skills',
        'Internet connection (for virtual)',
        'Self-motivated learning approach'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      popular: true
    },
    {
      name: 'Placement+',
      tagline: 'Job Guaranteed',
      description: 'Our most comprehensive model with job assurance. Pay after you get placed with a minimum package guarantee.',
      price: 'Pay after placement',
      duration: '6-12 months',
      schedule: 'Intensive + Placement prep',
      mode: 'In-house + Virtual support',
      features: [
        'Job guarantee with minimum package',
        'Pay only after successful placement',
        'Extended training period',
        'Dedicated placement team',
        'Interview preparation',
        'Resume building support',
        'Soft skills training',
        'Continuous mentorship'
      ],
      benefits: [
        '100% job assurance',
        'No upfront payment',
        'Minimum package guarantee',
        'Comprehensive career support',
        'Long-term mentorship',
        'Industry connections'
      ],
      eligibility: [
        'Strong academic background',
        'Good communication skills',
        'Commitment to placement process',
        'Available for full-time employment'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      popular: false
    }
  ];

  const comparisonFeatures = [
    { feature: 'Attendance Policy', bootcamp: 'Strict (90%+)', premium: 'Flexible', placement: 'Mandatory' },
    { feature: 'Schedule', bootcamp: 'Mon-Sat Fixed', premium: 'Flexible', placement: 'Intensive + Prep' },
    { feature: 'Mode', bootcamp: 'In-house only', premium: 'In-house/Virtual', placement: 'Hybrid' },
    { feature: 'Payment', bootcamp: 'Upfront', premium: 'Phase-wise', placement: 'Post-placement' },
    { feature: 'Duration', bootcamp: '3-6 months', premium: '4-8 months', placement: '6-12 months' },
    { feature: 'Job Support', bootcamp: 'Placement assistance', premium: 'Career guidance', placement: '100% guarantee' },
    { feature: 'Batch Size', bootcamp: 'Small (15 max)', premium: 'Medium (25 max)', placement: 'Small (12 max)' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-300 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Training Models</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Choose the learning path that fits your lifestyle, goals, and career aspirations. 
              Each model is designed to maximize your success in different circumstances.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Goal-Oriented</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Flexible Timing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Guaranteed Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our three distinct training models cater to different learning preferences, 
              schedules, and career goals. Find the perfect fit for your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${model.popular ? 'ring-4 ring-primary-200' : ''}`}>
                {model.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-r ${model.color} text-white p-8`}>
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <p className="text-blue-100 mb-4">{model.tagline}</p>
                  <div className="text-3xl font-bold">{model.price}</div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{model.description}</p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">{model.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">{model.schedule}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-700">{model.mode}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {model.features.slice(0, 6).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 ${model.textColor} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className={`block w-full bg-gradient-to-r ${model.color} text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                  >
                    Choose This Model
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Detailed Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare all three models side by side to make an informed decision 
              about which training path is right for you.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600">Bootcamp</th>
                  <th className="text-center py-4 px-6 font-semibold text-green-600">Premium Bootcamp</th>
                  <th className="text-center py-4 px-6 font-semibold text-purple-600">Placement+</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.bootcamp}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.premium}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.placement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Model Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className={`${model.bgColor} rounded-xl p-6 mb-6`}>
                  <h3 className={`text-2xl font-bold ${model.textColor} mb-2`}>{model.name}</h3>
                  <p className="text-gray-600">Benefits & Advantages</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {model.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3">
                          <Star className={`h-4 w-4 ${model.textColor} fill-current`} />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Eligibility Criteria</h4>
                    <ul className="space-y-2">
                      {model.eligibility.map((criteria, criteriaIndex) => (
                        <li key={criteriaIndex} className="flex items-center space-x-3">
                          <CheckCircle className={`h-4 w-4 ${model.textColor}`} />
                          <span className="text-gray-600 text-sm">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories by Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories by Model</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our different training models have helped students achieve their career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bootcamp Success</h3>
              <p className="text-gray-600 mb-4">
                "The intensive bootcamp format pushed me to learn faster than I ever thought possible. 
                Got placed at TCS within 2 weeks of completion!"
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=100"
                  alt="Student"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Rahul Kumar</p>
                  <p className="text-sm text-gray-600">Software Developer, TCS</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Bootcamp Success</h3>
              <p className="text-gray-600 mb-4">
                "Being able to learn while working was perfect. The flexibility allowed me to 
                transition smoothly to a new career in data science."
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?w=100"
                  alt="Student"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Data Scientist, Flipkart</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mb-4">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Placement+ Success</h3>
              <p className="text-gray-600 mb-4">
                "The job guarantee gave me confidence to focus entirely on learning. 
                Got placed at Infosys with 8 LPA package - exactly what they promised!"
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100"
                  alt="Student"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Sneha Reddy</p>
                  <p className="text-sm text-gray-600">Full Stack Developer, Infosys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-300 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Choose Your Path?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Still not sure which model is right for you? Talk to our career counselors 
            for personalized guidance based on your goals and circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Get Personalized Guidance
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/courses"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Explore Courses First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModelsPage;