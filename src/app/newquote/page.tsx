'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from "../libs/pages-routes";
import { useAuth } from "@/app/providers/AppProvider";

const QuoteForm = () => {
  const [quoteText, setQuoteText] = useState("If at first you don't succeed, try, try again.");
  const [image, setImage] = useState<string | null>(null);
  const [textColor, setTextColor] = useState<string>('#000000'); // Default color is black

  const router = useRouter();

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
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
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
  };

  const handleBackClick = () => {
    router.push(PAGE_ROUTES.QUOTE_LIST);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Main Container */}
      <div className="border rounded-lg p-8 bg-white shadow-xl w-full max-w-md md:max-w-lg lg:max-w-2xl relative">

        {/* Back Button */}
        <button
          className="absolute top-2 left-2 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          onClick={handleBackClick}
        >
          Back
        </button>

        {/* Image with Quote Text */}
        <div className="bg-gray-200 p-2 rounded-lg mb-6 mt-10"> {/* Adjusted top margin for space */}
          <div className="relative">
            {/* Background image */}
            {/* Background image */}
            <img
              src={image || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNlYXxlbnwwfHx8fDE2NTI4NTk1MDg&ixlib=rb-1.2.1&q=80&w=1080"} // Direct image URL from Unsplash
              alt="Quote Background"
              className="rounded-lg w-full h-40 object-cover bg-white" // Set height to align with QuoteList
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
            className="w-full border border-gray-300 p-2 rounded-lg shadow-md bg-white"
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

          {/* Custom button/label for file input */}
          <label
            htmlFor="file-upload"
            className="w-full bg-yellow-200 p-2 rounded-lg text-center cursor-pointer shadow-md hover:bg-yellow-300 transition duration-300 inline-block text-black"
          >
            Choose Image
          </label>

          {/* Hidden file input */}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
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
