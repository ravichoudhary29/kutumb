'use client';
import { useAuth } from "@/providers/AppProvider";
import React, { FormEvent, useEffect } from "react";
import { withAuth } from "../hocs/withAuth";
import { PAGE_ROUTES } from "../libs/pages-routes";

const LoginPage = () => {
  const { setIsLogin, isLogin, handleSubmit, setOtp, setUsername, otp, username, token } = useAuth();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

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

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-4">
          <button
            className={`flex-1 py-2 font-semibold rounded-md ${isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 font-semibold rounded-md ${!isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form Section */}
        <form className="flex flex-col space-y-6" onSubmit={onSubmit}>
          <label className="flex flex-col">
            <span className="font-semibold text-lg text-gray-700">USERNAME</span>
            <input
              type="text"
              value={username ?? ''}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="input bg-white input-bordered rounded-md mt-2 p-3 text-lg border-gray-300 focus:ring-2 focus:ring-blue-300"
              autoComplete="username"
            />
          </label>
          {isLogin && (
            <label className="flex flex-col">
              <span className="font-semibold text-lg text-gray-700">OTP</span>
              <input
                value={otp ?? ''}
                type="number"
                placeholder="****"
                className="input bg-white input-bordered rounded-md mt-2 p-3 text-lg border-gray-300 focus:ring-2 focus:ring-blue-300"
                autoComplete="current-password"
                onChange={(e) => setOtp(String(e.target.value))}
              />
            </label>
          )}
          {!isLogin && (
            <label className="flex flex-col">
              <span className="font-semibold text-lg text-gray-700">PASSWORD</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered bg-white rounded-md mt-2 p-3 text-lg border-gray-300 focus:ring-2 focus:ring-blue-300"
                autoComplete="new-password"
              />
            </label>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold rounded-md py-3 mt-6 w-full hover:bg-blue-600 transition duration-300"
          >
            {isLogin ? "LOGIN" : "SIGN UP"}
          </button>
        </form>
      </div>
    </article>
  );
};

// Exclude login page from redirection when the user is not logged in
const LoginWrapper = withAuth(LoginPage, [PAGE_ROUTES.LOGIN]);

export default LoginWrapper;
