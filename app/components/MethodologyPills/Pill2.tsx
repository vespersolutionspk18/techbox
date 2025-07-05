'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { LuX, LuCheck, LuClock, LuZap, LuChevronRight } from 'react-icons/lu'

const Pill2 = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const beforeBlockRef = useRef<HTMLDivElement>(null)
  const afterBlockRef = useRef<HTMLDivElement>(null)
  const arrowContainerRef = useRef<HTMLDivElement>(null)
  const arrowRefs = useRef<(HTMLElement | null)[]>([])
  const beforeIconRef = useRef<HTMLDivElement>(null)
  const afterIconRef = useRef<HTMLDivElement>(null)
  const beforeBadgeRef = useRef<HTMLDivElement>(null)
  const afterBadgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Set initial states
    gsap.set([beforeBlockRef.current, afterBlockRef.current], { 
      opacity: 0, 
      scale: 0.8,
      y: 20 
    })
    gsap.set(arrowContainerRef.current, { 
      opacity: 0, 
      scale: 0,
      rotationY: 90
    })
    gsap.set(arrowRefs.current, { 
      x: -30, 
      opacity: 0 
    })
    gsap.set([beforeIconRef.current, afterIconRef.current], {
      scale: 0,
      rotation: -180
    })
    gsap.set([beforeBadgeRef.current, afterBadgeRef.current], {
      scale: 0,
      opacity: 0
    })

    // Animate before block
    tl.to(beforeBlockRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    })

    // Animate before icon
    .to(beforeIconRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: 'back.out(3)'
    }, '-=0.4')

    // Animate before badge
    .to(beforeBadgeRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.2')

    // Animate arrow container
    .to(arrowContainerRef.current, {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.2')

    // Animate arrows sequentially
    .to(arrowRefs.current, {
      x: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.3')

    // Animate after block
    .to(afterBlockRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.2')

    // Animate after icon with electric effect
    .to(afterIconRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.4')

    // Animate after badge
    .to(afterBadgeRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.2')

    // Add continuous subtle animations
    gsap.to(beforeIconRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: 'none'
    })

    // Create a subtle electric glow effect for the zap icon
    gsap.to(afterIconRef.current, {
      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    // Add hover animations
    const addHoverAnimation = (element: HTMLElement | null, icon: HTMLElement | null) => {
      if (!element || !icon) return

      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          scale: 1.03,
          duration: 0.3,
          ease: 'power2.out'
        })
        gsap.to(icon, {
          scale: 1.2,
          rotation: 15,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    }

    addHoverAnimation(beforeBlockRef.current, beforeIconRef.current)
    addHoverAnimation(afterBlockRef.current, afterIconRef.current)

    // Hover animation for arrow container
    if (arrowContainerRef.current) {
      arrowContainerRef.current.addEventListener('mouseenter', () => {
        gsap.to(arrowRefs.current, {
          x: 5,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out'
        })
      })

      arrowContainerRef.current.addEventListener('mouseleave', () => {
        gsap.to(arrowRefs.current, {
          x: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power2.out'
        })
      })
    }

  }, [])

  return (
    <div ref={containerRef} className="flex justify-center items-center gap-6 py-10">
      {/* Before Block */}
      <div ref={beforeBlockRef} className="border border-dashed border-gray-300 rounded-2xl p-6 w-64 relative cursor-pointer">
        <div ref={beforeBadgeRef} className="absolute top-4 left-4 border border-gray-300 rounded-md w-6 h-6 flex items-center justify-center text-gray-400">
          <LuX className="w-4 h-4" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-8">
          <div ref={beforeIconRef} className="text-gray-400">
            <LuClock className="w-16 h-16" />
          </div>
          <p className="text-center text-sm text-gray-500">Slow processes, missed deadlines</p>
        </div>
        <div className="mt-10 border border-gray-300 rounded-xl p-3 text-center bg-gray-50">
          <p className="text-xs font-semibold tracking-wide text-gray-900 uppercase">SLOW DELIVERY</p>
          <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">BEFORE LANCE</p>
        </div>
      </div>

      {/* Arrow */}
      <div ref={arrowContainerRef} className="bg-blue-100 rounded-md p-3 flex items-center cursor-pointer">
        <LuChevronRight ref={el => arrowRefs.current[0] = el} className="w-5 h-5 text-blue-600" />
        <LuChevronRight ref={el => arrowRefs.current[1] = el} className="w-5 h-5 text-blue-600 -ml-2" />
        <LuChevronRight ref={el => arrowRefs.current[2] = el} className="w-5 h-5 text-blue-600 -ml-2" />
      </div>

      {/* After Block */}
      <div ref={afterBlockRef} className="border border-dashed border-gray-300 rounded-2xl p-6 w-64 relative cursor-pointer">
        <div ref={afterBadgeRef} className="absolute top-4 left-4 border border-blue-300 rounded-md w-6 h-6 flex items-center justify-center bg-blue-50">
          <LuCheck className="w-4 h-4 text-blue-600" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-8">
          <div ref={afterIconRef} className="text-blue-600">
            <LuZap className="w-16 h-16" />
          </div>
          <p className="text-center text-sm text-gray-500">MVP in weeks, not months</p>
        </div>
        <div className="mt-10 border border-blue-300 rounded-xl p-3 text-center bg-blue-50">
          <p className="text-xs font-semibold tracking-wide text-gray-900 uppercase">AGILE DELIVERY</p>
          <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">AFTER LANCE</p>
        </div>
      </div>
    </div>
  )
}

export default Pill2