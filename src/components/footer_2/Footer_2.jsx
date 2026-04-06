import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer_2 = () => {
  return (
    <>
      <div className=" bg-[#101727] footer-2-container flex flex-col pl-7 sm:flex-row gap-4 sm:gap-10 justify-evenly py-10 text-white">
        <div className="card">
          <h1 className="text-3xl font-bold">DigiTools</h1>
          <p>
            Premium digital tools for creators,
            <br /> professionals, and businesses. Work smarter <br />
            with our suite of powerful tools.
          </p>
        </div>

        <div className="card">
          <p className="text-2xl font-bold">Products</p>
          <p>features</p>
          <p>pricing</p>
          <p>testimonials</p>
          <p>integrations</p>
        </div>
        <div className="card">
          <p className="text-2xl font-bold">Company</p>
          <p>about us</p>
          <p>careers</p>
          <p>blog</p>
          <p>Press</p>
        </div>
        <div className="card">
          <p className="text-2xl font-bold">Resource</p>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Community</p>
          <p>Contact</p>
        </div>
        <div className="card">
          <p className="text-2xl font-bold">Social Links</p>
          <div className="flex gap-4 text-2xl mt-4">
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaSquareFacebook />
              </a>
            </span>
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </span>
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </span>
            <span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-600 mx-auto" />
      <div className="bg-[#101727] text-center text-sm text-gray-400 py-4">
        <p> &copy; 2026 DigiTools. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer_2;
