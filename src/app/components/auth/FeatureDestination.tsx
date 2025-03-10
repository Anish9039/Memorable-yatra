import React from 'react'

function FeatureDestination() {
  return (
    <section className="py-16 bg-blue-50" id="destinations">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s=${item}`}
              alt="Destination"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Destination {item}</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">From $999</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FeatureDestination
