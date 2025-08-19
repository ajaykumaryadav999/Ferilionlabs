import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Bot } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Message, UserProfile } from '../Type/chatbot';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // When the chat window opens and there are no messages, display the initial greeting.
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "Hi! I am AI assistant. Welcome to Ferilion Lab! 🎓",
          [
            "About Us",
            "About Model",
            "About Pricing",
            "Connect with Us",
            "What course is suitable for you?"
          ]
        );
      }, 500);
    }
  }, [isOpen]); // Reruns when isOpen changes.

  useEffect(() => {
    // Event listener for custom option clicks from ChatMessage component.
    const handleOptionClick = (e: CustomEvent) => {
      handlePredefinedResponse(e.detail);
    };

    window.addEventListener('chatbot-option-click', handleOptionClick as EventListener);
    // Cleanup: remove event listener on unmount.
    return () => window.removeEventListener('chatbot-option-click', handleOptionClick as EventListener);
  }, [userProfile]); // Reruns if userProfile changes, ensuring latest profile is used.

  useEffect(() => {
    // Scroll to the bottom of the chat window whenever messages change.
    scrollToBottom();
  }, [messages]); // Reruns when messages array changes.

  // Function to scroll the chat messages to the latest message.
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Adds a new message to the chat state.
  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(), // Unique ID for the message
      text,
      isBot,
      timestamp: new Date(),
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Adds a bot message with a typing indicator and a simulated delay.
  const addBotMessage = (text: string, options?: string[]) => {
    setIsLoading(true); // Set loading state to true.
    
    // Add a typing indicator message to the chat.
    const typingMessage: Message = {
      id: 'typing-' + Date.now(),
      text: '',
      isBot: true,
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);
    scrollToBottom(); // Scroll to the typing indicator.

    // Simulate typing delay before showing the actual message.
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => !msg.isTyping)); // Remove typing indicator.
      addMessage(text, true, options); // Add the actual bot message.
      setIsLoading(false); // Set loading state to false.
    }, 1000); // Adjust delay as needed for a natural typing effect.
  };

  // Handles predefined user responses based on selected options.
  const handlePredefinedResponse = (option: string) => {
    addMessage(option, false); // Display user's selected option in the chat.

    // Use a small timeout to allow the user message to render before bot responds.
    setTimeout(() => {
      switch (option) {
        case "About Us":
          addBotMessage(
            "Ferilion Lab is a cutting-edge education platform dedicated to providing high-quality technical and professional courses. We specialize in bridging the gap between academic learning and industry requirements through hands-on training and expert mentorship."
          );
          break;

        case "About Model":
          addBotMessage(
            "Our AI-powered learning model adapts to your pace and learning style. We use advanced algorithms to personalize your learning journey, provide real-time feedback, and recommend the most suitable courses based on your goals and current skill level."
          );
          break;

        case "About Pricing":
          addBotMessage(
            "We offer flexible pricing plans:\n\n• Basic Plan: ₹999/month - Access to fundamental courses\n• Pro Plan: ₹1999/month - All courses + mentorship\n• Enterprise: ₹4999/month - Custom training + certification\n\nAll plans include 24/7 support and lifetime access to completed courses.",
            ["View detailed pricing", "Contact sales team"]
          );
          break;

        case "Connect with Us":
          addBotMessage(
            "Ready to connect? Here are the ways to reach us:\n\n📧 Email: contact@ferilionlab.com\n📞 Phone: +91-9876543210\n💬 WhatsApp: +91-9876543210\n🌐 Website: www.ferilionlab.com\n\nOur team is available 24/7 to assist you!",
            ["Schedule a call", "Send an email", "WhatsApp us"]
          );
          break;

        case "What course is suitable for you?":
          addBotMessage(
            "Great question! Let me help you find the perfect course. What domain interests you the most?",
            ["Technical", "Semi-Technical", "Non-Technical"]
          );
          break;

        case "Technical":
          setUserProfile(prev => ({ ...prev, domain: 'technical' }));
          addBotMessage(
            "Excellent choice! Technical courses are in high demand. What programming skills do you currently have or want to learn?",
            ["Java", "Python", "Web Development", "Data Science", "Mobile Development", "DevOps", "I'm a beginner"]
          );
          break;

        case "Semi-Technical":
          setUserProfile(prev => ({ ...prev, domain: 'semi-technical' }));
          addBotMessage(
            "Perfect! Semi-technical roles are great for bridging business and technology. Here are some excellent options:",
            ["Digital Marketing", "Data Analytics", "Project Management", "UI/UX Design", "Product Management", "Quality Assurance"]
          );
          break;

        case "Non-Technical":
          setUserProfile(prev => ({ ...prev, domain: 'non-technical' }));
          addBotMessage(
            "Great choice! We have excellent non-technical courses that can boost your career:",
            ["Business Communication", "Leadership & Management", "Finance & Accounting", "Human Resources", "Sales & Marketing", "Entrepreneurship"]
          );
          break;

        case "Java":
        case "Python":
        case "Web Development":
        case "Data Science":
        case "Mobile Development":
        case "DevOps":
          setUserProfile(prev => ({ ...prev, skills: [...(prev.skills || []), option] }));
          // Trigger Flowise query with updated profile for personalized course recommendations.
          handleFlowiseQuery(`I am interested in ${option}. Can you tell me more about courses in this area, considering my profile?`);
          break;

        case "I'm a beginner":
          setUserProfile(prev => ({ ...prev, skills: [...(prev.skills || []), 'beginner'] }));
          // Trigger Flowise query for beginner learning paths.
          handleFlowiseQuery("I am a beginner in programming. What is the best learning path for me?");
          break;

        case "Tell me more about courses":
          handleFlowiseQuery("Can you provide more details about the recommended courses based on my interests?");
          break;

        case "Connect with advisor":
          addBotMessage("Please provide your email and phone number so we can connect you with a course advisor.");
          break;

        case "Explore other skills":
          addBotMessage(
            "Sure, what other skills or domains are you interested in exploring?",
            ["Technical", "Semi-Technical", "Non-Technical"]
          );
          break;
        
        case "View detailed pricing":
        case "Contact sales team":
        case "Schedule a call":
        case "Send an email":
        case "WhatsApp us":
        case "Yes, enroll me!":
        case "Tell me more": // For beginner path
        case "I want to explore first": // For beginner path
        case "Ask something else": // From Flowise fallback
          // These options can trigger specific Flowise queries or direct responses.
          // Sending the option directly to Flowise allows the backend to interpret it.
          handleFlowiseQuery(option);
          break;


        default:
          // For any other queries not explicitly handled by predefined responses,
          // connect to the Flowise backend for AI-driven answers.
          handleFlowiseQuery(option);
          break;
      }
    }, 800); // Small delay for better user experience.
  };

  // Handles queries by sending them to the Flowise backend.
  const handleFlowiseQuery = async (query: string) => {
    setIsLoading(true); // Set loading state to true.

    // Add typing indicator immediately for Flowise response.
    const typingMessage: Message = {
      id: 'typing-' + Date.now(),
      text: '',
      isBot: true,
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);
    scrollToBottom(); // Scroll to the typing indicator.

    try {
      // Data structure to send to your Flowise backend.
      const dataToSend = {
        question: query,
        overrideConfig: {
          userProfile: userProfile, // Pass the current user profile for personalization.
        },
        // Send a simplified chat history to Flowise for context.
        history: messages.filter(msg => !msg.isTyping).map(msg => ({
            type: msg.isBot ? 'apiMessage' : 'userMessage',
            message: msg.text
        }))
      };

      // Make the fetch call to your Flowise prediction endpoint.
      const response = await fetch(
          "https://cloud.flowiseai.com/api/v1/prediction/1df8c3b4-1271-4ef7-a34f-bd7bd9a62f09",
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(dataToSend)
          }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Remove typing indicator.
      setMessages(prev => prev.filter(msg => !msg.isTyping));

      // Add the actual response from Flowise to the chat.
      // Assuming Flowise response has a 'text' property containing the AI's reply.
      addMessage(result.text, true); 

    } catch (error) {
      console.error("Error calling Flowise:", error);
      // Remove typing indicator if an error occurs.
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      
      addBotMessage("I apologize, but I'm having trouble accessing that information right now. Please try again later or contact our support team directly.");
    } finally {
      setIsLoading(false); // Ensure loading state is reset.
    }
  };

  // Handles user messages from the input field.
  const handleUserMessage = (text: string) => {
    addMessage(text, false); // Display user's message.
    
    // Check if it's a common query that can be handled locally by predefined responses.
    const lowerText = text.toLowerCase();
    if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('fee')) {
      handlePredefinedResponse("About Pricing");
    } else if (lowerText.includes('contact') || lowerText.includes('connect') || lowerText.includes('support')) {
      handlePredefinedResponse("Connect with Us");
    } else if (lowerText.includes('about') && lowerText.includes('us')) {
      handlePredefinedResponse("About Us");
    } else if (lowerText.includes('course') || lowerText.includes('learn') || lowerText.includes('program')) {
      handlePredefinedResponse("What course is suitable for you?");
    } else {
      // If not a predefined query, send it to Flowise for AI processing.
      handleFlowiseQuery(text);
    }
  };

  return (
    <>
      {/* Chat Button: Toggles the chat window open/closed */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-in"
        >
          {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <MessageCircle size={20} className="sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Chat Window: Conditionally rendered based on isOpen state */}
      {isOpen && (
        <div className="fixed bottom-16 right-2 left-2 sm:bottom-24 sm:right-6 sm:left-auto w-auto sm:w-96 h-80 sm:h-96 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl z-50 animate-scale-up overflow-hidden flex flex-col">
          {/* Header of the chat window */}
          <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 sm:p-4 border-b border-white border-opacity-30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-1.5 sm:p-2">
                  <Bot className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">Ferilion Assistant</h3>
                  <p className="text-blue-100 text-xs hidden sm:block">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-200 transition-colors p-1"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container: Displays all chat messages */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gradient-to-b from-transparent to-white to-opacity-10"
          >
            {messages.map((message, index) => (
              <ChatMessage
                key={message.id}
                message={message}
                animation={index % 2 === 0 ? 'slideIn' : 'fadeIn'} // Apply alternating animations
              />
            ))}
            <div ref={messagesEndRef} /> {/* Reference for scrolling to bottom */}
          </div>

          {/* Input Component: For user to type messages */}
          <ChatInput onSendMessage={handleUserMessage} disabled={isLoading} />
        </div>
      )}
    </>
  );
};

export default Chatbot;
