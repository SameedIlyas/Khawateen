import { Mission } from './Mission';
import { TeamMember } from './TeamMember';

export function About() {
  const team = [
    {
      name: 'Sameed Ilyas',
      role: 'Co-Founder',
      description: 'Passionate about empowering rural women through technology',
      image: '/avatar.png'
    },
    {
      name: 'Muhammad Taha Salaar',
      role: 'Co-Founder',
      description: 'Expert in building and nurturing entrepreneurial communities',
      image: '/avatar.png'
    },
    {
      name: 'Muhammad Zain',
      role: 'Co-Founder',
      description: 'Dedicated to making technology accessible to all',
      image: '/avatar.png'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-teal-600 text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-600 to-transparent opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering rural women entrepreneurs through technology, community, and support
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <Mission />

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal-700 mb-8">Our Story</h2>
            <p className="text-gray-700 mb-6">
              PLACEHOLDER began with a simple observation: talented women entrepreneurs in rural areas faced significant barriers to growing their businesses. Limited access to markets, technology, and business networks held back their potential.
            </p>
            <p className="text-gray-700 mb-6">
              Founded in 2024, we set out to bridge these gaps by creating a platform that combines e-commerce capabilities with educational resources and mentorship opportunities. Our goal is to empower rural women entrepreneurs to reach their full potential.
            </p>
            <p className="text-gray-700">
              Today, PLACEHOLDER serves thousands of entrepreneurs across Pakistan, helping them build successful businesses and contribute to their local economies.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-700 text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
