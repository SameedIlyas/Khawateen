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
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: '2',
      name: 'Imran Khan',
      role: 'mentor',
      location: 'Multan',
      skills: ['Web Development', 'UI/UX Design', 'Creative Coding'],
      bio: 'Creative web developer with a focus on user-centered design and digital experiences.',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: '3',
      name: 'Ayesha Sadiq',
      role: 'mentor',
      location: 'Lahore',
      skills: ['Data Science', 'Machine Learning', 'Artificial Intelligence'],
      bio: 'AI enthusiast helping businesses harness the power of data and machine learning.',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Community Hub</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect with mentors and fellow entrepreneurs to share experiences, get advice, and grow together.
        </p>
      </div>

      <div className="bg-emerald-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Users className="text-emerald-600 mr-2" size={24} />
          <h2 className="text-xl font-semibold">Featured Mentors</h2>
        </div>
        <div className="space-y-4">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white p-4 rounded-lg flex items-start">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold">{mentor.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{mentor.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {mentor.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Connect?</h2>
        <p className="text-gray-600 mb-6">
          Join our community to connect with mentors and fellow entrepreneurs
        </p>
        <a
          href="https://www.linkedin.com/groups/1234567" // Replace with your desired URL
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Improves security when using target="_blank"
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          Join the Community
        </a>
      </div>
    </div>
  );
}
