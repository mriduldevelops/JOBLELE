import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

const JobForm = ({ showPostForm, fetchJobs }) => {
  const [skills, setSkills] = useState("");

  const [jobData, setJobData] = useState({
    company: "",
    title: "",
    location: "",
    experience: "",
    type: "",
    skills: [],
    postedOn: new Date(),
    jobLink: "",
  });

  const handleSkills = (e) => {
    setSkills(e.target.value);
    jobData.skills = skills.split(",");
  };

  const handleChange = (e) => {
    setJobData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setJobData({
      company: "",
      title: "",
      location: "",
      experience: "",
      type: "",
      skills: [],
      postedOn: new Date(),
      jobLink: "",
    });
    setSkills("");
  };

  const onAdd = async () => {
    await addDoc(collection(db, "jobs"), jobData);
    await fetchJobs();
    resetForm();
    setSkills("");
    showPostForm(false);
  };

  return (
    <div className="m-10">
      <div className="flex flex-col justify-between items-center mx-10 mb-4 p-10 bg-zinc-900 rounded-md shadow-lg border border-zinc-900">
        <input
          onChange={handleChange}
          name="company"
          value={jobData.company}
          type="text"
          className="mb-10 w-full py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
          placeholder="Enter Company Name"
        />
        <input
          onChange={handleSkills}
          name="skills"
          value={skills}
          type="text"
          className="mb-10 w-full py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
          placeholder="Required Skills"
        />
        <input
          onChange={handleChange}
          name="jobLink"
          value={jobData.jobLink}
          type="text"
          className="mb-10 w-full py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
          placeholder="Paste Job Link"
        />
        <div className="flex gap-7 justify-center px-10">
          <select
            onChange={handleChange}
            name="title"
            value={jobData.title}
            className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
          >
            <option value="" disabled hidden>
              Job Role
            </option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Developer Advocate">Developer Advocate</option>
          </select>
          <select
            onChange={handleChange}
            name="type"
            value={jobData.type}
            className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
          >
            <option value="" disabled hidden>
              Job Type
            </option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
          </select>
          <select
            onChange={handleChange}
            name="location"
            value={jobData.location}
            className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
          >
            <option value="" disabled hidden>
              Location
            </option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <select
            onChange={handleChange}
            name="experience"
            value={jobData.experience}
            className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
          >
            <option value="" disabled hidden>
              Experience
            </option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>

        <button
          onClick={onAdd}
          className="mt-10 bg-blue-500 px-32 py-2 rounded-md font-semibold text-white"
        >
          Add Job
        </button>
      </div>
    </div>
  );
};

export default JobForm;
