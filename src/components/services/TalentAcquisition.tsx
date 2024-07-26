import React from 'react'
import { opensans_regular, sarabun_bold,sarabun_regular } from '@/app/font'
import Image from 'next/image'
import service_heroimage from '@/assets/service/service_heroimage.png'
import star from '@/assets/service/star.png'
const TalentAcquisition = () => {
  return (
   <div className='w-10/12 mx-auto relative mb-16'>
      <h2 className={`text-[32px] mt-3 leading-[56px] ${sarabun_bold} text-[#C11513FF]`}>
      Talent Acquisition with HrPro Recruit
      </h2>
      <div className='flex justify-between gap-8 items-center mt-6'>
        <div className='w-1/4 flex flex-col items-center gap-3'>
           <h3 className={`text-[20px] leading-[36px] ${sarabun_bold} text-[#171A1FFF]`}>
           Try HrPro Recruit for Free
           </h3>
           <p className={`${sarabun_regular} text-[18px] leading-[30px] text-center text-[#171A1FFF]`}>Experience HrPro Recruit with our 30-day free trial. Explore all features and streamline your hiring process effortlessly.</p>
           <button className={`${opensans_regular} mt-4 py-2 px-3 w-max rounded-full bg-[#C11513FF] text-white`}>Sign up today!</button>
        </div>
        <div className='w-3/4 flex flex-col '>
          <Image alt='service'  src={service_heroimage} />
          <p className={`text-center  ${opensans_regular} text-[18px] leading-[30px] text-[#171A1FFF]`}>Transforming Talent Acquisition with HrPro Portal: Efficiency, Precision, and Innovation in Recruitment</p>
        </div>
      </div>
      <Image src={star} alt='star' className='absolute top-[500px] left-[300px] h-[65px] w-[65px] rotate-[330deg]' />
   </div>
  )
}

export default TalentAcquisition