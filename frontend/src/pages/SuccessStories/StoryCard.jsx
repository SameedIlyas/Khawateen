import React from 'react';

function StoryCard({ story }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
      <a
        href={story.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg"
      >
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-60 object-cover rounded-t-lg"
        />
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-teal-800 mb-4">{story.title}</h2>
          <div className="flex items-center mb-4">
            <img
              src={story.entrepreneur.avatar}
              alt={story.entrepreneur.name}
              className="w-16 h-16 rounded-full mr-4 border-2 border-teal-200"
            />
            <div>
              <p className="font-medium text-teal-800">{story.entrepreneur.name}</p>
              <p className="text-sm text-teal-500">{story.entrepreneur.business}</p>
            </div>
          </div>
          <p className="text-gray-600 text-lg mb-4">{story.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-teal-100 text-teal-700 text-sm px-4 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}

export default StoryCard;
