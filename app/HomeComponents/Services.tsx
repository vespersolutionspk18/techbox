"use client";
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button';
import ArrowButton from '@/components/Arrowbutton';

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const services = [
    {
      id: 'planning',
      title: 'Planning and Strategy',
      content: 'We help define your data architecture, analytics roadmap, and implementation strategy to ensure your data initiatives align with business goals.'
    },
    {
      id: 'bigdata',
      title: 'Big Data Processing',
      content: 'Our expertise in distributed computing frameworks enables processing of massive datasets efficiently, providing real-time insights and batch analytics.'
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      content: 'We develop custom AI solutions including machine learning models, natural language processing, and computer vision to automate and enhance your business processes.'
    },
    {
      id: 'visualization',
      title: 'Data Visualization',
      content: 'Transform complex data into intuitive, interactive dashboards and reports that enable data-driven decision making across your organization.'
    },
    {
      id: 'deployment',
      title: 'Deployment and Monitoring',
      content: 'We ensure smooth deployment of data solutions with continuous monitoring, performance optimization, and scalability to meet your growing needs.'
    }
  ]

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <div className="flex flex-col bg-black/97 px-6 lg:px-10 w-full">
        <h3 className="font-sans text-stone-100 text-3xl lg:text-4xl xl:text-6xl pt-32 pb-16  ">Let&apos;s cut to the chase. We do a select few things, and we do them exceptionally well: creating impactful AI solutions, developing custom software, and providing expert cloud engineering, all designed to solve your toughest challenges and drive significant growth.</h3>
        <div className="pb-16">
            <ArrowButton text="SERVICES" route="/contact" />
        </div>
        <div className="w-full   pb-32">
          <div className="bg-blue-700 rounded-xl p-5 lg:p-10 flex flex-col lg:flex-row">
            <div className="text-white text-md font-light lg:w-[45%] mb-16 lg:mb-0 flex flex-row lg:flex-col justify-between">
                <h2 className="">OUR SERVICES</h2>
                
            </div>
            
            <div className="space-y-4 lg:w-[55%]">
              {services.map((service) => (
                <div key={service.id} className="overflow-hidden">
                  <div className={`bg-white/95 hover:bg-white font-sans transition-all duration-300 rounded-md ${
                    expandedService === service.id ? '' : ''
                  }`}>
                    <button
                      onClick={() => toggleService(service.id)}
                      className="w-full px-6 py-5 flex  items-center justify-between group"
                    >
                      <span className="text-gray-900 text-xl md:text-xl font-bold tracking-tight text-left">
                        {service.title}
                      </span>
                      <ChevronDown 
                        className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${
                          expandedService === service.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedService === service.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-5 text-gray-700 font-sans text-base leading-relaxed">
                        {service.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services