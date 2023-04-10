import React, { useEffect, useState } from "react";
import JobCategoryCard from "./JobCategoryCard";

const JobCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    fetch("categoryList.json")
      .then((res) => res.json())
      .then((data) => setCategoryList(data));
  }, []);

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
