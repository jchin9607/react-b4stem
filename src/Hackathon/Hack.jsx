import React from "react";

const Hack = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black text-white flex justify-center items-center text-5xl flex-col p-[15%] gap-6 text-center">
        <h1 className="text-4xl md:text-6xl">BOSTON FOR STEM Hackathon</h1>
        <p className="text-2xl text-gray-500 ">
          Dec 29, 1:30PM - 9:30PM,{" "}
          <a
            href="https://g.co/kgs/DfskKVT"
            target="_blank"
            className="hover:text-purple-500 underline"
          >
            New Balance Community Room @ PSF
          </a>
        </p>
        <p className="text-xl text-gray-500 ">
          Open to all high schoolers! No experience required.
        </p>
        <div className="flex gap-4">
          <a href="https://forms.gle/xUTVTu2ATSnHb4MJ7" target="_blank">
            <div className=" hover:bg-gray-900 text-gray-500 font-semibold py-2 px-4 border border-gray-500 rounded shadow text-sm h-full flex justify-center items-center ">
              Register
            </div>
          </a>
          <a href="mailto:chin.cc4609@gmail.com" target="_blank">
            <div className=" hover:bg-gray-900 text-gray-500 font-semibold py-2 px-4 border border-gray-500 rounded shadow text-sm h-full flex justify-center items-center ">
              Sponsor
            </div>
          </a>
        </div>
      </div>
      <div className="w-full min-h-screen bg-black text-white flex justify-start items-center text-5xl flex-col px-[15%] gap-5">
        <h1 className="text-4xl md:text-6xl">About</h1>
        <div className="w-full flex 2xl:flex-row flex-col justify-between items-start mt-[10%] gap-10 ">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col">
              <h1 className="text-3xl">What is the B4STEM Hackathon?</h1>
              <p className="text-2xl text-gray-500 mt-2">
                B4STEM invites all students to join us in learning, networking,
                and creating. This December, we will be hosting this short 8
                hour event and solving a real world problem through programming.
              </p>
              <p className="text-2xl text-gray-500 mt-2">
                At this Hackathon, you can team up or go solo! There will also
                be food and drinks provided.
              </p>
            </div>
            <img
              src="https://wallpapers.com/images/featured/coding-avfu043y2kv52wha.jpg"
              alt=""
              className="w-full h-[700px] object-cover rounded-lg"
            />
            <div className="flex flex-col"></div>
          </div>
          <div className="flex flex-col-reverse 2xl:flex-col gap-20">
            <img
              src="https://media.wired.com/photos/669846f926dff233a54ff10c/master/pass/AI-Coding-Agents-Fast-Forward-Business.jpg"
              alt="image of a person coding"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="flex flex-col gap-20">
              <div className="flex flex-col">
                <h1 className="text-3xl">Prerequisites</h1>
                <p className="text-2xl text-gray-500 mt-2">
                  No experience required. This Hackathon is open to all students
                  and is in-person.
                </p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl">Cost</h1>
                <p className="text-2xl text-gray-500 mt-2">
                  This event is free to enter!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-black text-white flex justify-start items-center text-5xl flex-col px-[15%] gap-5 my-[10%] mb-[20%]">
        <h1 className="text-4xl md:text-6xl">Organizers</h1>
        <div className="w-full flex justify-center">
          <div className=" flex flex-wrap justify-center items-start mt-[10%] gap-10 text-3xl ">
            <div className="flex flex-col">
              <img
                src="https://ik.imagekit.io/64c35uuyg/personalportfolio/IMG_1079.JPG?updatedAt=1712264407870"
                alt=""
                className="w-[300px] h-[400px] object-cover rounded-lg"
              />
              <h1 className="text-3xl mt-2">Lucas</h1>
            </div>
            <div className="flex flex-col">
              <img
                src="https://ik.imagekit.io/64c35uuyg/b4stembio/namda.png?updatedAt=1711050797183"
                alt=""
                className="w-[300px] h-[400px] object-cover rounded-lg"
              />
              <h1 className="text-3xl mt-2">Namda</h1>
            </div>

            <div className="flex flex-col">
              <img
                src="https://ik.imagekit.io/64c35uuyg/b4stembio/dhruva.jpg?updatedAt=1711050797183"
                alt=""
                className="w-[300px] h-[400px] object-cover rounded-lg"
              />
              <h1 className="text-3xl mt-2">Dhruva</h1>
            </div>
            <div className="flex flex-col">
              <img
                src="https://ik.imagekit.io/64c35uuyg/b4stembio/grant.png?updatedAt=1711050797183"
                alt=""
                className="w-[300px] h-[400px] object-cover rounded-lg"
              />
              <h1 className="text-3xl mt-2">Grant</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hack;
