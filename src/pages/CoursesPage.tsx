import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Award, 
  Download, 
  Play, 
  BookOpen,
  Code,
  Database,
  Palette,
  TrendingUp,
  Star,
  Calendar,
  Filter
} from 'lucide-react';

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  const categories = [
    'All',
    'Programming',
    'Data Science',
    'Design',
    'Marketing',
    'Cloud Computing'
  ];

  const courses = [
    {
      id: 1,
      title: 'Power Platform',
      category: 'Programming',
      description: 'Master both frontend and backend development with modern technologies including React, Node.js, and MongoDB.',
      duration: '6 months',
      mode: 'In-house/Virtual',
      rating: 4.9,
      students: 1250,
      price: '₹45,000',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=500',
      status: 'Active',
      batchDates: ['15 Jan 2024', '1 Feb 2024', '15 Feb 2024'],
      features: ['Live Projects', 'Job Assistance', 'Industry Mentors', 'Certification'],
      syllabus: [
        'HTML5, CSS3, JavaScript',
        'React.js & Redux',
        'Node.js & Express',
        'MongoDB & Database Design',
        'RESTful APIs',
        'Deployment & DevOps'
      ]
    },
    {
      id: 2,
      title: 'Data Science & Machine Learning',
      category: 'Data Science',
      description: 'Comprehensive data science program covering Python, ML algorithms, and real-world data analysis projects.',
      duration: '8 months',
      mode: 'In-house/Virtual',
      rating: 4.8,
      students: 890,
      price: '₹55,000',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=500',
      status: 'Active',
      batchDates: ['20 Jan 2024', '5 Feb 2024'],
      features: ['Capstone Projects', 'Industry Data', 'ML Tools', 'Portfolio Building'],
      syllabus: [
        'Python Programming',
        'Statistics & Probability',
        'Data Visualization',
        'Machine Learning Algorithms',
        'Deep Learning',
        'Real-world Projects'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      category: 'Design',
      description: 'Learn user-centered design principles, wireframing, prototyping, and design systems.',
      duration: '4 months',
      mode: 'In-house/Virtual',
      rating: 4.7,
      students: 620,
      price: '₹35,000',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=500',
      status: 'Active',
      batchDates: ['10 Jan 2024', '25 Jan 2024'],
      features: ['Design Tools', 'Portfolio Projects', 'Industry Feedback', 'Job Support'],
      syllabus: [
        'Design Fundamentals',
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems',
        'Usability Testing'
      ]
    },
    {
      id: 4,
      title: 'Digital Marketing Pro',
      category: 'Marketing',
      description: 'Complete digital marketing course covering SEO, SEM, social media, and analytics.',
      duration: '5 months',
      mode: 'In-house/Virtual',
      rating: 4.6,
      students: 750,
      price: '₹40,000',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?w=500',
      status: 'Active',
      batchDates: ['12 Jan 2024', '28 Jan 2024'],
      features: ['Live Campaigns', 'Analytics Tools', 'Certification', 'Case Studies'],
      syllabus: [
        'Digital Marketing Strategy',
        'SEO & Content Marketing',
        'Google Ads & PPC',
        'Social Media Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ]
    },
    {
      id: 5,
      title: 'Cloud Computing with AWS',
      category: 'Cloud Computing',
      description: 'Master cloud infrastructure, deployment, and management with hands-on AWS experience.',
      duration: '6 months',
      mode: 'In-house/Virtual',
      rating: 4.8,
      students: 450,
      price: '₹50,000',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?w=500',
      status: 'Active',
      batchDates: ['18 Jan 2024', '3 Feb 2024'],
      features: ['AWS Credits', 'Real Infrastructure', 'Certification Prep', 'DevOps Integration'],
      syllabus: [
        'Cloud Fundamentals',
        'AWS Core Services',
        'Infrastructure as Code',
        'Security & Compliance',
        'DevOps & CI/CD',
        'Cost Optimization'
      ]
    },
    {
      id: 6,
      title: 'Python Programming Bootcamp',
      category: 'Programming',
      description: 'Intensive Python course from basics to advanced topics including web development and automation.',
      duration: '3 months',
      mode: 'In-house only',
      rating: 4.9,
      students: 980,
      price: '₹25,000',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=500',
      status: 'Active',
      batchDates: ['8 Jan 2024', '22 Jan 2024'],
      features: ['Hands-on Coding', 'Project Portfolio', 'Code Reviews', 'Job Prep'],
      syllabus: [
        'Python Basics',
        'Object-Oriented Programming',
        'Web Scraping',
        'Django Framework',
        'API Development',
        'Testing & Debugging'
      ]
    }
  ];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming': return <Code className="h-5 w-5" />;
      case 'Data Science': return <Database className="h-5 w-5" />;
      case 'Design': return <Palette className="h-5 w-5" />;
      case 'Marketing': return <TrendingUp className="h-5 w-5" />;
      case 'Cloud Computing': return <Award className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br  from-blue-300 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Industry-relevant courses designed by experts to accelerate your career. 
              Choose from 50+ specialized programs with hands-on projects and job assistance.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>10,000+ Alumni</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>95% Placement Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Flexible Timings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Browse Courses ({filteredCourses.length})
            </h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="h-5 w-5" />
              <span>Filter by category</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-primary-600 hover:text-primary-600'
                }`}
              >
                {category !== 'All' && getCategoryIcon(category)}
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {course.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center space-x-2 text-sm text-primary-600 font-medium">
                      {getCategoryIcon(course.category)}
                      <span>{course.category}</span>
                    </span>
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                  {/* Course Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {course.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Batch Dates */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Next Batches:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.batchDates.slice(0, 2).map((date, dateIndex) => (
                        <span key={dateIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {date}
                        </span>
                      ))}
                      {course.batchDates.length > 2 && (
                        <span className="text-xs text-gray-500">+{course.batchDates.length - 2} more</span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowRegistrationPopup(true)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 transform hover:scale-105"
                    >
                      Register for Demo
                    </button>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                        <Download className="h-4 w-4" />
                        <span className="text-sm">Syllabus</span>
                      </button>
                      <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                        <Play className="h-4 w-4" />
                        <span className="text-sm">Preview</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Load More Courses
            </button>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Courses?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our courses are designed with industry needs in mind, ensuring you get practical skills 
              that directly translate to career success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Certified</h3>
              <p className="text-gray-600">Get recognized certifications that employers value</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-secondary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Mentors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-accent-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Projects</h3>
              <p className="text-gray-600">Work on real-world projects and build your portfolio</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Job Assistance</h3>
              <p className="text-gray-600">Dedicated placement support until you get your dream job</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-300 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your course and begin your transformation journey today. 
            Join thousands of successful professionals who started just like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowRegistrationPopup(true)}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Register for Free Demo
            </button>
            <Link
              to="/models"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Explore Training Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;