import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const NewComponent = () => {
  const rndInt = Math.floor(Math.random() * 5) + 1;

  const [currentIndex, setCurrentIndex] = useState(null);
  const [jobs, setJobs] = useState([]);
  //show a spinner or something while fetching
  const [loading, setLoading] = useState(true);

  const showTitle = () => {
    if (currentIndex === null) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }
  };

  useEffect(() => {
    //created fetch jobs function and called it emediatelly
    const fetchJobs = async () => {
      //defining the amount of jobs on a page
      const apiUrl = "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex items-center flex-col gap-y-10 bg-blue-100 py-9 h-56">
      <div className="shadow-lg bg-blue-300 rounded-lg">
        <button
          className="text-3xl p-2.5 justify-center content-center button"
          onClick={showTitle}
        >
          Current Job Offers
        </button>
      </div>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <h2 className={`text-4xl font-semibold animated-text-${rndInt}`}>
          {currentIndex === null ? "" : jobs[currentIndex].title}
        </h2>
      )}
    </div>
  );
};

export default NewComponent;
