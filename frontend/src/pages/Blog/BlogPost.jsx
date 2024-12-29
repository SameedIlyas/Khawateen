import React from 'react';

export function BlogPost({ post }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <span className="bg-teal-200 text-teal-800 px-3 py-1 rounded-full">{post.category}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span>{post.date}</span>
        </div>

        {/* Title with link */}
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-teal-800 hover:text-teal-600 block"
        >
          <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
        </a>

        <p className="text-gray-700 mb-4">{post.excerpt}</p>

        <div className="flex items-center">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="font-medium text-teal-800">{post.author.name}</p>
            <p className="text-sm text-gray-500">{post.author.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
