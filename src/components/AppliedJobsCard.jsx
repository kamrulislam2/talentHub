import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJobsCard = ({ singleAppliedData }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    jobStatus,
    jobType,
    location,
    salary,
  } = singleAppliedData;

  return (
    <div className="flex justify-between mb-6 items-center p-7 border rounded-lg">
      <div className="inline-flex items-center gap-8">
        <div className="w-60 h-60 rounded bg-gray-200 flex justify-center items-center">
          <img className="h-10 w-32" src={companyLogo} alt="" />
        </div>
        <div className="text-left relative">
          <h2 className="font-extrabold text-2xl mb-2">{jobTitle}</h2>
          <p className="font-semibold text-xl text-gray-500">{companyName}</p>
          <div className="flex flex-col">
            <div className="inline-flex gap-4 my-4">
              <p className="border rounded-md border-purple-500 text-purple-500 font-extrabold text-base py-2 px-5">
                {jobStatus}
              </p>
              <p className="border rounded-md border-purple-500 text-purple-500 font-extrabold text-base py-2 px-5">
                {jobType}
              </p>
            </div>
            <div className="inline-flex gap-6 items-center ">
              <p className="inline-flex gap-2 items-center font-semibold text-lg text-gray-500">
                <MapPinIcon className="h-6 w-6 bg-white" />
                {location}
              </p>
              <p className="inline-flex gap-2 items-center font-semibold text-lg text-gray-500">
                <CurrencyDollarIcon className="h-6 w-6 " />
                Salary : {salary}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/viewDetails/${id}`}>
          <button className="font-extrabold text-lg text-white bg-purple-500 py-3 px-5 rounded-lg mb-auto">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
