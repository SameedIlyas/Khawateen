import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useAuthStore } from '../store/authStore';
import { chat } from '../services/api';

const socket = io('http://localhost:5000'); 

export function Community() {
  const { user } = useAuthStore();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch stored messages on component mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const storedMessages = await chat.getAll();
        setMessages(storedMessages);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };
    fetchMessages();

    // Listen for real-time messages
    socket.on('message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage = {
        username: user?.name || 'Anonymous', // Fallback in case user.name is undefined
        role: user?.role || 'Guest',        // Fallback in case user.role is undefined
        message,
      };
  
      try {
        // Save the message in the database
        const savedMessage = await chat.create(newMessage);
  
        // Send message to the server for real-time updates
        socket.emit('chatMessage', savedMessage);
        setMessage('');
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    }
  };

  // Handle sending message with Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Send message on Enter (without Shift)
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-teal-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-teal-800 mb-4">Community Hub</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Connect with mentors and fellow entrepreneurs to share experiences, get advice, and grow together.
        </p>
      </div>

      <div className="bg-white shadow-lg p-8 rounded-lg mb-12">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-semibold text-teal-800">Live Chat</h2>
        </div>

        <div className="border-t border-teal-200 pt-4">
          <div className="space-y-4 h-96 overflow-y-auto mb-4">
            {/* Chat Messages Container with Scroll */}
            {messages.map((msg, index) => (
              <div key={index} className="flex flex-col mb-2">
                <strong className="text-teal-800">{msg.username} ({msg.role}): </strong>
                <p className="text-gray-600">{msg.message}</p>
              </div>
            ))}
          </div>

          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border border-teal-300 rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}  // Handle Enter key press
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
