import React from 'react'
import { sarabun_bold } from '@/app/font'
const HeritageTimeline = () => {
  return (
    <div className="bg-white min-h-screen py-12">

      <div className="w-10/12 mx-auto px-6">
        <div className="flex justify-between">
          <div className='w-2/5 flex gap-6'>
          <div>
           <div className='h-[54px] w-[60px] bg-[#C11513FF]'/>
           
          </div>
          <div>

            <h2 className={`text-[32px] leading-[48px] text-[#171A1FFF] mb-2 ${sarabun_bold} `}>Vision</h2>
            <p className="text-gray-800">
              HrPro's vision is to empower organizations globally with innovative HR solutions that drive success and inspire growth. We aim to be the premier partner, optimizing HR processes and fostering thriving work cultures for our clients to achieve their strategic objectives in a dynamic marketplace.
            </p>
          </div>
          </div>
          <div className='w-2/5 flex gap-6'>
          <div>
          <div className='h-[54px] w-[60px] bg-[#C11513FF]'/>
          </div>
          <div>

            <h2 className={`text-[32px] leading-[48px] text-[#171A1FFF] mb-2 ${sarabun_bold}`}>Mission</h2>
            <p className="text-gray-800">
              HrPro's mission is to provide customized HR solutions that drive growth and empower organizations. Through AI integration and cloud technology, we streamline processes, enhance engagement, and foster a productive work environment to maximize our clients' potential and long-term success.
            </p>
          </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Our Heritage</h2>
          <p className="text-center text-gray-500 mb-12">Core Values</p>
          <div className="relative">
            <div className="absolute w-0.5 bg-gray-200 h-full left-1/2 transform -translate-x-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="bg-white p-4 rounded-md shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-2">2021</h3>
                  <p className="text-gray-800"><strong>Product Launch (2021):</strong> Founded in the UK, HrPro has been committed to transforming HR through innovation and excellence. Introduced our HR management services in the market and registered as a company in the UK.</p>
                </div>
                <div className="absolute w-3 h-3 bg-red-600 rounded-full top-1/2 transform -translate-y-1/2 left-full ml-2"></div>
              </div>
              <div className="relative">
                <div className="bg-white p-4 rounded-md shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-2">2022</h3>
                  <p className="text-gray-800"><strong>Strategic Market Entry (2022):</strong> Launched comprehensive HR solutions, building a robust foundation and establishing a strong foothold in the market.</p>
                </div>
                <div className="absolute w-3 h-3 bg-red-600 rounded-full top-1/2 transform -translate-y-1/2 right-full mr-2"></div>
              </div>
              <div className="relative">
                <div className="bg-white p-4 rounded-md shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-2">2023</h3>
                  <p className="text-gray-800"><strong>Global Diversification (2023):</strong> Established HrPro AMS in Amsterdam, Netherlands, aiming to serve a diverse international clientele solidifying our commitment to serving a diverse and international clientele.</p>
                </div>
                <div className="absolute w-3 h-3 bg-red-600 rounded-full top-1/2 transform -translate-y-1/2 left-full ml-2"></div>
              </div>
              <div className="relative">
                <div className="bg-white p-4 rounded-md shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-2">2024</h3>
                  <p className="text-gray-800"><strong>Innovation and Expansion (2024):</strong> Launching our flagship HR management software for recruitment and payroll, enhancing efficiency and user experience with AI integration.</p>
                </div>
                <div className="absolute w-3 h-3 bg-red-600 rounded-full top-1/2 transform -translate-y-1/2 right-full mr-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeritageTimeline
