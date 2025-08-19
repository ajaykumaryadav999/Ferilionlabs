import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Play, 
  Award, 
  TrendingUp, 
  Users, 
  Filter,
  ExternalLink,
  Quote
} from 'lucide-react';

const SuccessStoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const categories = ['All', 'Programming', 'Data Science', 'Design', 'Marketing', 'Cloud Computing'];
  const types = ['All', 'Text', 'Image', 'Video'];

  const successStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Senior Software Engineer',
      company: 'Google',
      course: 'Full Stack Development',
      category: 'Programming',
      type: 'Video',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?w=400',
      beforeSalary: '₹3.5L',
      afterSalary: '₹18L',
      story: 'I was working as a customer support executive with no technical background. Ferilion Labs\' survival-focused approach helped me not just get a job, but excel in it. The practical projects and mentorship were game-changers.',
      testimonial: 'The training at Ferilion Labs completely transformed my career. From customer support to Google - it feels like a dream come true!',
      rating: 5,
      videoUrl: 'https://example.com/video1',
      placementImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=600'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      role: 'Data Scientist',
      company: 'Microsoft',
      course: 'Data Science & ML',
      category: 'Data Science',
      type: 'Image',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=400',
      beforeSalary: '₹4L',
      afterSalary: '₹15L',
      story: 'Coming from a mechanical engineering background, I was skeptical about transitioning to data science. The Placement+ model gave me confidence, and the job guarantee was exactly what I needed.',
      testimonial: 'The hands-on projects and real-world datasets made all the difference. I felt industry-ready from day one at Microsoft.',
      rating: 5,
      placementImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=600'
    },
    {
      id: 3,
      name: 'Sneha Reddy',
      role: 'UI/UX Designer',
      company: 'Amazon',
      course: 'UI/UX Design',
      category: 'Design',
      type: 'Text',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400',
      beforeSalary: '₹2.8L',
      afterSalary: '₹12L',
      story: 'I was a graphic designer struggling to find good opportunities. The UI/UX course at Ferilion Labs opened up a whole new world for me. The portfolio projects were so impressive that Amazon hired me immediately.',
      testimonial: 'The design thinking approach and user research methodologies I learned here are invaluable. My Amazon team was impressed with my practical knowledge.',
      rating: 5
    },
    {
      id: 4,
      name: 'Arun Patel',
      role: 'Digital Marketing Manager',
      company: 'Flipkart',
      course: 'Digital Marketing',
      category: 'Marketing',
      type: 'Video',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400',
      beforeSalary: '₹3L',
      afterSalary: '₹10L',
      story: 'Traditional marketing was becoming obsolete. The digital marketing course helped me transition smoothly and the live campaign projects gave me real experience that employers valued.',
      testimonial: 'The ROI-focused approach and analytics training made me stand out in interviews. Flipkart was impressed with my practical campaign experience.',
      rating: 5,
      videoUrl: 'https://example.com/video2'
    },
    {
      id: 5,
      name: 'Kavya Singh',
      role: 'Cloud Solutions Architect',
      company: 'AWS',
      course: 'Cloud Computing',
      category: 'Cloud Computing',
      type: 'Image',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=400',
      beforeSalary: '₹5L',
      afterSalary: '₹20L',
      story: 'I was a system administrator looking to upskill. The cloud computing course with hands-on AWS experience was exactly what I needed. The certification preparation was thorough.',
      testimonial: 'Working with real AWS infrastructure during training gave me confidence to handle complex cloud solutions at work.',
      rating: 5,
      placementImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=600'
    },
    {
      id: 6,
      name: 'Vikram Joshi',
      role: 'Python Developer',
      company: 'Infosys',
      course: 'Python Programming',
      category: 'Programming',
      type: 'Text',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=400',
      beforeSalary: '₹2.5L',
      afterSalary: '₹8L',
      story: 'Fresh graduate with no programming experience. The Python bootcamp was intensive but worth it. The code review sessions and project feedback helped me write production-quality code.',
      testimonial: 'The emphasis on clean code and best practices made me a better developer. My team lead at Infosys was impressed with my coding standards.',
      rating: 5
    }
  ];

  const filteredStories = successStories.filter(story => {
    const categoryMatch = selectedCategory === 'All' || story.category === selectedCategory;
    const typeMatch = selectedType === 'All' || story.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const stats = [
    { value: '10,000+', label: 'Success Stories', icon: Users },
    { value: '300%', label: 'Average Salary Hike', icon: TrendingUp },
    { value: '95%', label: 'Placement Success', icon: Award },
    { value: '4.9/5', label: 'Student Rating', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-300 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Real stories from real people who transformed their careers with Ferilion Labs. 
              From career switches to salary hikes, discover how our alumni achieved their dreams.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 " />
                <span>40% Avg Salary Hike</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>95% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>5,000+ Alumni</span>
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
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-blue-600 text-white mb-4">
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

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Browse Stories ({filteredStories.length})
            </h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="h-5 w-5" />
              <span>Filter stories</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">By Course Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-primary-600 hover:text-primary-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">By Story Type</label>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                      selectedType === type
                        ? 'bg-secondary-600 text-white border-secondary-600'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-secondary-600 hover:text-secondary-600'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Story Header */}
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{story.rating}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      story.type === 'Video' ? 'bg-red-100 text-red-800' :
                      story.type === 'Image' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {story.type}
                    </span>
                  </div>
                  {story.type === 'Video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors cursor-pointer">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                      <p className="text-gray-600">{story.role}</p>
                      <p className="text-primary-600 font-medium">{story.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Salary Growth</div>
                      <div className="text-lg font-bold text-green-600">
                        {story.beforeSalary} → {story.afterSalary}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {story.course}
                    </span>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 relative">
                    <Quote className="h-6 w-6 text-gray-300 absolute top-2 left-2" />
                    <p className="text-gray-700 italic pl-8 text-sm leading-relaxed">
                      {story.testimonial}
                    </p>
                  </div>

                  {/* Story Preview */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {story.story}
                  </p>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button className="w-full bg-gradient-to-r from-blue-300 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 transform hover:scale-105">
                      Read Full Story
                    </button>
                    
                    {story.placementImage && (
                      <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                        <ExternalLink className="h-4 w-4" />
                        <span>View Placement Proof</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Load More Stories
            </button>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?w=200"
                    alt="Featured Success Story"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Priya Sharma</h3>
                    <p className="text-gray-600">Senior Software Engineer at Google</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "Ferilion Labs didn't just teach me to code – they taught me to think like a software engineer. 
                  The survival-focused approach prepared me for real-world challenges that I face every day at Google."
                </blockquote>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">₹3.5L → ₹18L</div>
                    <div className="text-sm text-gray-600">Salary Growth</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary-600">6 Months</div>
                    <div className="text-sm text-gray-600">Training Duration</div>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-blue-300 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 transform hover:scale-105">
                  Watch Full Interview
                </button>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=600"
                  alt="Success Story"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-300 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with Ferilion Labs. 
            Your success story could be next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Start Your Journey
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

export default SuccessStoriesPage;