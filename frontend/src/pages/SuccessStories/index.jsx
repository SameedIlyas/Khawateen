import React from 'react';
import StoryCard from './StoryCard';

export function SuccessStories() {
  const stories = [
    {
      id: '1',
      title: 'From Local Artisan to Online Success',
      excerpt: 'How Divya transformed her traditional handicraft business into a thriving online enterprise.',
      content: '',
      image: 'https://th.bing.com/th/id/OIP.IUOLzL6DEMeEyhYzE-MRRAHaFj?rs=1&pid=ImgDetMain',
      entrepreneur: {
        name: 'Divvya Malik',
        business: 'Typof',
        avatar: 'https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_face,z_0.7,b_white,q_auto:eco,dpr_1/b9ipwt3oxe7qucjl2e1u',
      },
      tags: ['Handicrafts', 'E-commerce', 'Rural Business'],
      link: 'https://yourstory.com/people/divya-mallick',
    },
    {
      id: '2',
      title: 'Promoting Odisha handicrafts and empowering artisans',
      excerpt: 'It offers personalised products online, ensuring a consistent income for artisans.',
      content: '',
      image: 'https://images.yourstory.com/cs/2/b094ec506da611eab285b7ee8106293d/Maavni-1632397419896.jpg?fm=png&auto=format&blur=500',
      entrepreneur: {
        name: 'Smaranika Mohapatra',
        business: 'Maavni Designs',
        avatar: 'https://th.bing.com/th/id/OIP.UHLAPVeL5z8pxS1B6y5_BQAAAA?rs=1&pid=ImgDetMain',
      },
      tags: ['Designs', 'Handicrafts', 'Home-based'],
      link: 'https://yourstory.com/2021/09/startup-bharat-bhubaneswar-based-ecommerce-startup',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-700 mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inspiring stories of rural women entrepreneurs who have transformed their businesses through RuralRise
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
