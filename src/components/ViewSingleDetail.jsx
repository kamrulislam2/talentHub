import React from "react";
import ViewSingleDetailsCard from "./ViewSingleDetailsCard";

const ViewSingleDetail = ({ singleJobDetail, handleApplyNow }) => {
  const {
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experience,
  } = singleJobDetail;
  return (
    <div className="lg:flex gap-6 justify-between px-8 lg:px-40 mt-28">
      <div className="text-left w-full lg:w-8/12">
        <p className="font-medium text-base text-gray-500 leading-loose mb-6">
          <span className="font-extrabold text-base text-gray-900">
            Job Description:
          </span>
          <span> {jobDescription}</span>
        </p>
        <p className="font-medium text-base text-gray-500 leading-loose mb-6">
          <span className="font-extrabold text-base text-gray-900">
            Job Responsibility:
          </span>
          <span> {jobResponsibility}</span>
        </p>
        <p className="font-medium text-base text-gray-500 leading-loose mb-6">
          <span className="font-extrabold text-base text-gray-900 mb-4">
            Educational Requirements:
          </span>
          <br />
          {educationalRequirements}
        </p>
        <p className="font-medium text-base text-gray-500 leading-loose mb-6">
          <span className="font-extrabold text-base text-gray-900 mb-4">
            Experiences:
          </span>
          <br />
          {experience}
        </p>
      </div>
      <div className="w-full lg:w-4/12">
        <ViewSingleDetailsCard
          singleJobDetail={singleJobDetail}
          handleApplyNow={handleApplyNow}
        ></ViewSingleDetailsCard>
      </div>
    </div>
  );
};

export default ViewSingleDetail;
