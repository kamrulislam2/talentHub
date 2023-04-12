import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/manrope";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-5 justify-between lg:items-center px-8 py-6 lg:px-40 lg:py-12 bg-purple-50">
      <h2 className="font-extrabold text-3xl tracking-wide">TalentHub</h2>
      <div className="font-bold text-base text-gray-700 flex flex-col lg:inline-flex lg:flex-row lg:gap-8">
        <Link to="/" className="active:bg-purple-200 active:rounded-lg">
          Home
        </Link>
        <Link
          to="/statistics"
          className="active:bg-purple-200 active:rounded-lg"
        >
          Statistics
        </Link>
        <Link
          to="/appliedJobs"
          className="active:bg-purple-200 active:rounded-lg"
        >
          Applied Jobs
        </Link>
        <Link to="/blog" className="active:bg-purple-200 active:rounded-lg">
          blog
        </Link>
      </div>
      <Link to="/">
        <button className="font-extrabold text-xl text-white bg-purple-500 hover:bg-purple-800 px-4 py-3 lg:py-4 lg:px-7 rounded-lg">
          Start Applying
        </button>
      </Link>
    </div>
  );
};

export default Header;
