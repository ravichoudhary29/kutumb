'use client';

import React, { useState, ChangeEvent, FormEvent, useMemo, useCallback } from "react";
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from "@/app/libs/pages-routes";
import { MEDIA_UPLOAD_URL, QUOTE_POST_URL } from "@/app/utils/consts";
import { useAuth } from "@/app/providers/AuthProvider";
import { withAuth } from "@/app/hocs/withAuth";
import Image from "next/image";

const CreateQuotePage: React.FC = () => {
  const { token } = useAuth();
  const router = useRouter();
  const [quoteText, setQuoteText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuoteText(e.target.value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
  };

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile || quoteText.trim() === "") return;
    try {
      const formData = new FormData();
      formData.append('file', imageFile);
      const response = await fetch(MEDIA_UPLOAD_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': token
        }
      });
      const [{ url }] = await response.json();
      const requestBody = { text: quoteText, mediaUrl: url };
      await fetch(QUOTE_POST_URL, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      });
      router.push(PAGE_ROUTES.QUOTE_LIST);
    } catch (error) {
      console.error(error);
    }
  }, [token, quoteText, imageFile, router]);

  const handleBackClick = () => {
    router.push(PAGE_ROUTES.QUOTE_LIST);
  };

  const imageURL = useMemo(() => imageFile ? URL.createObjectURL(imageFile) : null, [imageFile]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {/* Main Container */}
      <form className="border rounded-lg p-8 bg-white shadow-lg w-full max-w-md md:max-w-lg lg:max-w-2xl relative" onSubmit={handleSubmit}>

        {/* Back Button */}
        <button
          className="absolute top-2 left-2 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={handleBackClick}
        >
          Back
        </button>

        {/* Image with Quote Text */}
        <div className="bg-gray-300 p-2 rounded-lg mb-6 mt-10">
          <div className="relative">
            <Image
              src={imageURL || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNlYXxlbnwwfHx8fDE2NTI4NTk1MDg&ixlib=rb-1.2.1&q=80&w=1080"}
              alt="Quote Background"
              className="rounded-lg w-full h-40 object-cover bg-white"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl font-bold text-center text-white">
                {quoteText}
              </p>
            </div>
          </div>
        </div>

        {/* Quote Input Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Quote Text</label>
          <input
            type="text"
            value={quoteText}
            onChange={handleTextChange}
            className="w-full border border-gray-300 p-2 rounded-lg shadow-md bg-white"
          />
        </div>

        {/* Image Upload Button */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Upload/Change Image
          </label>
          <label
            htmlFor="file-upload"
            className="w-full bg-yellow-300 p-2 rounded-lg text-center cursor-pointer shadow-md hover:bg-yellow-400 transition duration-300 inline-block text-black"
          >
            Choose Image
          </label>
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
            type="submit"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg w-full hover:bg-green-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const CreateQuotePageWrapper = withAuth(CreateQuotePage);

export default CreateQuotePageWrapper;
