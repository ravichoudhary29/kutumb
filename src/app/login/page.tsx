import React from "react";

const LoginPage = () => {
  return (
    <article className="flex justify-center items-center min-h-screen">
      <div className="border rounded-lg p-8 bg-white shadow-lg w-80">
        {/* Heading Section */}
        <div className="text-center mb-6">
          <p className="bg-yellow-200 text-xl font-semibold p-2 rounded-md">Welcome to Kutumb</p>
          <p className="bg-pink-200 text-md mt-2 p-2 rounded-md">Your daily quote companion</p>
        </div>
        {/* Form Section */}
        <form className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="font-semibold">USERNAME</span>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered rounded-md mt-1 p-2"
              defaultValue="sandy"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-semibold">OTP</span>
            <input
              type="password"
              placeholder="****"
              className="input input-bordered rounded-md mt-1 p-2"
            />
          </label>
          <button className="btn btn-primary rounded-md mt-4 w-full">SUBMIT</button>
        </form>
      </div>
    </article>
  );
};

export default LoginPage;
