import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" my-10 text-center bg-blue-500 text-white py-10">
        <h1 className="text-4xl font-bold mb-5">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-md ">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button className="btn  bg-white rounded-3xl">
            Explore Products
          </button>
          <button className="btn btn-outline rounded-3xl">
            
            View Pricing
          </button>
        </div>
         <ul className="flex justify-center gap-4 mt-10 text-sm">
         <li>• 14-day free trial </li>
         <li>• Cancel anytime </li>
         <li>• No credit card required </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
