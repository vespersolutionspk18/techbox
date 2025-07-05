"use client";
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)
  const crossRef = useRef(null)

  useEffect(() => {
    if (!menuRef.current) return
    
    if (isMenuOpen) {
      gsap.to(hamburgerRef.current, { opacity: 0, scale: 0.8, duration: 0.2 })
      gsap.to(crossRef.current, { opacity: 1, scale: 1, duration: 0.2, delay: 0.1 })
      gsap.set(menuRef.current, { display: 'block' })
      gsap.fromTo(menuRef.current, 
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
      )
    } else {
      gsap.to(crossRef.current, { opacity: 0, scale: 0.8, duration: 0.2 })
      gsap.to(hamburgerRef.current, { opacity: 1, scale: 1, duration: 0.2, delay: 0.1 })
      gsap.to(menuRef.current, { 
        opacity: 0, 
        y: -20, 
        scale: 0.95, 
        duration: 0.3, 
        ease: "power2.in",
        onComplete: () => gsap.set(menuRef.current, { display: 'none' })
      })
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (menuRef.current) {
      gsap.set(menuRef.current, { display: 'none', opacity: 0, y: -20, scale: 0.95 })
    }
  }, [])

  return (
    <div className="bg-black/97 p-5 lg:p-6 w-full flex items-center justify-center  text-white relative">
        <div className="flex flex-row w-full lg:w-3/4 xl:w-2/3 justify-between items-center px-4 py-2  bg-stone-600/45 rounded-lg">
            <Image 
                src="/assets/lance-white.svg"
                width={100}
                height={80}
                alt="lance logo"
            />
            <div className=" flex-row hidden lg:flex" id="here">
                <div className="flex items-center gap-5 xl:gap-8 text-xs">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer">SERVICES</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer">ABOUT US</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer">CASE STUDIES</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer">CAREERS</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors hover:cursor-pointer">| SOFTREACH</a>
                </div>
                
            </div>
            <Button variant="default" className="hidden lg:block ml-8 text-black bg-white text-xs hover:bg-stone-100 hover:text-black hover:cursor-pointer">CONTACT</Button>
            <div className="lg:hidden cursor-pointer w-6  h-6 flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <RxHamburgerMenu 
                    ref={hamburgerRef}
                    className="text-white absolute" 
                    size={25} 
                />
                <RxCross1 
                    ref={crossRef}
                    className="text-white absolute opacity-0" 
                    size={25} 
                />
            </div>
        </div>
        
        <div ref={menuRef} className={`lg:hidden absolute left-5 right-5 top-full p-4 bg-stone-600/45 rounded-lg z-50 ${!isMenuOpen ? 'pointer-events-none' : ''}`}>
          <div className="flex flex-col gap-1 text-md">
            <a href="#" className="text-white hover:text-gray-300 transition-colors hover:cursor-pointer">SERVICES</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors hover:cursor-pointer">ABOUT US</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors hover:cursor-pointer">CASE STUDIES</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors hover:cursor-pointer">CAREERS</a>
            <div className="h-[1px] w-full bg-stone-600 my-2">

            </div>
            <a href="#" className="text-white hover:text-gray-300 transition-colors hover:cursor-pointer">SOFTREACH</a>
            <Button variant="default" className="mt-6 text-black bg-white hover:text-white text-xs">CONTACT</Button>
          </div>
        </div>
    </div>
  )
}

export default Header