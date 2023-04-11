import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ViewDetails from "./components/ViewDetails";
import AppliedJobs from "./components/AppliedJobs";
import AssignmentStatistics from "./components/AssignmentStatistics";
import Error from "./components/Error";
import Blog from "./components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/jobData.json"),
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("/jobData.json"),
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobData.json"),
      },
      {
        path: "/statistics",
        element: <AssignmentStatistics></AssignmentStatistics>,
        loader: () => fetch("/assignmentData.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
