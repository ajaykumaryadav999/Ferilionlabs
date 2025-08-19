import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Briefcase, Award, Heart, Users, TrendingUp, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=400',
      bio: '15+ years experience in IT industry and education'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Training',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?w=400',
      bio: 'Ex-Google engineer with passion for teaching'
    },
    {
      name: 'Arun Patel',
      role: 'Placement Director',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=400',
      bio: 'Corporate relations expert with 1000+ placements'
    },
    {
      name: 'Sneha Reddy',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400',
      bio: 'Operations specialist ensuring smooth learning experience'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-300 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Ferilion Labs</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming careers through innovative IT training with a focus on practical skills 
              and real-world application. We don't just teach – we prepare you for success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Motive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Motive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach focuses on building survival skills that matter in the real world, 
              not just interview skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 rounded-full p-3 mt-1">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">90% Survival-Focused Training</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We prioritize teaching you skills that help you survive and excel in real work environments. 
                    Our curriculum is designed based on actual industry requirements and challenges professionals 
                    face daily. This includes problem-solving, critical thinking, and practical application of concepts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary-100 rounded-full p-3 mt-1">
                  <Briefcase className="h-8 w-8 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">10% Job-Focused</h3>
                  <p className="text-gray-600 leading-relaxed">
                    While getting a job is important, we believe that surviving and thriving in that job is more crucial. 
                    Our job-focused training includes interview preparation, resume building, and soft skills development 
                    to ensure you not only get placed but also grow in your career.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-100 rounded-full p-3 mt-1">
                  <Award className="h-8 w-8 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Capstone Projects</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every student works on real-world projects that simulate actual work environments. 
                    These capstone projects are based on current industry scenarios and provide hands-on 
                    experience with the tools and technologies used by leading companies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gr0 to-gray-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Training Philosophy</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Learn by doing, not just by watching</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                    <span>Focus on practical skills over theoretical knowledge</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full"></div>
                    <span>Continuous mentorship and career guidance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Industry-relevant curriculum updated regularly</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-primary-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600">100%</div>
                  <div className="text-sm text-gray-600">Practical Learning</div>
                </div>
                <div className="text-center bg-secondary-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-secondary-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  To empower individuals with practical IT skills and provide them with dignity, 
                  financial stability, work-life balance, and sustainable career growth opportunities.
                </p>
                <div className="bg-primary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">CSR Initiative</h4>
                  <p className="text-sm">
                    We dedicate 5% of our resources to provide free training to underprivileged 
                    individuals, ensuring everyone has access to quality IT education.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Provide dignity through skill development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Ensure financial stability for our students</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Promote healthy work-life balance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-secondary-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  To become the leading IT training institute that transforms lives through 
                  practical education, creating a skilled workforce ready for the future of technology.
                </p>
                <div className="bg-secondary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Future Goals</h4>
                  <p className="text-sm">
                    Expand our reach globally while maintaining our core values of practical, 
                    survival-focused training that genuinely prepares students for real-world challenges.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                    <span>Global reach with local impact</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                    <span>Continuous innovation in teaching methods</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                    <span>Building a community of successful professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of industry experts and passionate educators are committed 
              to your success and career transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section className="py-20 bg-gradient-to-r  from-blue-300 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and student success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Successful Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Success Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your career with our proven methodology? 
            Start your journey with a free consultation session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-300 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-50 hover:to-blue-500 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/courses"
              className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;