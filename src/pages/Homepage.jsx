import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
import NewComponent from "../components/NewComponent";
import { useLoaderData } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome="true" />
      <ViewAllJobs />
      <NewComponent />
    </>
  );
};

export default Homepage;
