"use client";
import React, { useEffect, useRef } from "react";
import SimpleButton from "../components/SimpleButton";
import { gsap } from "gsap";

const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    
    if (mediaQuery.matches) {
      const cards = containerRef.current.querySelectorAll('.case-study-card');
      
      // Small delay to ensure layout is complete
      setTimeout(() => {
        cards.forEach((card) => {
        const overlay = card.querySelector('.card-overlay');
        const hiddenContent = card.querySelector('.hidden-content');
        
        // Set initial state for hidden content
        gsap.set(hiddenContent, {
          opacity: 0,
          height: 0,
          overflow: "hidden"
        });
        
        // Get initial width
        const initialWidth = card.getBoundingClientRect().width;
        const expandedWidth = initialWidth * 1.2; // 20% larger
        
        // Temporarily show hidden content to get its height
        gsap.set(hiddenContent, { height: "auto", opacity: 0 });
        const hiddenHeight = hiddenContent.getBoundingClientRect().height;
        gsap.set(hiddenContent, { height: 0 });
        
        // Add will-change for performance
        gsap.set(card, { 
          willChange: "width",
          zIndex: 1
        });
        gsap.set(overlay, { willChange: "backdrop-filter" });

        // Create timeline for hover animations
        const tl = gsap.timeline({ 
          paused: true,
          onStart: () => {
            gsap.set(card, { zIndex: 10 });
          },
          onReverseComplete: () => {
            gsap.set(card, { zIndex: 1 });
          }
        });
        
        tl.to(card, {
          width: expandedWidth,
          duration: 1,
          ease: "power2.inOut"
        })
        .to(overlay, {
          backdropFilter: "blur(12px)",
          duration: 0.8,
          ease: "power2.out"
        }, 0)
        .to(hiddenContent, {
          height: hiddenHeight,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out"
        }, 0.3);

        // Add hover event listeners
        const handleMouseEnter = () => tl.play();
        const handleMouseLeave = () => tl.reverse();

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
        
        // Store cleanup function
        (card as any)._cleanup = () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
          tl.kill();
        };
      });
      }, 100); // 100ms delay
      
      // Cleanup on unmount
      return () => {
        const cards = containerRef.current?.querySelectorAll('.case-study-card');
        if (cards) {
          cards.forEach((card) => {
            if ((card as any)._cleanup) {
              (card as any)._cleanup();
            }
          });
        }
      };
    }
  }, []);

  return (
    <div className="flex flex-col bg-black/97 px-6 lg:px-10 w-full gap-3">
      <h5 className="text-stone-400">SUCCESS STORIES</h5>
      <h5 className="text-white font-sans text-2xl lg:text-4xl">
        Solving the challenges that other companies can&apos;t
      </h5>
      <div ref={containerRef} className="flex flex-col mt-8 lg:flex-row gap-5">
        <div
          className="case-study-card h-[700px] rounded-lg bg-cover flex flex-col justify-end p-5 gap-3 w-full lg:w-1/3 relative overflow-hidden"
          style={{ backgroundImage: "url(/assets/tr1.jpg)" }}
        >
          <div className="card-overlay absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col gap-1">
            <div>
              <h5 className="text-white">ENERGY</h5>
              <h5 className="text-white font-sans text-xl font-bold tracking-tight">
                Wind Energy Forecasting
              </h5>
            </div>
            <div className="hidden-content">
              <p className="text-white font-sans font-bold tracking-tight py-6">
                Development of a model to predict the energy production of wind
                farms, optimizing their efficient and profitability.
              </p>
              <SimpleButton text="LEARN MORE" route="/case-studies" />
            </div>
          </div>
        </div>

        <div
          className="case-study-card h-[700px] rounded-lg bg-cover flex flex-col justify-end p-5 gap-3 w-full lg:w-1/3 relative overflow-hidden"
          style={{ backgroundImage: "url(/assets/tr1.jpg)" }}
        >
          <div className="card-overlay absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col gap-1">
            <div>
              <h5 className="text-white">TECHNOLOGY</h5>
              <h5 className="text-white font-sans text-xl font-bold tracking-tight">
                AI-Powered Analytics
              </h5>
            </div>
            <div className="hidden-content">
              <p className="text-white font-sans font-bold tracking-tight py-6">
                Revolutionary machine learning algorithms that transform raw data
                into actionable business insights.
              </p>
              <SimpleButton text="LEARN MORE" route="/case-studies" />
            </div>
          </div>
        </div>

        <div
          className="case-study-card h-[700px] rounded-lg bg-cover flex flex-col justify-end p-5 gap-3 w-full lg:w-1/3 relative overflow-hidden"
          style={{ backgroundImage: "url(/assets/tr1.jpg)" }}
        >
          <div className="card-overlay absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col gap-1">
            <div>
              <h5 className="text-white">FINANCE</h5>
              <h5 className="text-white font-sans text-xl font-bold tracking-tight">
                Risk Assessment Platform
              </h5>
            </div>
            <div className="hidden-content">
              <p className="text-white font-sans font-bold tracking-tight py-6">
                Advanced predictive models for real-time financial risk analysis
                and portfolio optimization.
              </p>
              <SimpleButton text="LEARN MORE" route="/case-studies" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;