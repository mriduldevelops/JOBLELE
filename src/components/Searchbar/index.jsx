import React, { useState } from "react";
const Searchbar = () => {

  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    type: "",
    location: "",
    experience: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      <select
        name="title"
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option defaultValue hidden>
          Job Role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <select
        name="type"
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option hidden defaultValue>
          Job Type
        </option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        name="location"
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option hidden defaultValue>
          Location
        </option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select
        name="experience"
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
      >
        <option defaultValue hidden>
          Experience
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
