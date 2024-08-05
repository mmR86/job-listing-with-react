import React from "react";

const JobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  console.log(params);
  return data;
};

export default JobLoader;
