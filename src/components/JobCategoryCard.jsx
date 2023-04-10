import React from "react";

const JobCategoryCard = ({ jobDetails }) => {
  const { logo, categoryName, jobStatus } = jobDetails;
  return (
    <div className="text-start px-16 py-10 bg-purple-50 ">
      <div className="bg-purple-100 h-16 w-16 flex justify-center items-center rounded-lg mb-10">
        <img className="h-10 w-10" src={logo} alt="job category logo" />
      </div>
      <h2 className="font-extrabold text-xl mb-2">{categoryName}</h2>
      <p className="font-medium text-base text-gray-700">{jobStatus}</p>
    </div>
  );
};

export default JobCategoryCard;
