import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AssignmentStatistics = () => {
  const assignmentData = useLoaderData();

  return (
    <div className="text-center">
      <h2 className="font-extrabold text-3xl pb-28 bg-purple-50">
        Assignment Statistics
      </h2>

      <div className="flex justify-center items-center mt-28 mb-6">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          width={1000}
          height={500}
          data={assignmentData}
        >
          <Tooltip />
          <PolarGrid stroke="green" />
          <PolarAngleAxis dataKey="assignmentName" />
          <PolarRadiusAxis stroke="red" />
          <Radar
            dataKey="result"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.4}
          ></Radar>
        </RadarChart>
      </div>
      <p className="text-gray-500 font-medium text-xl">
        <span className="text-gray-900 font-extrabold text-xl">Chart:</span>{" "}
        Assignment result using{" "}
        <i className="text-gray-900 font-extrabold text-xl">Radar Chart</i>
      </p>
    </div>
  );
};

export default AssignmentStatistics;
