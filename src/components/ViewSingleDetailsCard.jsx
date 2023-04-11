import React from "react";
import { Toaster } from "react-hot-toast";

const ViewSingleDetailsCard = ({ singleJobDetail, handleApplyNow }) => {
  const { salary, jobTitle, contactInformation, location, id } =
    singleJobDetail;
  return (
    <div className="mb-28">
      <div className="bg-purple-50 p-8 rounded-lg mb-6">
        <div>
          <h2 className="font-extrabold text-xl border-b-2 text-left pb-6">
            Job Details
          </h2>
          <p className="mt-6 flex items-center gap-2 font-medium text-xl">
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/r4WYBLn/Frame.png"
              alt=""
            />
            <span className="font-extrabold text-xl ">Salary: </span>
            <span className="text-gray-500">{salary} (Per Month)</span>
          </p>
          <p className="mt-4 flex items-center gap-2 font-medium text-xl">
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/YZF19Zc/Frame-1.png"
              alt=""
            />
            <span className="font-extrabold text-xl">Job Title: </span>
            <span className="text-gray-500">{jobTitle}</span>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-extrabold text-xl border-b-2 text-left pb-6">
            Contact Information
          </h2>
          <p className="mt-6 flex items-center gap-2 font-medium text-xl">
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/VNndVQR/Frame-2.png"
              alt=""
            />
            <span className="font-extrabold text-xl">Phone: </span>

            <span className="text-gray-500">{contactInformation.phone}</span>
          </p>
          <p className="mt-4 flex items-center gap-2 font-medium text-xl">
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/TYKG9m5/Frame-3.png"
              alt=""
            />
            <span className="font-extrabold text-xl">Email: </span>

            <span className="text-gray-500">{contactInformation.email}</span>
          </p>
          <p className="mt-4 flex items-center gap-2 font-medium text-xl">
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/ZX17jzD/Frame-4.png"
              alt=""
            />
            <span className="font-extrabold text-xl">Address: </span>

            <span className="text-gray-500">{location}</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => handleApplyNow(id)}
        className="w-full py-5 bg-purple-500 hover:bg-purple-800 font-extrabold text-xl text-white rounded-lg"
      >
        Apply Now
      </button>
      <Toaster />
    </div>
  );
};

export default ViewSingleDetailsCard;
