import React from "react";
import Banner from "./Banner";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
