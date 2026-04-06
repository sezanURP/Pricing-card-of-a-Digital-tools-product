import React from "react";
import banImg from "/banner.png";
import { CircleDotDashed, Play } from "lucide-react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row my-7 mx-auto items-center">
      <div className=" p-20">
        <p className="flex items-center ">
          <CircleDotDashed />
          New: AI-Powered Tools Available
        </p>

        <h1 className="text-5xl font-bold mb-7 ">
          Supercharge Your
          <br />
          Digital Workflow
        </h1>

        <p className="text-lg mb-7">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <button className="btn btn-primary mb-5  md:mr-7">
            Explore Products
          </button>
          <button className="btn btn-outline">
            <Play />
            watch Demo{" "}
          </button>
        </div>
      </div>

      <div className="  p-10">
        <img className="w-{80%}" src={banImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
