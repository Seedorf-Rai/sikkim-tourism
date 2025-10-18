import React, { useState, useRef, useEffect } from "react";
import "./ChatBot.css";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 Welcome to Sikkim Diaries. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Tour packages",
    "Nathula Pass info",
    "Booking details",
    "Contact info",
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Tour packages
    if (lowerMessage.includes("tour") || lowerMessage.includes("package")) {
      return "We offer various tour packages including:\n• Nathula Sharing Tour (1 Day)\n• Gangtok & Lachung packages\n• Customized tours\n\nWould you like more details about any specific tour?";
    }

    // Nathula Pass
    if (lowerMessage.includes("nathula")) {
      return "Nathula Pass is at 14,140 ft on the Indo-China border! 🏔️\n\nOur 1-day sharing tour includes:\n✓ Tsomgo Lake visit\n✓ Baba Mandir\n✓ All permits included\n✓ Shared vehicle from Gangtok\n\nInterested in booking?";
    }

    // Booking
    if (lowerMessage.includes("book") || lowerMessage.includes("reserve")) {
      return "To book a tour:\n1. Click the 'Book Now' button on the tour page\n2. Or WhatsApp us at +91 6295 198 565\n3. Or email: hello@sikkimdiaries.com\n\nWe'll respond within 30 minutes! 📞";
    }

    // Price
    if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("rate")
    ) {
      return "Our prices vary by season and tour type. For the most accurate pricing:\n• Contact us directly\n• WhatsApp: +91 6295 198 565\n• Email: hello@sikkimdiaries.com\n\nWe offer competitive rates and special discounts! 💰";
    }

    // Contact
    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("phone") ||
      lowerMessage.includes("email")
    ) {
      return "📞 Contact Us:\n• Phone: +91 6295 198 565\n• Email: hello@sikkimdiaries.com\n• Address: Yuksom Bazar, West Sikkim\n\nWe're available 24/7 for your queries!";
    }

    // Permit
    if (lowerMessage.includes("permit")) {
      return "Yes, permits are required for Nathula Pass! ✅\n\nDon't worry - our package includes:\n• All necessary permits\n• Processing handled by us\n• You just need your original ID\n\nWe take care of everything!";
    }

    // Weather/Best time
    if (
      lowerMessage.includes("weather") ||
      lowerMessage.includes("best time") ||
      lowerMessage.includes("season")
    ) {
      return "🌤️ Best time to visit:\n• October to May: Clear weather, best views\n• December to February: Snowfall season ❄️\n• June to September: Monsoon (roads may be tricky)\n\nNathula is closed on Mondays & Tuesdays.";
    }

    // Hi/Hello
    if (
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hey")
    ) {
      return "Hello! 😊 Great to hear from you!\n\nI can help you with:\n• Tour information\n• Booking details\n• Permits & requirements\n• Contact information\n\nWhat would you like to know?";
    }

    // Thank you
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're welcome! 😊\n\nFeel free to ask if you have any more questions. Have a wonderful trip to Sikkim! 🏔️";
    }

    // Default response
    return "I'm here to help! I can assist you with:\n• Tour packages & itineraries\n• Nathula Pass information\n• Booking & pricing\n• Contact details\n• Permits & requirements\n\nPlease feel free to ask anything, or contact us directly at +91 6295 198 565 📞";
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className={`chat-button ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span className="chat-badge">1</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <h3>Sikkim Diaries</h3>
                <p className="chat-status">
                  <span className="status-dot"></span>
                  Online
                </p>
              </div>
            </div>
            <button
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${
                  message.sender === "user" ? "message-user" : "message-bot"
                }`}
              >
                <div className="message-bubble">
                  <p className="message-text">{message.text}</p>
                  <span className="message-time">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message message-bot">
                <div className="message-bubble typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="quick-replies">
              <p className="quick-replies-label">Quick options:</p>
              <div className="quick-replies-buttons">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    className="quick-reply-button"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
            />
            <button
              className="send-button"
              onClick={handleSendMessage}
              disabled={isTyping || inputValue.trim() === ""}
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
