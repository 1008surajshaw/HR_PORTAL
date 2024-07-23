import React from 'react'
import { sarabun_bold,sarabun_regular } from '@/app/font'
import Image from 'next/image'
const TalentAcquisition = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white py-10 px-5 lg:px-20">
    <div className="flex flex-col items-start mb-10 lg:mb-0 lg:mr-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-red-600 mb-4">
        Talent Acquisition with HrPro Recruit
      </h2>
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg mb-4">
        <p className="text-lg font-semibold mb-2">Try HrPro Recruit for Free</p>
        <p className="text-gray-700 mb-4">
          Experience HrPro Recruit with our 30-day free trial. Explore all features and streamline your hiring process effortlessly.
        </p>
        <button className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700">
          Sign up today!
        </button>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <img src="https://via.placeholder.com/400x200" alt="People working on laptops" className="rounded-lg shadow-lg" />
    </div>
    <div className="mt-4 lg:mt-0 lg:ml-10 text-center lg:text-left">
      <p className="text-gray-600">
        Transforming Talent Acquisition with HrPro Portal: Efficiency, Precision, and Innovation in Recruitment
      </p>
    </div>
  </div>
  )
}

export default TalentAcquisition