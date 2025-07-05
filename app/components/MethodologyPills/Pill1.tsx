'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { CheckSquare } from "lucide-react"

export default function CustomPills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pillRefs = useRef<(HTMLDivElement | null)[]>([])
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const iconRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)
  const [linePosition, setLinePosition] = useState<number | null>(null)
  const [lineHeight, setLineHeight] = useState<{ top: number; height: number } | null>(null)

  const steps = [
    {
      title: "Custom-Built",
      subtitle: "Tailored code, no templates.",
    },
    {
      title: "Scalable & Secure",
      subtitle: "Engineered to grow and protect.",
    },
    {
      title: "Future-Ready",
      subtitle: "Modern, adaptable, legacy-free.",
    },
  ]


  useEffect(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    // Calculate line position after dots are rendered
    setTimeout(() => {
      if (dotRefs.current[0] && dotRefs.current[dotRefs.current.length - 1] && containerRef.current) {
        const firstDot = dotRefs.current[0]
        const lastDot = dotRefs.current[dotRefs.current.length - 1]
        const containerRect = containerRef.current.getBoundingClientRect()
        
        if (!firstDot || !lastDot) return
        
        const firstDotRect = firstDot.getBoundingClientRect()
        const lastDotRect = lastDot.getBoundingClientRect()
        
        // Calculate horizontal position (center of dot) - 1 pixel to the left
        const relativeLeft = firstDotRect.left - containerRect.left + (firstDotRect.width / 2) - 1
        setLinePosition(relativeLeft)
        
        // Calculate vertical position and height
        const relativeTop = firstDotRect.top - containerRect.top + (firstDotRect.height / 2)
        const relativeBottom = lastDotRect.top - containerRect.top + (lastDotRect.height / 2)
        setLineHeight({
          top: relativeTop,
          height: relativeBottom - relativeTop
        })
      }
    }, 100)

    // Animate the line
    if (lineRef.current) {
      tl.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        { scaleY: 1, duration: 1.2, ease: 'power2.inOut' },
        0.2
      )
    }

    // Animate dots with a more dynamic effect
    dotRefs.current.forEach((dot, index) => {
      if (dot) {
        tl.fromTo(dot,
          { scale: 0, opacity: 0, rotation: -180 },
          { 
            scale: 1, 
            opacity: 1, 
            rotation: 0,
            duration: 0.6, 
            ease: 'back.out(3)' 
          },
          index * 0.2
        )
      }
    })

    // Animate pills with stagger and spring effect
    pillRefs.current.forEach((pill, index) => {
      if (pill) {
        tl.fromTo(pill,
          { 
            x: 100, 
            opacity: 0, 
            scale: 0.8,
            rotationY: -45
          },
          { 
            x: 0, 
            opacity: 1, 
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: 'power3.out'
          },
          index * 0.15 + 0.3
        )
      }
    })

    // Animate icons
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        tl.fromTo(icon,
          { scale: 0, rotation: -360 },
          { 
            scale: 1, 
            rotation: 0,
            duration: 0.6,
            ease: 'back.out(2)'
          },
          index * 0.15 + 0.5
        )
      }
    })

    // Store event handlers for cleanup
    const eventHandlers = new Map<HTMLDivElement, { mouseenter: () => void; mouseleave: () => void }>();

    // Add hover animations
    pillRefs.current.forEach((pill, index) => {
      if (pill) {
        const mouseenterHandler = () => {
          gsap.to(pill, {
            scale: 1.02,
            x: 10,
            duration: 0.3,
            ease: 'power2.out'
          })
          gsap.to(dotRefs.current[index], {
            scale: 1.5,
            duration: 0.3,
            ease: 'power2.out'
          })
          gsap.to(iconRefs.current[index], {
            rotation: 15,
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
          })
        };

        const mouseleaveHandler = () => {
          gsap.to(pill, {
            scale: 1,
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
          gsap.to(dotRefs.current[index], {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
          gsap.to(iconRefs.current[index], {
            rotation: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        };

        pill.addEventListener('mouseenter', mouseenterHandler);
        pill.addEventListener('mouseleave', mouseleaveHandler);
        
        // Store handlers for cleanup
        eventHandlers.set(pill, { mouseenter: mouseenterHandler, mouseleave: mouseleaveHandler });
      }
    })
    
    return () => {
      // Cleanup event listeners
      eventHandlers.forEach((handlers, pill) => {
        pill.removeEventListener('mouseenter', handlers.mouseenter);
        pill.removeEventListener('mouseleave', handlers.mouseleave);
      });
    }
  }, [])

  return (
    <div ref={containerRef} className="relative flex flex-col gap-6 p-5">
      {/* Vertical line connecting dots */}
      {linePosition !== null && lineHeight !== null && (
        <div 
          ref={lineRef}
          className="absolute w-0.5 bg-gray-300"
          style={{
            left: `${linePosition}px`,
            top: `${lineHeight.top}px`,
            height: `${lineHeight.height}px`
          }}
        />
      )}

      {steps.map((step, i) => (
        <div key={i} className="relative flex items-center">
          {/* Timeline dot - positioned to the left */}
          <div 
            ref={(el) => {dotRefs.current[i] = el}}
            className="absolute w-3 h-3 bg-stone-600 rounded-full z-10"
            style={{
              left: '-16px',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />

          {/* Pill content */}
          <div 
            ref={(el) => {pillRefs.current[i] = el}}
            className="flex items-center justify-between w-full rounded-2xl border border-dashed border-gray-300 p-3 cursor-pointer transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              {/* Icon box */}
              <div 
                ref={(el) => {iconRefs.current[i] = el}}
                className="bg-blue-100 text-blue-600 p-2 rounded-md"
              >
                <CheckSquare className="w-5 h-5" />
              </div>

              {/* Text */}
              <div>
                <div className="text-sm font-semibold uppercase text-gray-900 tracking-wide">
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                  {step.subtitle}
                </div>
              </div>
            </div>

            {/* Step number */}
            <div className="text-sm font-mono text-gray-400 pr-1">
              {(i + 1).toString().padStart(2, "0")}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
