import React from "react";
import Pill1 from "./MethodologyPills/Pill1";

const MethodologyMobile = () => {
  return (
    <div className="tracking-tight w-full flex flex-col gap-5 px-6 py-10 bg-white rounded-xl">
      <p className="text-stone-500 ">
        Our methodology at <br></br>Lance
      </p>
      <div className="flex flex-col gap-7 mt-8">
        <div className="flex flex-col gap-2">
          <p className="text-blue-800 text-lg">01</p>
          <h5 className="font-sans text-2xl text-black font-bold">
            We analyze your business model
          </h5>
          <p className="font-sans text-md text-stone-800 ">
            The success of our projects lies in enhancing your business model.
            We dive deep into understanding your business to evaluate its needs
            and define clear objectives.
          </p>
        </div>
        <Pill1 />
      </div>
      <div className="flex flex-col gap-7 mt-8">
        <div className="flex flex-col gap-2">
          <p className="text-blue-800 text-lg">02</p>
          <h5 className="font-sans text-2xl text-black font-bold">
            We analyze your business model
          </h5>
          <p className="font-sans text-md text-stone-800 ">
            The success of our projects lies in enhancing your business model.
            We dive deep into understanding your business to evaluate its needs
            and define clear objectives.
          </p>
        </div>
        <Pill1 />
      </div>
      <div className="flex flex-col gap-7 mt-8">
        <div className="flex flex-col gap-2">
          <p className="text-blue-800 text-lg">03</p>
          <h5 className="font-sans text-2xl text-black font-bold">
            We analyze your business model
          </h5>
          <p className="font-sans text-md text-stone-800 ">
            The success of our projects lies in enhancing your business model.
            We dive deep into understanding your business to evaluate its needs
            and define clear objectives.
          </p>
        </div>
        <Pill1 />
      </div>
      <div className="flex flex-col gap-7 mt-8">
        <div className="flex flex-col gap-2">
          <p className="text-blue-800 text-lg">04</p>
          <h5 className="font-sans text-2xl text-black font-bold">
            We analyze your business model
          </h5>
          <p className="font-sans text-md text-stone-800 ">
            The success of our projects lies in enhancing your business model.
            We dive deep into understanding your business to evaluate its needs
            and define clear objectives.
          </p>
        </div>
        <Pill1 />
      </div>
    </div>
  );
};

export default MethodologyMobile;
