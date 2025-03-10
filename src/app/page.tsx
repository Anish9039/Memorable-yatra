// src/components/LandingPage.jsx
import React from 'react';
import NavBar from './components/auth/NavBar';
import HeroSection from './components/auth/HeroSection';
import FeatureDestination from './components/auth/FeatureDestination';
import ServiceSection from './components/auth/ServiceSection';
const LandingPage = () => {
  return (
  <div className="font-sans">
      {/* Navigation */}
      <NavBar/>

      {/* Hero Section */}
  
      <HeroSection/>
      {/* Featured Destinations */}
  
      <FeatureDestination/>
      {/* Services Section */}
      <ServiceSection/>
      {/* Newsletter CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Travel Updates</h2>
          <p className="mb-8">Subscribe to our newsletter for exclusive deals and travel tips</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-700 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">MY</h4>
              <p className="text-gray-400">Making travel experiences unforgettable since 2023</p>
            </div>
            {/* Add more footer columns */}
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>  
  );
};

export default LandingPage;