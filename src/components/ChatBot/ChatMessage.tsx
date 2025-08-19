import React from 'react';
import { Message, AnimationType } from '../Type/chatbot';

interface ChatMessageProps {
  message: Message;
  animation: AnimationType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, animation }) => {
  const animationClasses = {
    slideIn: 'animate-slide-in',
    fadeIn: 'animate-fade-in',
    scaleUp: 'animate-scale-up',
    bounceIn: 'animate-bounce-in',
    flipIn: 'animate-flip-in'
  };

  return (
    <div
      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-2 sm:mb-4 ${animationClasses[animation]}`}
    >
      <div
        className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-2xl shadow-lg ${
          message.isBot
            ? 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none'
        }`}
      >
        {message.isTyping ? (
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          </div>
        ) : (
          <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
        )}
        
        {message.options && (
          <div className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
            {message.options.map((option, index) => (
              <button
                key={index}
                className="block w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-xs sm:text-sm text-blue-700 transition-colors duration-200 hover:scale-105 transform border border-blue-100"
                onClick={() => window.dispatchEvent(new CustomEvent('chatbot-option-click', { detail: option }))}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
