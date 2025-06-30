import React from 'react'
import MethodologyMobile from '../components/MethodologyMobile'
import Methodology from '../components/Methodology'

const MethodologyPreSection = () => {
  return (
    <div className="flex flex-col bg-black/97 items-center w-full">
        <h3 className="font-sans text-stone-100 text-3xl lg:text-4xl xl:text-6xl py-32 text-center px-10 md:px-0 md:max-w-3/4">We&apos;re not just a tech company, we empower our customers, building smart, scalable and stunning digital solutions that drive growth </h3>
<div className="block lg:hidden w-full">
<MethodologyMobile />
</div>

<div className="hidden lg:block w-full">
<Methodology />
</div>
    </div>
  )
}

export default MethodologyPreSection