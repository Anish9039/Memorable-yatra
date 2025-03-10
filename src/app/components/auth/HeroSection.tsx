import React from 'react'

function HeroSection() {
  return (
    <div className="relative pt-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl mb-8">Explore the world with expert guides and curated experiences</p>
            <div className="max-w-2xl mx-auto bg-white rounded-full p-2 shadow-lg">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full px-6 py-4 rounded-full text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSection
