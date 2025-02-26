// import React from 'react'

import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="main pt-10 h-160 flex justify-center">
        <div className="top w-350 flex">
          <div className="left w-175 h-full flex justify-center items-center">
            <h1 className="text-2xl font-light text-center">
              Welcome to{" "}
              <span className="text-gray-900 text-6xl font-bold">
                <br /> Appointment <br /> Scheduler
              </span>
            </h1>
          </div>
          <div className="right w-175 h-full pt-20">
            <img src="/home-img.png" alt="doctor" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
