import React from 'react'
import Image from 'next/image'
import value1 from "@/assets/about/value1.png"
import value2 from "@/assets/about/value2.png"
const CoreValue = () => {
  return (
    <div className='bg-white min-h-screen py-12'>
    <div className="w-10/12 mx-auto px-6">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Core Values</h2>
      <div className='flex '>
        <div className='flex flex-col w-7/12'>
            <p className="text-gray-700 mb-6">
                At HrPro, we prioritize innovation with cutting-edge HR solutions. Upholding integrity, transparency, and ethical practices is paramount. Our client-centric approach ensures personalized solutions through attentive listening. We foster ongoing learning and strive for excellence through continuous improvement.
            </p>
            <div className="md:w-1/2">
                <h3 className="text-lg font-semibold mb-2">Our Values</h3>
                <ul className="list-none space-y-2">
                    <li className="flex items-center">
                    <span className="text-red-600 mr-2">&rarr;</span>
                    <span>Innovation: Embracing cutting-edge HR technologies.</span>
                    </li>
                    <li className="flex items-center">
                    <span className="text-red-600 mr-2">&rarr;</span>
                    <span>Integrity: Upholding ethics and transparency.</span>
                    </li>
                    <li className="flex items-center">
                    <span className="text-red-600 mr-2">&rarr;</span>
                    <span>Client-Centric: Tailoring solutions to meet client needs.</span>
                    </li>
                    <li className="flex items-center">
                    <span className="text-red-600 mr-2">&rarr;</span>
                    <span>Continuous Improvement: Cultivating ongoing excellence.</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w-5/12 flex space-x-4">
          <div className="w-1/2 rounded-full overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Team" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 rounded-full overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>  
    </div>    
    </div>
  )
}

export default CoreValue