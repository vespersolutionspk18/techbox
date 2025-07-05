import React from "react";
import Pill1 from "./MethodologyPills/Pill1";
import Pill2 from "./MethodologyPills/Pill2";
import Pill3 from "./MethodologyPills/Pill3";

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
            Tailor Made Solutions
          </h5>
          <p className="font-sans text-md text-stone-800 ">
            Off the shelf solutions aren't in our code. We engineer every project specifically for your needs, ensuring it's scalable, secure, and future ready from its initial build
          </p>
        </div>
        <Pill1 />
      </div>
      <div className="flex flex-col gap-7 mt-8">
        <div className="flex flex-col gap-2">
          <p className="text-blue-800 text-lg">02</p>
          <h5 className="font-sans text-2xl text-black font-bold">
            Speed Oriented
          </h5>
          <p className="font-sans text-md text-stone-800 ">
            Time and investment are vital. Meeting your deadlines is our priority. Our agile model, with your dedicated software consultant guiding progress, gets your quality MVP or full product to market quickly.
          </p>
        </div>
        <Pill2 />
      </div>
      <div className="flex flex-col gap-7 mt-8">
        <div className="flex flex-col gap-2">
          <p className="text-blue-800 text-lg">03</p>
          <h5 className="font-sans text-2xl text-black font-bold">
            AI First Thinking
          </h5>
          <p className="font-sans text-md text-stone-800 ">
            From smart automation to deep learning models, we bake AI into the foundation of our solutions, giving your business a strategic edge from the start.
          </p>
        </div>
        <Pill3 />
      </div>
     
    </div>
  );
};

export default MethodologyMobile;
