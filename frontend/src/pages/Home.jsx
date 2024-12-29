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
            'url(https://media.vaticannews.va/media/content/dam-archive/vaticannews/multimedia/2018/10/10/india%20subir%202aem.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.750.422.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Empowering Rural Women Entrepreneurs Across Pakistan
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Join a supportive community of entrepreneurs and access resources that help grow your business.
          </p>
          <Link
            to="/marketplace"
            className="inline-flex items-center bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg transform transition-transform hover:scale-105 hover:shadow-lg"
          >
            Start Your Journey
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-teal-900">
          How We Empower You
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-teal-50 transform transition-transform hover:scale-105 hover:shadow-lg">
            <ShoppingBag className="mx-auto mb-4 text-teal-600" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-teal-900">Online Marketplace</h3>
            <p className="text-teal-700">
              Sell your products to customers across Pakistan through our intuitive online marketplace.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-teal-50 transform transition-transform hover:scale-105 hover:shadow-lg">
            <Star className="mx-auto mb-4 text-teal-600" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-teal-900">Skill Development</h3>
            <p className="text-teal-700">
              Access free and paid workshops to develop your skills and grow your business acumen.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-teal-50 transform transition-transform hover:scale-105 hover:shadow-lg">
            <Users className="mx-auto mb-4 text-teal-600" size={32} />
            <h3 className="text-xl font-semibold mb-3 text-teal-900">Mentorship</h3>
            <p className="text-teal-700">
              Connect with experienced mentors who can guide you through every stage of your business journey.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-teal-900">
            Success Stories from Our Community
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Success Story */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              <img
                src="https://th.bing.com/th/id/OIP.IUOLzL6DEMeEyhYzE-MRRAHaFj?rs=1&pid=ImgDetMain"
                alt="Fatima's Handicraft Business"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-teal-900">
                From Local Artisan to Online Success
              </h3>
              <p className="text-teal-700">
                Learn how Fatima transformed her traditional handicraft business into a thriving online
                enterprise with the help of our platform.
              </p>
              <a
                href="https://yourstory.com/people/divya-mallick"
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
                src="https://images.yourstory.com/cs/2/b094ec506da611eab285b7ee8106293d/Maavni-1632397419896.jpg?fm=png&auto=format&blur=500"
                alt="Promoting Odisha Handicrafts and Empowering Artisans"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-teal-900">
                Promoting Odisha Handicrafts and Empowering Artisans
              </h3>
              <p className="text-teal-700">
                Discover how a Bhubaneswar-based startup is empowering local artisans while promoting
                traditional handicrafts online.
              </p>
              <a
                href="https://yourstory.com/2021/09/startup-bharat-bhubaneswar-based-ecommerce-startup"
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
