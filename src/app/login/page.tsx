'use client';

import { useAuth } from "@/app/providers/AuthProvider";
import React, { FormEvent, useEffect, useState } from "react";
import { PAGE_ROUTES } from "@/app/libs/pages-routes";
import { usePathname, useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const { handleLogin, token } = useAuth();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !otp) return;

    try {
      handleLogin({ username, otp });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token && PAGE_ROUTES.LOGIN === pathname) {
      router.replace(PAGE_ROUTES.QUOTE_LIST);
    }
  }, [token, pathname, router]);

  return (
    <article className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="border rounded-lg p-10 bg-white shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <p className="bg-blue-500 text-white text-3xl font-bold p-4 rounded-md shadow-md">
            Welcome to Kutumb
          </p>
          <p className="bg-blue-100 text-gray-700 text-lg mt-4 p-3 rounded-md shadow-sm">
            Your daily quote companion
          </p>
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
              className="input bg-white input-bordered rounded-md mt-2 p-3 text-lg text-gray-700 focus:ring-blue-400 border border-gray-300"
              autoComplete="username"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-semibold text-lg text-gray-700">OTP</span>
            <input
              value={otp ?? ''}
              type="password"
              placeholder="****"
              className="input bg-white input-bordered rounded-md mt-2 p-3 text-lg text-gray-700 focus:ring-blue-400 border border-gray-300"
              autoComplete="current-password"
              onChange={(e) => setOtp(String(e.target.value))}
            />
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold rounded-md py-3 mt-6 w-full hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </article>
  );
};

export default LoginPage;
