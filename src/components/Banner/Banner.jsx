import React from "react";
import banImg from "/banner.png";
import { CircleDotDashed } from 'lucide-react';

const Banner = () => {
  return (
    <div className="banner-container flex my-10  mx-auto items-center">
      <div className="banner-l p-20">
        <p><CircleDotDashed /> New: AI-Powered Tools Available</p>

        <h1 className="text-5xl font-bold ">
          Supercharge Your
          <br />
          Digital Workflow
        </h1>

        <p>
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        <button className="btn btn-primary">Explore Products</button>
        <button className="btn btn-outline">watch Demo </button>
      </div>

      <div className="banner-r p-20">
        <img className="w-{80%}" src={banImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
