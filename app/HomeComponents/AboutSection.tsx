import React from 'react'
import SimpleButton from '../components/SimpleButton'

const AboutSection = () => {
  return (
    <div className="px-5 lg:px-10 w-full font-sans bg-black/97">
        <div className="text-white max-w-[370px] text-md bg-lgrey rounded-lg flex flex-col gap-8 p-4">
            <h5 className="font-bold">Unlock the limitless power of modern technology with us, custom built for your needs</h5>
            <SimpleButton text="READ MORE" route="/contact" />

        </div>

    </div>
  )
}

export default AboutSection