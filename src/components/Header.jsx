import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/manrope";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-40 py-12 bg-purple-50">
      <h2 className="font-extrabold text-3xl tracking-wide">TalentHub</h2>
      <div className="font-bold text-base text-gray-700 inline-flex gap-8">
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
        <Link className="active:bg-purple-200 active:rounded-lg">blog</Link>
      </div>
      <Link to="/">
        <button className="font-extrabold text-xl text-white bg-purple-500 hover:bg-purple-800 py-4 px-7 rounded-lg">
          Start Applying
        </button>
      </Link>
    </div>
  );
};

export default Header;
