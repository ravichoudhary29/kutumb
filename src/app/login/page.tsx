import React from "react";

const LoginPage = () => {
  return (
    <article className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border rounded-lg p-10 bg-white shadow-xl w-full max-w-md md:max-w-lg lg:max-w-xl">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <p className="bg-yellow-300 text-3xl font-bold p-4 rounded-md shadow-md">
            Welcome to Kutumb
          </p>
          <p className="bg-pink-200 text-lg mt-4 p-3 rounded-md shadow-sm">
            Your daily quote companion
          </p>
        </div>

        {/* Form Section */}
        <form className="flex flex-col space-y-6">
          <label className="flex flex-col">
            <span className="font-semibold text-lg text-gray-700">USERNAME</span>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered rounded-md mt-2 p-3 text-lg border-gray-300 focus:ring-2 focus:ring-blue-300"
              defaultValue="sandy"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-semibold text-lg text-gray-700">OTP</span>
            <input
              type="password"
              placeholder="****"
              className="input input-bordered rounded-md mt-2 p-3 text-lg border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
          </label>
          <button className="bg-blue-500 text-white font-semibold rounded-md py-3 mt-6 w-full hover:bg-blue-600 transition duration-300">
            SUBMIT
          </button>
        </form>
      </div>
    </article>
  );
};

export default LoginPage;
