import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <div className="py-16 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Contact Us</h1>
          <p className="text-lg text-teal-600 max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you. Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-teal-600 h-6 w-6" />
                <div>
                  <h3 className="font-medium text-teal-700">Address</h3>
                  <p className="text-gray-600">NUST H-12, Islamabad, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-teal-600 h-6 w-6" />
                <div>
                  <h3 className="font-medium text-teal-700">Phone</h3>
                  <p className="text-gray-600">+92 324 9626601</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-teal-600 h-6 w-6" />
                <div>
                  <h3 className="font-medium text-teal-700">Email</h3>
                  <p className="text-gray-600">sameed.scorpius@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-teal-700 mb-4">Office Hours</h2>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-teal-700 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
