"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Pill1 from "./MethodologyPills/Pill1";
import Pill2 from "./MethodologyPills/Pill2";
import Pill3 from "./MethodologyPills/Pill3";

gsap.registerPlugin(ScrollTrigger);

const methodologyData = [
  {
    number: "01",
    title: "Tailor Made Solutions",
    description: "Off the shelf solutions aren't in our code. We engineer every project specifically for your needs, ensuring it's scalable, secure, and future ready from its initial build",
    pill: Pill1
  },
  {
    number: "02", 
    title: "Speed Oriented",
    description: "Time and investment are vital. Meeting your deadlines is our priority. Our agile model, with your dedicated software consultant guiding progress, gets your quality MVP or full product to market quickly.",
    pill: Pill2
  },
  {
    number: "03",
    title: "AI First Thinking", 
    description: "From smart automation to deep learning models, we bake AI into the foundation of our solutions, giving your business a strategic edge from the start.",
    pill: Pill3
  }
];

const Methodology = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const [activePill, setActivePill] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = sectionRefs.current;

    // Better scroll trigger with smoother transitions
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center+=50",
        end: "bottom center-=50",
        onEnter: () => setActivePill(index),
        onEnterBack: () => setActivePill(index),
      });

      // Fade in text content on scroll
      gsap.fromTo(section.querySelector('.content-section'), 
        {
          y: 60,
          opacity: 0.3
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "top center+=100",
            scrub: 1,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const ActivePillComponent = methodologyData[activePill].pill;

  return (
    <div ref={containerRef} className="relative w-full bg-white rounded-xl">
      <div className="flex">
        <div className="w-[30%] px-6 py-10">
          {methodologyData.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) sectionRefs.current[index] = el;
              }}
              className="min-h-[100vh] flex flex-col justify-center"
            >
              <div className="content-section flex flex-col gap-3">
                <p className="text-blue-800 text-lg">{item.number}</p>
                <h5 className="font-sans text-2xl text-black font-bold">
                  {item.title}
                </h5>
                <p className="font-sans text-md text-stone-800">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-px bg-gray-200"></div>

        <div className="flex-1 sticky top-0 h-screen px-6">
          <div className="pt-10">
            <p className="text-stone-500 mb-10">
              Our methodology at <br />Lance
            </p>
            <div className="flex items-center justify-center h-[calc(100vh-200px)] relative">
              <div className="w-full max-w-md">
                <ActivePillComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;