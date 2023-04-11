const addToDb = (id) => {
  let appliedJob = getAppliedJob();
  // add quantity
  const quantity = appliedJob[id];
  if (!quantity) {
    appliedJob[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    appliedJob[id] = newQuantity;
  }
  localStorage.setItem("applied-job", JSON.stringify(appliedJob));
};

const removeFromDb = (id) => {
  const appliedJob = getAppliedJob();
  if (id in appliedJob) {
    delete appliedJob[id];
    localStorage.setItem("applied-job", JSON.stringify(appliedJob));
  }
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

const deleteAppliedJob = () => {
  localStorage.removeItem("applied-job");
};

export { addToDb, removeFromDb, getAppliedJob, deleteAppliedJob };
