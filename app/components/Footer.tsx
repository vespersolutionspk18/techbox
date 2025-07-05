"use client";
import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import FooterLogo from './FooterLogo';

const Footer = () => {

  return (
    // Preserving ALL original Footer class names and structure
    <footer className="font-sans w-full pt-10 pb-5 px-6 xl:px-12 font-light tracking-tight leading-tight bg-black">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-30"> {/* Original mb-30 */}
          <div className="flex flex-col gap-5 md:w-[40%]"> {/* Original gap/width */}
            <h5 className="text-2xl text-white leading-[1.1]">Embrace the future of technology with our comprehensive skillset.</h5> {/* Original text style */}
            <div className="flex flex-row mb-10 md:mb-0 gap-5 text-md text-stone-400"> {/* Original structure/style */}
              {/* Using original h5 tags for consistency with provided code */}
              <h5>info@lancesystems.com</h5>
              <h5>+1 650-660-9812</h5>
            </div>
          </div>
          <div className="flex gap-5 justify-end md:w-[60%] flex-row"> {/* Original structure/style */}
            {/* Original Navigation structure and styling */}
            <div className="flex flex-col md:w-1/3 text-white text-xl">
              <Link href="/">
                <h5 className="hover:text-stone-400">Home</h5>
              </Link>
              <Link href="/about">
                <h5 className="hover:text-stone-400">About</h5>
              </Link>
              <Link href="/services">
                <h5 className="hover:text-stone-400">Services</h5>
              </Link>
              <Link href="/#projects">
                <h5 className="hover:text-stone-400">Case Studies</h5>
              </Link>
         
              <Link href="/contact">
                <h5 className="hover:text-stone-400">Contact</h5>
              </Link>
            </div>
            {/* Original Services links structure and styling */}
            <div className="flex flex-col md:w-1/3 text-white text-xl">
              <Link href="/services/enterprise-software-development">
                <h5 className="hover:text-stone-400">Software Development</h5>
              </Link>
              <Link href="/services/web-development">
                <h5 className="hover:text-stone-400">Web Development</h5>
              </Link>
              <Link href="/services/mobile-development">
                <h5 className="hover:text-stone-400">Mobile Development</h5>
              </Link>
              <Link href="/services/ai-ml-consulting">
                <h5 className="hover:text-stone-400">AI & ML Consulting</h5>
              </Link>
              <Link href="/services/erp-consulting">
                <h5 className="hover:text-stone-400">ERP Consulting</h5>
              </Link>
              <Link href="/services/cloud-consulting">
                <h5 className="hover:text-stone-400">Cloud Consulting</h5>
              </Link>
            </div>
          </div>
        </div>
        {/* Original Logo */}
        <div className="mt-10">
          <FooterLogo className="w-full h-auto text-black/35 lg:text-black/75 lg:[filter:drop-shadow(1px_1px_0px_rgba(0,0,0,0.1))_drop-shadow(-1px_-1px_0px_rgba(255,255,255,0.2))]" />
        </div>
        {/* Original Separator section */}
        <div className="pt-10 pb-5">
          <Separator className="bg-stone-800" />
        </div>
        {/* Original Bottom bar structure and styling */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-stone-400">
          <div className="flex gap-3 md:gap-0 md:space-x-6">
            <span>© LANCE SYSTEMS</span>
            
          </div>
          <div className="flex gap-3 md:gap-0 md:space-x-6">
           
            <Link href="https://linkedin.com" className="hover:text-white">PRIVACY POLICY</Link>
            <Link href="https://twitter.com" className="hover:text-white">TERMS & CONDITIONS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Ensure Footer remains the default export