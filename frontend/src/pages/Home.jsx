import { ArrowRight, ShoppingBag, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section
        className="relative bg-teal-800 text-white py-20 px-4 sm:px-8 md:px-12"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1581093588401-cad28caefb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Building Bridges for Rural Women Entrepreneurs
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Access training, mentorship, and market opportunities to scale your business to new heights.
          </p>
          <Link
            to="/marketplace"
            className="inline-flex items-center bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg transform transition-transform hover:scale-105 hover:shadow-lg"
          >
            Join the Movement
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-teal-900">
          Our Services at a Glance
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-teal-50 transform transition-transform hover:scale-105 hover:shadow-lg">
            <ShoppingBag className="mx-auto mb-4 text-teal-600" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-teal-900">Marketplace Access</h3>
            <p className="text-teal-700">
              Reach national and global customers through our user-friendly digital marketplace.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-teal-50 transform transition-transform hover:scale-105 hover:shadow-lg">
            <Star className="mx-auto mb-4 text-teal-600" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-teal-900">Training Programs</h3>
            <p className="text-teal-700">
              Enhance your entrepreneurial skills with curated workshops and certification programs.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-teal-50 transform transition-transform hover:scale-105 hover:shadow-lg">
            <Users className="mx-auto mb-4 text-teal-600" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-teal-900">Personalized Mentorship</h3>
            <p className="text-teal-700">
              Collaborate with industry experts to navigate challenges and scale your enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-teal-900">
            Inspiring Stories from Pakistan
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Success Story */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                src="https://images.pexels.com/photos/28255125/pexels-photo-28255125/free-photo-of-c-vitamin-serum.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Ayesha's Organic Products"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-teal-900">
                Ayesha's Journey to Organic Success
              </h3>
              <p className="text-teal-700">
                Discover how Ayesha built her organic skincare brand, empowering women in her community along the way.
              </p>
              <a
                href="https://www.dawn.com/news/1621234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 font-semibold hover:underline mt-2 block"
              >
                Read Full Story
              </a>
            </div>

            {/* Second Success Story */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2892373/pexels-photo-2892373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Zainab's Handwoven Crafts"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-teal-900">
                Zainab's Revival of Handwoven Crafts
              </h3>
              <p className="text-teal-700">
                Learn how Zainab preserved traditional weaving techniques while creating jobs for rural artisans.
              </p>
              <a
                href="https://www.thenews.com.pk/tns/detail/673800"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 font-semibold hover:underline mt-2 block"
              >
                Read Full Story
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
