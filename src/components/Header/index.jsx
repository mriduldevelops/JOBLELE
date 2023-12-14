import React from "react";

const Header = () => {
  return (
    <>
      {/* <div className="mt-10 flex flex-col gap-5 items-center justify-center text-white">
        <h1 className="text-5xl font-bold">
          Your ideal job awaits, start the search
        </h1>
        <p className="text-xl">Get latest job openings that best suits you!</p>
      </div> */}

      <div className="mt-10 flex flex-col items-center justify-center text-white">
        <div className="text-center md:text-center">
          <h1 className="mx-2 text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
            Your ideal job awaits, start the search
          </h1>
          <p className="mx-10 text-lg md:text-xl lg:text-center">
            Get the latest job openings that best suit you!
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
