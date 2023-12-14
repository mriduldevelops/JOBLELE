import React from "react";

const Navbar = ({ showPostForm }) => {
  const handleClick = () => {
    showPostForm(true);
  };
  return (
    <div className="h-20 flex justify-between items-center w-full px-6 md:px-10 lg:px-20 text-white bg-zinc-900">
      <div className="text-2xl md:text-3xl font-bold">
        JOBLELE.
      </div>
      <button onClick={handleClick} className="mt-2 md:mt-0 md:mr-4">
        <p className="bg-blue-500 px-6 md:px-10 py-2 rounded-md font-semibold text-white text-sm md:text-base hover:bg-blue-600">
          Post Jobs
        </p>
      </button>
    </div>
  );
};

export default Navbar;
