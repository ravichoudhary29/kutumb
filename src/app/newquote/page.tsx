'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";

const QuoteForm = () => {
  const [quoteText, setQuoteText] = useState("If at first you don't succeed, try, try again.");
  const [image, setImage] = useState<string | null>(null);
  const [textColor, setTextColor] = useState<string>('#000000'); // Default color is black

  // Color options array
  const colorOptions = [
    '#FF5733', // Red
    '#33FF57', // Green
    '#3357FF', // Blue
    '#F1C40F', // Yellow
    '#8E44AD', // Purple
    '#E67E22', // Orange
  ];

  // Handle text change with proper typing
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuoteText(e.target.value);
  };

  // Handle image change with proper typing
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining in case no file is selected
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Type assertion since result can be string or ArrayBuffer
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle text color change
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };

  // Handle form submission with proper typing
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Quote submitted:", quoteText);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Main Container */}
      <div className="border rounded-lg p-8 bg-white shadow-xl w-full max-w-md md:max-w-lg lg:max-w-2xl relative">

        {/* Image with Quote Text */}
        <div className="bg-gray-200 p-2 rounded-lg mb-6">
          <div className="relative">
            {/* Background image */}
            <img
              src={image || "/default-image.jpg"} // Default image if none is uploaded
              alt="Quote Background"
              className="rounded-lg w-full h-40 object-cover" // Set height to align with QuoteList
            />
            {/* Quote Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-bold text-center" style={{ color: textColor }}>
                {quoteText}
              </p>
            </div>
            <p className="absolute bottom-2 right-2 text-sm">@ravi12rocks</p>
          </div>
        </div>

        {/* Quote Input Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Your Text</label>
          <input
            type="text"
            value={quoteText}
            onChange={handleTextChange}
            className="w-full border border-gray-300 p-2 rounded-lg shadow-md"
          />
        </div>

        {/* Color Picker Section */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Choose Text Color</label>
          <div className="flex space-x-2 mb-2">
            {/* Default color options */}
            {colorOptions.map((color) => (
              <div
                key={color}
                className="w-8 h-8 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => setTextColor(color)}
              />
            ))}
            {/* Custom color input */}
            <input
              type="color"
              value={textColor}
              onChange={handleColorChange}
              className="w-8 h-8 rounded-full cursor-pointer bg-white text-white"
            />
          </div>

        </div>

        {/* Image Upload Button */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Upload/Change Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full bg-yellow-200 p-2 rounded-lg text-center cursor-pointer shadow-md"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-green-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg w-full hover:bg-green-500 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
