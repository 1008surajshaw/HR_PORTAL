import React from 'react'
import Image from 'next/image'
import about_heroImage from '@/assets/about/about_heroimage.png'
import { sarabun_bold,sarabun_regular } from '@/app/font'
const LandingPage = () => {
  return (
    <div className='bg-[#FEF1F199] min-h-screen'>

    <div className="  w-10/12 mx-auto ">
      <div className="flex justify-between items-center py-12">
        
          <div className="md:w-2/5 -mt-16">
            <h1 className={`text-[52px] ${sarabun_bold} leading-[74px] text-primary_text  mb-4`}>About HrPro</h1>
            <p className={`text-[20px] text-primary_text ${sarabun_regular} leading-[30px]`}>
              Welcome to HrPro – an innovative HR Outsourcing and Consulting Firm dedicated to helping
              businesses achieve strategic people goals through cutting-edge technology. Our AI-driven platform
              and cloud-based solutions are specifically designed for SMEs to streamline HR processes, enhance
              employee engagement, and drive long-term success.
            </p>
          </div>
          <div className="md:w-2/5  relative mt-8 md:mt-0">
            
              <Image src={about_heroImage} alt="About HrPro" className='h-[643px] w-[572px]'  />
             
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage
