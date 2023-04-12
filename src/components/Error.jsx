import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="px-40 mt-20 flex flex-col items-center justify-center">
      <img
        className="h-96 w-5/12 rounded-lg"
        src="https://i.ibb.co/1RHhNYb/doge.jpg"
        alt=""
      />
      <p className="font-extrabold text-2xl my-4">
        Kyu, page nehi mili? Bahut bura hua vro!
      </p>
      <h2 className="font-extrabold text-8xl text-gray-500 mb-4">Error 404</h2>
      <p className="font-bold text-4xl text-gray-400 mb-6">(Page not found)</p>

      <div className="inline-flex gap-2">
        <button
          onClick={handleGoBack}
          className="font-extrabold text-lg text-white bg-purple-500 hover:bg-purple-800 py-2 px-4 rounded-lg inline-flex items-center gap-2 mb-10"
        >
          <ArrowUturnLeftIcon className="h-5 w-5" />
          Go Back
        </button>
        <Link to="/">
          <button className="font-extrabold text-lg text-white bg-purple-500 hover:bg-purple-800 py-2 px-4 rounded-lg inline-flex items-center gap-2 mb-10">
            <HomeIcon className="h-5 w-5" />
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
