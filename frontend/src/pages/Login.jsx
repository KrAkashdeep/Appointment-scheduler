// import React from 'react'

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="flex justify-center pt-5 position-sticky top-0 z-10 text-4xl">
          Login
        </h1>
        <div className="main w-300  mt-14 h-120 flex ">
          {/* Left side for customer login */}
          <div className="left border-1 bg-gray-50 rounded-2xl w-150 flex flex-col justify-center items-center">
            <h1 className="text-2xl ">Login for customer</h1>
            <p className="text-sm mb-8 text-gray-500">
              Normal User who come for services
            </p>
            <form className="flex flex-col justify-center items-center">
              <input
                type="text"
                placeholder="Username"
                className="mb-2 border-1 px-2 w-65 rounded-2xl py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-2 border-1 px-2 w-65 rounded-2xl py-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-2 border-1 px-2 w-65 rounded-2xl py-2"
              />
              <button
                onClick={() => {
                  navigate("/customer");
                }}
                className="bg-blue-500 text-white p-2 px-4 cursor-pointer rounded-md"
              >
                Login
              </button>
            </form>
          </div>

          {/* Right side for admin login */}
          <div className="right bg-gray-50 w-150 border-1 rounded-2xl ml-2 flex flex-col justify-center items-center">
            <h1 className="text-2xl ">Login for Administraion</h1>
            <p className="text-sm mb-8 text-gray-500">
              For Those who provide services
            </p>
            <form className="flex flex-col justify-center items-center">
              <input
                type="text"
                placeholder="Username"
                className="mb-2 border-1 px-2 w-65 rounded-2xl py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-2 border-1 px-2 w-65 rounded-2xl py-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-2 border-1 px-2 w-65 rounded-2xl py-2"
              />
              <button
                onClick={() => {
                  navigate("/admin");
                }}
                className="bg-blue-500 text-white p-2 px-4 cursor-pointer rounded-md"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
