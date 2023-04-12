import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "../utilities/fakedb";
import AppliedJobsCard from "./AppliedJobsCard";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import FilteredAppliedJobsCard from "./FilteredAppliedJobsCard";

const AppliedJobs = () => {
  const jobsData = useLoaderData();
  const [appliedData, setAppliedData] = useState([]);
  const [sortBy, setSortBy] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showFilterJob, setShowFilterJob] = useState(false);
  let newJobsDataArray = [];

  useEffect(() => {
    const appliedJobsData = getAppliedJob();
    for (const id in appliedJobsData) {
      const filteredJobData = jobsData.filter(
        (singleJobData) => singleJobData.id === id
      );
      newJobsDataArray.push(...filteredJobData);
    }
    setAppliedData(newJobsDataArray);
  }, []);

  const handleSortBy = (jobStatus) => {
    setSortBy(true);
    if (jobStatus === "Remote") {
      const remoteJobArray = appliedData.filter(
        (jobData) => jobData.jobStatus === jobStatus
      );
      setFilteredJobs(remoteJobArray);
      setShowFilterJob(true);
      setSortBy(false);
    } else if (jobStatus === "Onsite") {
      const onsiteJobArray = appliedData.filter(
        (jobData) => jobData.jobStatus === jobStatus
      );
      setFilteredJobs(onsiteJobArray);
      setShowFilterJob(true);
      setSortBy(false);
    } else if (jobStatus === "All") {
      setShowFilterJob(false);
      setSortBy(false);
    }
  };
  console.log(filteredJobs);
  return (
    <div className="text-center mb-28">
      <h2 className="font-extrabold text-3xl pb-28 bg-purple-50">
        Applied Jobs
      </h2>
      <div className="mt-32  px-40 text-right flex flex-col relative">
        <div>
          <button
            onClick={handleSortBy}
            className=" py-5 px-6 bg-gray-100  rounded-lg font-semibold text-xl inline-flex gap-2 items-center "
          >
            Filter By
            <ChevronDownIcon className="h-6 w-6 " />
          </button>

          {sortBy && (
            <div className="flex flex-col pb-3 absolute top-14 right-40 rounded-lg  rounded-t-none  bg-gray-100">
              <button
                onClick={() => handleSortBy("All")}
                className="py-1 px-10  font-semibold text-xl hover:bg-purple-200 hover:rounded-full"
              >
                All
              </button>
              <button
                onClick={() => handleSortBy("Remote")}
                className="py-1 px-10  font-semibold text-xl hover:bg-purple-200 hover:rounded-full"
              >
                Remote
              </button>
              <button
                onClick={() => handleSortBy("Onsite")}
                className="py-1 px-11  font-semibold text-xl hover:bg-purple-200 hover:rounded-full"
              >
                Onsite
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-10 px-40 ">
        {showFilterJob
          ? filteredJobs.map((singleFilteredJob) => (
              <FilteredAppliedJobsCard
                key={singleFilteredJob.id}
                singleFilteredJob={singleFilteredJob}
              ></FilteredAppliedJobsCard>
            ))
          : appliedData.map((singleAppliedData) => (
              <AppliedJobsCard
                key={singleAppliedData.id}
                singleAppliedData={singleAppliedData}
              ></AppliedJobsCard>
            ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
