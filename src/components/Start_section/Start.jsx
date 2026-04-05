import React from "react";
import roket from "/rocket.png";
import user from "/user.png";
import product from "/package.png";
const Start = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-30 mb-4">
        Get Started in 3 Steps
      </h2>

      <p className="text-center text-lg text-gray-600">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="  steps flex justify-between mt-20 gap-4">
        <div className="step-card shadow-xl/30 rounded-lg p-6">
          <span className="flex items-center justify-end ">
            <span
              className="rounded-full m-4 p-2 text-white font-bold text-sm"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(79, 57, 246, 1) 0%,rgba(149, 20, 250, 1) 100%)",
              }}
            >
              01
            </span>
          </span>
            <span className="  flex justify-center items-center" ><img className="bg-purple-200 rounded-full p-2  " src={user} alt="Create Account" /></span>
          <h3 className="text-2xl font-bold text-center mt-2 mb-2  ">Create Account</h3>
          <p className="text-center text-gray-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="step-card shadow-xl/30 rounded-lg p-6">
          <span className="flex items-center justify-end">
            <div
              className="rounded-full m-4 p-2 text-white font-bold text-sm"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(79, 57, 246, 1) 0%,rgba(149, 20, 250, 1) 100%)",
              }}
            >
              02
            </div>
          </span>
             <span className="  flex justify-center items-center" ><img className="bg-purple-200 rounded-full p-2  " src={product} alt="Choose Products" /></span>
        
          <h3 className="text-2xl font-bold text-center mt-2 mb-2  ">Choose Products</h3>
          <p className="text-center text-gray-600">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="step-card shadow-xl/15 rounded-lg p-6">
          <span className="flex items-center justify-end mb-5">
            <span
              className="rounded-full m-4 p-2 text-white font-bold text-sm"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(79, 57, 246, 1) 0%,rgba(149, 20, 250, 1) 100%)",
              }}
            >
              03
            </span>
          </span>
          <span className="  flex justify-center items-center" ><img className="bg-purple-200 rounded-full p-2  " src={roket} alt="Start Creating" /></span>
          
          <h3 className="text-2xl font-bold text-center mt-2 mb-2  ">Start Creating</h3>
          <p className="text-center text-gray-600">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
