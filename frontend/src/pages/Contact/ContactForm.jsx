import React, { useState } from 'react';
import { Mail, User, MessageCircle } from 'lucide-react';

export function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading status

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when form is submitted

    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    // Here you can log the form data or handle it however you'd like
    console.log(data);

    // Reset form fields after submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    alert("Message would be sent!");
    
    setLoading(false); // Set loading state to false after request completes
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-teal-800 text-center mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="flex items-center text-lg font-medium text-teal-700">
            <User className="text-teal-500 mr-3" />
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border-teal-300 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 p-3 text-lg"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="flex items-center text-lg font-medium text-teal-700">
            <Mail className="text-teal-500 mr-3" />
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border-teal-300 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 p-3 text-lg"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="flex items-center text-lg font-medium text-teal-700">
            <MessageCircle className="text-teal-500 mr-3" />
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border-teal-300 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 p-3 text-lg"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="text-lg font-medium text-teal-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-2 block w-full rounded-md border-teal-300 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200 p-3 text-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading} // Disable the button if loading is true
          className={`w-full py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${loading ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-600 text-white hover:bg-teal-700 text-lg font-semibold'}`}
        >
          {loading ? 'Sending...' : 'Send Message'} {/* Change button text based on loading state */}
        </button>
      </form>
    </div>
  );
}
