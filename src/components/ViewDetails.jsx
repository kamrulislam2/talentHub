import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ViewSingleDetail from "./ViewSingleDetail";
import { addToDb } from "../utilities/fakedb";

const ViewDetails = () => {
  const { id } = useParams();
  const jobDetailsArr = useLoaderData();

  const singleJobDetail = jobDetailsArr.find(
    (singleData) => singleData.id === id
  );

  const handleApplyNow = (id) => {
    addToDb(id);
  };
  return (
    <div className="text-center">
      <h2 className="font-extrabold text-3xl pb-28 bg-purple-50">
        Job Details
      </h2>

      <div>
        <ViewSingleDetail
          singleJobDetail={singleJobDetail}
          handleApplyNow={handleApplyNow}
        ></ViewSingleDetail>
      </div>
    </div>
  );
};

export default ViewDetails;
