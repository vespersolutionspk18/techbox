import React from 'react'
import Link from 'next/link'

interface ArrowButtonProps {
  text: string
  route: string
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, route }) => {
  return (
    <Link 
      href={route}
      className="inline-flex items-center gap-3 py-2 px-4 justify-center font-sans text-white bg-stone-700/20 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-300 hover:bg-white/10 group"
    >
      <span className="text-md font-mono tracking-tight">{text}</span>
      <svg 
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </Link>
  )
}

export default ArrowButton