import React, { useState } from 'react';
import { X, BookOpen, Users, Award, TrendingUp } from 'lucide-react';

interface RegistrationPopupProps {
  onClose: () => void;
}

const RegistrationPopup: React.FC<RegistrationPopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    model: ''
  });

  const courses = [
    'Full Stack Development',
    'Data Science',
    'Digital Marketing',
    'UI/UX Design',
    'Python Programming',
    'Java Development',
    'React.js',
    'Node.js'
  ];

  const models = [
    'Bootcamp',
    'Premium Bootcamp',
    'Placement+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Registration data:', formData);
    alert('Registration successful! We will contact you soon.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-white relative rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-primary-100 transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">🚀 Transform Your Career Today!</h2>
            <p className="text-primary-100 text-lg">Join 10,000+ successful alumni who landed their dream jobs</p>
          </div>
        </div>

        {/* Stats */}
        <div className="px-8 py-6 bg-gradient-to-r from-orange-50 to-primary-50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-xl mb-2 shadow-md">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">10,000+</span>
              <span className="text-xs text-gray-600 font-medium">Alumni</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-xl mb-2 shadow-md">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">95%</span>
              <span className="text-xs text-gray-600 font-medium">Success Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-xl mb-2 shadow-md">
                <BookOpen className="h-6 w-6 text-primary-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">50+</span>
              <span className="text-xs text-gray-600 font-medium">Courses</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-3 rounded-xl mb-2 shadow-md">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-gray-800">₹8L</span>
              <span className="text-xs text-gray-600 font-medium">Avg. Package</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                Course of Interest *
              </label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="model" className="block text-sm font-semibold text-gray-700 mb-2">
                Training Model *
              </label>
              <select
                id="model"
                name="model"
                required
                value={formData.model}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
              >
                <option value="">Select a model</option>
                {models.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Register for Free Demo
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-700 py-4 px-8 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Explore First
              </button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="text-center space-y-3">
              <p className="text-sm text-gray-700 font-medium">
                ✅ Free Demo Session • ✅ Industry Expert Mentors • ✅ 100% Job Assistance
              </p>
              <p className="text-xs text-gray-500">
                No spam, we respect your privacy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup;