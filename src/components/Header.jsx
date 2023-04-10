import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/manrope";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-40 py-12">
      <h2 className="font-extrabold text-3xl tracking-wide">TalentHub</h2>
      <div className="font-medium text-base text-gray-700 inline-flex gap-8">
        <Link>Home</Link>
        <Link>Statistics</Link>
        <Link>Applied Jobs</Link>
        <Link>blog</Link>
      </div>
      <button className="font-extrabold text-xl text-white bg-purple-500 py-4 px-7 rounded-lg">
        Start Applying
      </button>
    </div>
  );
};

export default Header;
