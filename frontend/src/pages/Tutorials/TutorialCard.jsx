import { BookOpen, Clock } from 'lucide-react';

export function TutorialCard({ tutorial }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
      <img
        src={tutorial.image}
        alt={tutorial.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
            {tutorial.category}
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-teal-800 mb-2">
          <a
            href={tutorial.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 transition-all duration-200"
          >
            {tutorial.title}
          </a>
        </h3>

        <p className="text-gray-600 mb-4">{tutorial.description}</p>

        <div className="flex items-center text-sm text-gray-500">
          <Clock size={16} className="mr-2 text-teal-500" />
          <span className="mr-4">{tutorial.duration}</span>
          <BookOpen size={16} className="mr-2 text-teal-500" />
          <span>{tutorial.lessons} lessons</span>
        </div>
      </div>
    </div>
  );
}