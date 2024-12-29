import React from 'react';
import { Users } from 'lucide-react';

export function Community() {
  const [mentors] = React.useState([
    {
      id: '1',
      name: 'Zainab Ali',
      role: 'mentor',
      location: 'Islamabad',
      skills: ['Leadership', 'Project Management', 'Public Speaking'],
      bio: 'Passionate about helping entrepreneurs build strong teams and leadership skills.',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: '2',
      name: 'Imran Khan',
      role: 'mentor',
      location: 'Multan',
      skills: ['Web Development', 'UI/UX Design', 'Creative Coding'],
      bio: 'Creative web developer with a focus on user-centered design and digital experiences.',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: '3',
      name: 'Ayesha Sadiq',
      role: 'mentor',
      location: 'Lahore',
      skills: ['Data Science', 'Machine Learning', 'Artificial Intelligence'],
      bio: 'AI enthusiast helping businesses harness the power of data and machine learning.',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
  ]);

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
          <Users className="text-teal-600 mr-3" size={30} />
          <h2 className="text-2xl font-semibold text-teal-800">Featured Mentors</h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-teal-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-teal-300"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-teal-800">{mentor.name}</h3>
                  <p className="text-sm text-teal-600">{mentor.location}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{mentor.bio}</p>
              <div className="flex flex-wrap gap-2">
                {mentor.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-teal-800 mb-6">Ready to Connect?</h2>
        <p className="text-gray-600 mb-6">
          Join our community to connect with mentors and fellow entrepreneurs.
        </p>
        <a
          href="https://www.linkedin.com/groups/1234567" // Replace with your desired URL
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Join the Community
        </a>
      </div>
    </div>
  );
}
