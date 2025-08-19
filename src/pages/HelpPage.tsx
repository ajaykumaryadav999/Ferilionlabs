import React, { useState } from 'react';
import { 
  Search, ChevronDown, ChevronUp, MessageSquare, Send,
  HelpCircle, BookOpen, Users, Phone, Mail, Clock
} from 'lucide-react';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [queryForm, setQueryForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const categories = ['All', 'Courses', 'Enrollment', 'Payment', 'Technical', 'Placement', 'General'];

  const faqs = [
    { id: 1, category: 'Courses', question: 'What courses do you offer?', answer: 'We offer comprehensive courses...' },
    { id: 2, category: 'Enrollment', question: 'How do I enroll in a course?', answer: 'You can enroll by filling out...' },
    // ... keep all your existing FAQ entries here
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setQueryForm({
      ...queryForm,
      [e.target.name]: e.target.value
    });
  };

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    try {
      const response = await fetch("https://www.formbackend.com/f/fc9bd3aefdd41848", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(queryForm),
      });

      if (response.status === 422) {
        throw new Error("Validation error");
      } else if (!response.ok) {
        throw new Error("Something went wrong");
      }

      await response.json();
      setSuccessMessage("✅ Your query has been submitted successfully! We will get back to you within 24 hours.");
      setQueryForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const supportChannels = [
    { icon: Phone, title: 'Phone Support', description: 'Call us for immediate assistance', contact: '+91 6366548237', hours: 'Mon-Sat: 9 AM - 8 PM', color: 'text-primary-600', bgColor: 'bg-primary-100' },
    { icon: Mail, title: 'Email Support', description: 'Send us your queries via email', contact: 'info@ferilionlabs.com', hours: 'Response within 24 hours', color: 'text-secondary-600', bgColor: 'bg-secondary-100' },
    { icon: MessageSquare, title: 'WhatsApp Chat', description: 'Chat with us instantly', contact: 'WhatsApp Support', hours: 'Available 24/7', color: 'text-green-600', bgColor: 'bg-green-100' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-300 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Help & Support</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Find answers to your questions and get support from our team.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition">
                <div className={`${channel.bgColor} rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
                  <Icon className={`h-8 w-8 ${channel.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <p className="font-medium">{channel.contact}</p>
                <p className="text-sm text-gray-500">{channel.hours}</p>
                {channel.title === 'WhatsApp Chat' && (
                  <a href="https://wa.me/+916366548237" target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    Start Chat
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary-600 hover:text-primary-600'
                }`}>
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow border">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs font-medium">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                  </div>
                  {expandedFAQ === faq.id ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-4 border-t">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p>No FAQs found. Try another search or ask your question below.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Submit Query Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Submit Your Query</h2>
          <form onSubmit={handleQuerySubmit} className="bg-gray-50 rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Your Name *" required
                value={queryForm.name} onChange={handleQueryChange}
                className="w-full px-4 py-3 border rounded-lg" />
              <input type="email" name="email" placeholder="Email Address *" required
                value={queryForm.email} onChange={handleQueryChange}
                className="w-full px-4 py-3 border rounded-lg" />
            </div>

            <select name="subject" required value={queryForm.subject} onChange={handleQueryChange}
              className="w-full px-4 py-3 border rounded-lg">
              <option value="">Select a subject</option>
              <option value="Course Information">Course Information</option>
              <option value="Enrollment Process">Enrollment Process</option>
              <option value="Payment & Pricing">Payment & Pricing</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Placement Assistance">Placement Assistance</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Other">Other</option>
            </select>

            <textarea name="message" rows={6} placeholder="Your Message *" required
              value={queryForm.message} onChange={handleQueryChange}
              className="w-full px-4 py-3 border rounded-lg" />

            <button type="submit" disabled={loading}
              className="w-full bg-gradient-to-r from-blue-300 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2">
              {loading ? 'Submitting...' : (<><Send className="h-5 w-5" /> Submit Query</>)}
            </button>

            {successMessage && (
              <p className="text-center text-sm mt-4">{successMessage}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
