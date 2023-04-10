import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCategoryCard from "./JobCategoryCard";

const JobCategory = () => {
  const categoryList = useLoaderData();
  console.log(categoryList);
  return (
    <div className="mt-28 px-40 text-center">
      <h2 className="font-extrabold text-4xl mb-4">Job Category List</h2>
      <p className="font-medium text-base">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex justify-between mt-8 mb-32">
        {categoryList.map((jobDetails) => (
          <JobCategoryCard
            key={jobDetails.id}
            jobDetails={jobDetails}
          ></JobCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
