import React from "react";

const QuoteList = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Main Container */}
      <div className="border rounded-lg p-8 bg-white shadow-xl w-full max-w-md md:max-w-lg lg:max-w-2xl relative">
        {/* Title Section */}
        <div className="text-center mb-8">
          <p className="bg-yellow-300 text-3xl font-bold p-4 rounded-md shadow-md">
            Quote List
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {/* Quote 1 */}
          <div className="bg-pink-200 p-6 rounded-lg text-center flex flex-col justify-center shadow-md h-40 md:h-48 lg:h-56">
            <p className="font-medium text-lg">Just one small positive thought in the morning can change your whole day.</p>
            <p className="mt-2 text-sm font-semibold">@ravi12rocks</p>
          </div>

          {/* Quote 2 */}
          <div className="bg-blue-200 p-6 rounded-lg text-center flex flex-col justify-center shadow-md h-40 md:h-48 lg:h-56">
            <p className="font-medium text-lg">Opportunities don't happen, you create them.</p>
            <p className="mt-2 text-sm font-semibold">@chandanch</p>
          </div>

          {/* Quote 3 */}
          <div className="bg-purple-200 p-6 rounded-lg text-center flex flex-col justify-center shadow-md h-40 md:h-48 lg:h-56">
            <p className="font-medium text-lg">Love your family, work super hard, live your passion.</p>
            <p className="mt-2 text-sm font-semibold">@shivanijais</p>
          </div>

          {/* Quote 4 */}
          <div className="bg-indigo-200 p-6 rounded-lg text-center flex flex-col justify-center shadow-md h-40 md:h-48 lg:h-56">
            <p className="font-medium text-lg">It is never too late to be what you might have been.</p>
            <p className="mt-2 text-sm font-semibold">@pujasah</p>
          </div>
        </div>

        {/* Floating Create Quote Button at the Bottom */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <button className="bg-green-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-500 transition duration-300">
            Create Quote +
          </button>
        </div>

        {/* Arrows Section */}
        <div className="flex justify-between items-center mt-8">
          <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 shadow-md transition duration-300">
            <span className="text-lg">&larr;</span>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 shadow-md transition duration-300">
            <span className="text-lg">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteList;
