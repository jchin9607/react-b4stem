import React from "react";

const Hack = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black text-white flex justify-center items-center text-5xl flex-col p-[15%] gap-6 text-center">
        <h1 className="text-6xl">B4STEM Hackathon</h1>
        <p className="text-3xl text-gray-500 ">
          Dec 30, 1:30PM - 9:30PM,{" "}
          <a
            href="https://g.co/kgs/DfskKVT"
            target="_blank"
            className="hover:text-purple-500 underline"
          >
            New Balance Community Room @ PSF
          </a>
        </p>
        <a href="https://forms.gle/xUTVTu2ATSnHb4MJ7" target="_blank">
          <div className=" hover:bg-gray-900 text-gray-500 font-semibold py-2 px-4 border border-gray-500 rounded shadow text-sm h-full flex justify-center items-center ">
            Register
          </div>
        </a>
      </div>
      {/* <div className="w-full min-h-screen bg-black text-white flex justify-start items-start text-5xl flex-col p-[15%] gap-5 text-center">
        <h1>About</h1>
      </div> */}
    </>
  );
};

export default Hack;
