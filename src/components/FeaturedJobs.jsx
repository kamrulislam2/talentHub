import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJobCard from "./FeaturedJobCard";
import FeaturedJobCardFull from "./FeaturedJobCardFull";

const FeaturedJobs = () => {
  const jobsData = useLoaderData();

  const [jobDataArr, setJobDataArr] = useState([]);
  const [showAll, setShowAll] = useState(false);
  let newJobArray = [];

  useEffect(() => {
    fetch("jobData.json")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          data.map((jobData) => {
            if (newJobArray.length !== 4) {
              newJobArray.push(jobData);
            }
          });
          setJobDataArr(newJobArray);
        }
      });
  }, []);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="px-8 lg:px-40 text-center">
      <h2 className="font-extrabold text-4xl mb-4">Featured Jobs</h2>
      <p className="font-medium text-base">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-2 gap-6 my-10">
        {showAll
          ? jobsData.map((singleJobData2) => (
              <FeaturedJobCardFull
                key={singleJobData2.id}
                singleJobData2={singleJobData2}
              ></FeaturedJobCardFull>
            ))
          : jobDataArr.map((singleJobData) => (
              <FeaturedJobCard
                key={singleJobData.id}
                singleJobData={singleJobData}
              ></FeaturedJobCard>
            ))}
      </div>
      {showAll ? (
        <button
          onClick={handleShowAll}
          className="font-extrabold text-xl text-white bg-purple-500 py-3 lg:py-4 hover:bg-purple-800 px-4 lg:px-7 rounded-lg mb-28"
        >
          See Less
        </button>
      ) : (
        <button
          onClick={handleShowAll}
          className="font-extrabold text-xl text-white bg-purple-500 hover:bg-purple-800 py-3 lg:py-4 px-4 lg:px-7 rounded-lg mb-28"
        >
          See All Job
        </button>
      )}
    </div>
  );
};

export default FeaturedJobs;
