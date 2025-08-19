import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ModelsPage from './pages/ModelsPage';
import ServicesPage from './pages/ServicesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import HelpPage from './pages/HelpPage';
import AdminPortal from './pages/AdminPortal';
import RegistrationPopup from './components/RegistrationPopup';
import ChatBot from '/home/project/src/components/ChatBot/Chatbot.tsx';
function App() {
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds on initial load
    const timer = setTimeout(() => {
      setShowRegistrationPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/models" element={<ModelsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/admin" element={<AdminPortal />} />
          </Routes>
        </main>
        <ChatBot/>
        <Footer />
        

      
        
      </div>
    </Router>
  );
}

export default App;