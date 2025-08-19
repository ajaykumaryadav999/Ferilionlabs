export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
  isTyping?: boolean; // For typing indicator
}

export interface UserProfile {
  domain?: string;
  skills?: string[];
  // Add more profile fields as needed
}

export type AnimationType = 'slideIn' | 'fadeIn' | 'scaleUp' | 'bounceIn' | 'flipIn';