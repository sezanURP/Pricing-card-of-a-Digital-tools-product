import React from "react";

const Stat = () => {
  return (
    <div>
      <div className="flex my-10 justify-around bg-blue-500 text-white py-10">
        <p className="">
          <span className="font-bold text-4xl">50K+</span>
          <br />
          Active Users
        </p>
        

        <p className="">
          <span className="font-bold text-4xl">200+</span>
          <br />
          Premium Tools
        </p>

        <p className="">
          <span className="font-bold text-4xl">4.9</span>
          <br />
         Rating
        </p>
      </div>
    </div>
  );
};

export default Stat;
