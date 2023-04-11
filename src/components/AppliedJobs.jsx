import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "../utilities/fakedb";
import AppliedJobsCard from "./AppliedJobsCard";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AppliedJobs = () => {
  const jobsData = useLoaderData();
  const [appliedData, setAppliedData] = useState([]);
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

  return (
    <div className="text-center ">
      <h2 className="font-extrabold text-3xl pb-28 bg-purple-50">
        Applied Jobs
      </h2>

      <div className="h-72 mt-10 px-40 ">
        {appliedData.map((singleAppliedData) => (
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
