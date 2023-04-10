import React from "react";

const HeaderInfo = () => {
  return (
    <div className="px-40 py-1 flex justify-between items-center bg-purple-50">
      <div className="w-full">
        <h2 className="font-extrabold text-6xl leading-tight w-8/12">
          One Step <br /> Closer To Your
          <br />
          <span className="text-purple-500">Dream Job</span>
        </h2>
        <p className="font-medium text-lg w-9/12 leading-relaxed my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="font-extrabold text-xl text-white bg-purple-500 py-4 px-7 rounded-lg">
          Get Started
        </button>
      </div>
      <img
        className="w-2/4 h-full -mr-20"
        src="Header-image.png"
        alt="header section image"
      />
    </div>
  );
};

export default HeaderInfo;
