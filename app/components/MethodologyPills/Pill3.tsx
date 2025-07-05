'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { LuCog, LuBrain, LuSparkles, LuTrendingUp } from 'react-icons/lu'

const Pill3 = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const leftGroupRef = useRef<HTMLDivElement>(null)
  const rightGroupRef = useRef<HTMLDivElement>(null)
  const pillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Initial states
    gsap.set(boxRef.current, { scale: 0.8, opacity: 0, rotation: -5 })
    gsap.set([leftGroupRef.current, rightGroupRef.current], { opacity: 0 })
    gsap.set(pillRefs.current[0], { opacity: 0, scale: 0 })
    gsap.set(pillRefs.current[1], { opacity: 0, scale: 0 })
    gsap.set(pillRefs.current[2], { opacity: 0, scale: 0 })
    gsap.set(pillRefs.current[3], { opacity: 0, scale: 0 })

    // Animate dashed box with rotation
    tl.to(boxRef.current, {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.8)'
    })

    // Animate pill groups
    .to([leftGroupRef.current, rightGroupRef.current], {
      opacity: 1,
      duration: 0.3
    }, '-=0.5')

    // Animate pills
    .to(pillRefs.current, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.3')

    // Add subtle floating animation
    pillRefs.current.forEach((pill, index) => {
      if (!pill) return
      
      // Floating effect
      gsap.to(pill, {
        y: index % 2 === 0 ? -3 : 3,
        duration: 3 + (index * 0.3),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2
      })

      // Subtle rotation
      gsap.to(pill, {
        rotation: index % 2 === 0 ? 1 : -1,
        duration: 4 + (index * 0.2),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.3
      })

      // Hover effects
      pill.addEventListener('mouseenter', () => {
        gsap.to(pill, {
          scale: 1.08,
          duration: 0.3,
          ease: 'power2.out'
        })
        gsap.to(pill.querySelector('.pill-icon'), {
          scale: 1.2,
          rotation: 15,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      pill.addEventListener('mouseleave', () => {
        gsap.to(pill, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
        gsap.to(pill.querySelector('.pill-icon'), {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })

    // Add subtle pulse to the dashed box
    gsap.to(boxRef.current, {
      scale: 1.02,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

  }, [])

  return (
    <div ref={containerRef} className="relative w-full flex justify-center py-20 bg-white">
      {/* Dashed Box */}
      <div ref={boxRef} className="w-[300px] lg:w-[600px] h-[350px] border border-dashed border-gray-300 rounded-2xl relative">
        {/* Inner label */}
        <div className="absolute top-4 left-4 text-xs text-gray-500 uppercase tracking-wider">
          STRATEGY:<br />AI-FIRST FOUNDATION
        </div>
      </div>

      {/* LEFT pills (absolutely positioned) */}
      <div ref={leftGroupRef} className="absolute left-1/2 top-1/2 -translate-x-[200px] lg:-translate-x-[320px] -translate-y-[20px] space-y-3 lg:space-y-4">
        <div 
          ref={el => pillRefs.current[0] = el}
          className="flex items-center border border-dashed border-gray-300 rounded-xl px-2 lg:px-3 py-1.5 lg:py-2 bg-white cursor-pointer -translate-x-12 lg:-translate-x-16"
        >
          <div className="pill-icon bg-blue-100 text-blue-600 p-1.5 rounded-md mr-2">
            <LuCog className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </div>
          <span className="text-[10px] lg:text-xs font-semibold uppercase tracking-wide text-gray-900">SMART AUTOMATION</span>
        </div>
        <div 
          ref={el => pillRefs.current[1] = el}
          className="flex items-center border border-dashed border-gray-300 rounded-xl px-2 lg:px-3 py-1.5 lg:py-2 bg-white cursor-pointer"
        >
          <div className="pill-icon bg-blue-100 text-blue-600 p-1.5 rounded-md mr-2">
            <LuBrain className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </div>
          <span className="text-[10px] lg:text-xs font-semibold uppercase tracking-wide text-gray-900">DEEP LEARNING</span>
        </div>
      </div>

      {/* RIGHT pills (absolutely positioned) */}
      <div ref={rightGroupRef} className="absolute left-1/2 top-1/2 translate-x-[20px] lg:translate-x-[100px] -translate-y-[80px] space-y-3 lg:space-y-4">
        <div 
          ref={el => pillRefs.current[2] = el}
          className="flex items-center border border-dashed border-gray-300 rounded-xl px-2 lg:px-3 py-1.5 lg:py-2 bg-white cursor-pointer"
        >
          <div className="pill-icon bg-blue-100 text-blue-600 p-1.5 rounded-md mr-2">
            <LuSparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </div>
          <span className="text-[10px] lg:text-xs font-semibold uppercase tracking-wide text-gray-900">AI-POWERED</span>
        </div>
        <div 
          ref={el => pillRefs.current[3] = el}
          className="flex items-center border border-dashed border-gray-300 rounded-xl px-2 lg:px-3 py-1.5 lg:py-2 bg-white cursor-pointer translate-x-12 lg:translate-x-16"
        >
          <div className="pill-icon bg-blue-100 text-blue-600 p-1.5 rounded-md mr-2">
            <LuTrendingUp className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </div>
          <span className="text-[10px] lg:text-xs font-semibold uppercase tracking-wide text-gray-900">STRATEGIC EDGE</span>
        </div>
      </div>
    </div>
  )
}

export default Pill3