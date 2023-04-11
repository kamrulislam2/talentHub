import toast from "react-hot-toast";

const addToDb = (id) => {
  let appliedJob = getAppliedJob();
  // add quantity
  const quantity = appliedJob[id];
  if (!quantity) {
    appliedJob[id] = 1;
    toast.success("Applied Successfully");
  } else {
    toast.error("Already applied");
  }
  localStorage.setItem("applied-job", JSON.stringify(appliedJob));
};

const getAppliedJob = () => {
  let appliedJob = {};

  //get the appliedJob from local storage
  const storedCart = localStorage.getItem("applied-job");
  if (storedCart) {
    appliedJob = JSON.parse(storedCart);
  }
  return appliedJob;
};

export { addToDb, getAppliedJob };
