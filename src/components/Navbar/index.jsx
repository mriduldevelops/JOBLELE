import React from "react";

const Navbar = ({ showPostForm }) => {
  const handleClick = () => {
    showPostForm(true);
  };
  return (
    <div className="h-20 flex justify-between items-center w-full text-white bg-zinc-900">
      <div className="text-3xl pl-20 font-bold">JOBLELE.</div>
      <button onClick={handleClick} className="pr-20">
        <p className="bg-blue-500 px-10 py-2 rounded-md font-semibold text-white">
          Post Jobs
        </p>
      </button>
    </div>
  );
};

export default Navbar;
