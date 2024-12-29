import React from 'react';

export function Footer() {
    return (
      <footer className="bg-teal-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-teal-200">About Us</h3>
              <p className="text-white-200 text-sm">
                Empowering rural women entrepreneurs through technology, education, and community.
              </p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white-200">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-teal-200 hover:text-teal-400 transition duration-200">About Us</a>
                </li>
                <li>
                  <a href="/contact" className="text-teal-200 hover:text-teal-400 transition duration-200">Contact</a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white-200">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/blog" className="text-teal-200 hover:text-teal-400 transition duration-200">Blog</a>
                </li>
                <li>
                  <a href="/tutorials" className="text-teal-200 hover:text-teal-400 transition duration-200">Tutorials</a>
                </li>
                <li>
                  <a href="/success-stories" className="text-teal-200 hover:text-teal-400 transition duration-200">Success Stories</a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white-200">Languages</h3>
              <ul className="space-y-3">
                <li>
                  <button className="text-teal-200 hover:text-teal-400 transition duration-200">English</button>
                </li>
                <li>
                  <button className="text-teal-200 hover:text-teal-400 transition duration-200">اردو</button>
                </li>
                <li>
                  <button className="text-teal-200 hover:text-teal-400 transition duration-200">پنجابی</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
