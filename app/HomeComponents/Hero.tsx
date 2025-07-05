"use client";
import React from "react";
import Threads from "../components/Backgrounds/Threads/Threads";

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center h-[720px] relative">
      <Threads
        color={[0.5, 0.5, 0.5]}
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
        className="absolute inset-0 -z-10 bg-black/97"
      />
      <div className="w-2/3 lg:w-3/4">
        <h1 className="xl:text-8xl lg:text-6xl text-4xl text-stone-100 text-center font-sans tracking-tight px-5">
          An innovative new world, a brave new world
        </h1>
      </div>
      
    </div>
  );
};

export default Hero;
