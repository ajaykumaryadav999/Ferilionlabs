import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Send,
  CheckCircle,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Technology',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-15 LPA',
      status: 'Active',
      description: 'We are looking for an experienced Full Stack Developer to join our curriculum development team. You will be responsible for creating hands-on projects and real-world applications for our students.',
      requirements: [
        'Strong experience in React.js, Node.js, and MongoDB',
        'Experience with modern development tools and practices',
        'Passion for teaching and mentoring',
        'Excellent communication skills',
        'Experience in EdTech or training industry preferred'
      ],
      responsibilities: [
        'Develop and maintain course projects and assignments',
        'Mentor students during live sessions',
        'Create technical documentation and tutorials',
        'Collaborate with curriculum team on course improvements',
        'Conduct code reviews and provide feedback'
      ]
    },
    {
      id: 2,
      title: 'Data Science Instructor',
      department: 'Education',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '4-7 years',
      salary: '₹10-18 LPA',
      status: 'Active',
      description: 'Join our team as a Data Science Instructor to shape the next generation of data scientists. You will design curriculum, conduct live sessions, and mentor students.',
      requirements: [
        'Masters/PhD in Data Science, Statistics, or related field',
        'Strong experience in Python, R, and ML frameworks',
        'Industry experience in data science projects',
        'Excellent presentation and communication skills',
        'Experience in training or academic background preferred'
      ],
      responsibilities: [
        'Conduct live data science training sessions',
        'Develop real-world data science projects',
        'Mentor students on capstone projects',
        'Create assessment materials and rubrics',
        'Stay updated with latest industry trends'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Design Mentor',
      department: 'Design',
      location: 'Bangalore, India',
      type: 'Part-time',
      experience: '2-4 years',
      salary: '₹6-10 LPA',
      status: 'Active',
      description: 'We are seeking a creative UI/UX Design Mentor to guide students through design thinking processes and help them build impressive portfolios.',
      requirements: [
        'Strong portfolio in UI/UX design',
        'Proficiency in Figma, Adobe Creative Suite',
        'Experience in user research and testing',
        'Understanding of design systems',
        'Passion for teaching design principles'
      ],
      responsibilities: [
        'Conduct design workshops and critiques',
        'Guide students in portfolio development',
        'Teach design thinking methodologies',
        'Provide feedback on student projects',
        'Organize design challenges and competitions'
      ]
    },
    {
      id: 4,
      title: 'Placement Coordinator',
      department: 'Career Services',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹5-8 LPA',
      status: 'Active',
      description: 'Help our students achieve their career goals by coordinating with hiring partners and providing placement support.',
      requirements: [
        'Experience in recruitment or HR',
        'Strong network in IT industry',
        'Excellent communication and negotiation skills',
        'Understanding of technical roles and requirements',
        'Results-driven approach'
      ],
      responsibilities: [
        'Build relationships with hiring partners',
        'Coordinate interview processes',
        'Provide career counseling to students',
        'Organize job fairs and networking events',
        'Track and report placement metrics'
      ]
    },
    {
      id: 5,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹4-7 LPA',
      status: 'Active',
      description: 'Drive our digital marketing efforts to reach aspiring IT professionals and promote our training programs.',
      requirements: [
        'Experience in digital marketing and SEO',
        'Knowledge of Google Ads, Facebook Ads',
        'Content creation and social media management',
        'Analytics and performance tracking',
        'Creative thinking and problem-solving'
      ],
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media presence',
        'Create engaging content for various platforms',
        'Analyze campaign performance and optimize',
        'Collaborate with design team on marketing materials'
      ]
    },
    {
      id: 6,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹7-12 LPA',
      status: 'Filled',
      description: 'Oversee daily operations and ensure smooth delivery of our training programs across all models.',
      requirements: [
        'Experience in operations management',
        'Strong organizational and leadership skills',
        'Experience in EdTech or service industry',
        'Process improvement mindset',
        'Excellent problem-solving abilities'
      ],
      responsibilities: [
        'Manage day-to-day operations',
        'Coordinate between different departments',
        'Implement process improvements',
        'Ensure quality standards are met',
        'Handle escalations and resolve issues'
      ]
    }
  ];

  const activeJobs = jobOpenings.filter(job => job.status === 'Active');

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
    alert('Application submitted successfully! We will get back to you soon.');
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });
    setSelectedJob(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData({
        ...applicationData,
        resume: e.target.files[0]
      });
    }
  };

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths and skill development opportunities'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based rewards and recognition programs'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative and inclusive work environment'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Be part of a mission to transform careers and lives. Join Ferilion Labs and help 
              shape the future of IT education while growing your own career.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5" />
                <span>{activeJobs.length} Open Positions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Growing Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Great Benefits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's passionate about education, innovation, and making a real impact 
              on people's careers and lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and find the perfect role that matches your skills and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={job.id} className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${job.status === 'Filled' ? 'opacity-60' : ''}`}>
                {/* Job Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600">{job.department}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      job.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {job.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>

                {/* Job Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{job.description}</p>

                  {selectedJob === job.id ? (
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {job.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-3 pt-4">
                        <button
                          onClick={() => setSelectedJob(null)}
                          className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                        >
                          Show Less
                        </button>
                        {job.status === 'Active' && (
                          <button
                            onClick={() => {
                              setApplicationData({...applicationData, position: job.title});
                              document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all"
                          >
                            Apply Now
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setSelectedJob(job.id)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                      >
                        View Details
                      </button>
                      {job.status === 'Active' && (
                        <button
                          onClick={() => {
                            setApplicationData({...applicationData, position: job.title});
                            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all"
                        >
                          Apply Now
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Apply for a Position</h2>
            <p className="text-xl text-gray-600">
              Ready to join our team? Fill out the application form below and we'll get back to you soon.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={applicationData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={applicationData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applied For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={applicationData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a position</option>
                    {activeJobs.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={applicationData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-7">5-7 years</option>
                  <option value="7+">7+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  required
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Why do you want to join us?
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={6}
                  value={applicationData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Tell us about yourself, your experience, and why you want to join Ferilion Labs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Submit Application</span>
              </button>

              <div className="text-center text-sm text-gray-500">
                By submitting this application, you agree to our privacy policy and terms of service.
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Join a Growing Company</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Be part of our success story and help us reach even greater heights.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years of Growth</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;