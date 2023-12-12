import React from "react";
import dayjs from "dayjs";
const JobCard = (props) => {
  // const skills = ["Javascript", "React.js", "Node.js"]
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");

  return (
    <div className="mx-10 mb-4">
      <div className="flex justify-between items-center mx-10 mb-4 py-6 px-10 bg-zinc-900 rounded-md text-white shadow-lg border border-zinc-900 hover:translate-y-1 hover:scale-104">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">
            {props.title} - {props.company}
          </h1>
          <p>
            {props.type} &#x2022; {props.experience} &#x2022; {props.location}
          </p>
          <div className="flex items-center gap-2">
            {props.skills.map((skill, i) => (
              <p
                key={i}
                className="text-zinc-300 py-1 px-2 rounded-md border border-white"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-zinc-400">
            Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`}{" "}
            ago
          </p>
          <a href={props.jobLink} target="_blank" rel="noopener noreferrer">
            <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">
              Apply
            </button>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default JobCard;
