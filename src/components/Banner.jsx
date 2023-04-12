import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-8 lg:px-40 pb-10 lg:py-1 flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center bg-purple-50">
      <div className="w-full">
        <h2 className="font-extrabold text-6xl leading-tight w-full lg:w-8/12">
          One Step <br /> Closer To Your
          <br />
          <span className="text-purple-500">Dream Job</span>
        </h2>
        <p className="font-medium text-lg w-full lg:w-9/12 leading-relaxed my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Link to="/">
          <button className="font-extrabold text-xl text-white bg-purple-500 hover:bg-purple-800 px-4 py-3 lg:py-4 lg:px-7 rounded-lg">
            Get Started
          </button>
        </Link>
      </div>
      <img
        className="w-full lg:w-2/4 h-full lg:-mr-20"
        src="Header-image.png"
        alt="header section image"
      />
    </div>
  );
};

export default Banner;
