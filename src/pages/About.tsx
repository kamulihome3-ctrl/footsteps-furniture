import React from 'react';
import { Award, Users, Truck, Star, MapPin, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-amber-600" />, number: '10,000+', label: 'Happy Customers' },
    { icon: <Award className="w-8 h-8 text-amber-600" />, number: '15+', label: 'Years Experience' },
    { icon: <Truck className="w-8 h-8 text-amber-600" />, number: '500+', label: 'Deliveries Monthly' },
    { icon: <Star className="w-8 h-8 text-amber-600" />, number: '4.9', label: 'Average Rating' },
  ];

  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'We use only the finest materials and employ skilled artisans to create furniture that lasts generations.',
      icon: <Award className="w-12 h-12 text-amber-600" />,
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide personalized service and support throughout your journey.',
      icon: <Users className="w-12 h-12 text-amber-600" />,
    },
    {
      title: 'Sustainable Practices',
      description: 'We are committed to environmental responsibility through sustainable sourcing and eco-friendly processes.',
      icon: <MapPin className="w-12 h-12 text-amber-600" />,
    },
  ];

  const team = [
    {
      name: 'John Mukasa',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'With over 20 years in the furniture industry, John founded Footsteps with a vision to make quality furniture accessible to everyone.',
    },
    {
      name: 'Sarah Namuli',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Sarah leads our design team, bringing innovative and functional designs that blend modern aesthetics with traditional craftsmanship.',
    },
    {
      name: 'David Okello',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'David ensures smooth operations from manufacturing to delivery, maintaining our high standards of quality and service.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Footsteps Furniture
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            For over 15 years, we've been crafting beautiful, functional furniture that transforms houses into homes and offices into inspiring workspaces.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2009 by John Mukasa, Footsteps Furniture Company Limited began as a small workshop in Kampala with a simple mission: to create beautiful, affordable furniture for Ugandan families.
                </p>
                <p>
                  What started with a team of three craftsmen has grown into one of Uganda's leading furniture manufacturers, serving thousands of customers across the country. We've expanded our product range to include everything from home office solutions to complete bedroom sets.
                </p>
                <p>
                  Today, we operate from a modern 10,000 square foot facility, employing over 50 skilled artisans and support staff. Despite our growth, we've never lost sight of our core values: quality, affordability, and exceptional customer service.
                </p>
                <p>
                  Every piece of furniture we create is a testament to our commitment to excellence and our passion for helping our customers create spaces they love.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind Footsteps Furniture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Showroom</h2>
            <p className="text-xl text-gray-600">Experience our furniture in person</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kampala Showroom</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">123 Furniture Street, Kampala, Uganda</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Opening Hours</p>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="tel:+256123456789"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Schedule a Visit
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our showroom"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;