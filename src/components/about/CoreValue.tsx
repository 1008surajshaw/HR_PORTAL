import React from 'react'
import Image from 'next/image'
import value from "@/assets/about/value.png"
import redDot from "@/assets/about/redDot.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { opensans_regular, sarabun_bold } from '@/app/font';

const CoreValue = () => {
  return (
    <div className='bg-[#FEF1F199] min-h-screen py-12'>
      <div className="w-10/12 relative mx-auto flex justify-between">
      <Image alt='dotted' className='top-[-80px] absolute left-[1241px] w-[109px] h-[261px]' src={redDot}/>
        <div className="w-2/5">
        <h2 className={`text-[48px] leading-[68px] text-[#C11513FF] ${sarabun_bold} mb-4`}>Core Values</h2>
         <p className={`${opensans_regular} text-[18px] mb-3 leading-[28px] text-[#171A1FFF]`}>
         At HrPro, we prioritize innovation with cutting-edge HR solutions. Upholding integrity, transparency, and ethical practices is paramount. Our client-centric approach ensures personalized solutions through attentive listening. We foster ongoing learning and strive for excellence through continuous improvement.
         </p>

         <h3 className={`${sarabun_bold} text-[20px] leading-[30px] text-[#171A1FFF] mt-2`}>Our Values</h3>
         <ul className='flex flex-col gap-2 mt-3'>
          <li className='flex items-center'>
            <span className='text-[#C11513FF]'><MdOutlineKeyboardArrowRight fontSize={30} /></span>
            <span className={`text-[18px] leading-[28px] ${opensans_regular}`}>
            Innovation: Embracing cutting-edge HR technologies.
            </span>
          </li>
          <li className='flex items-center'>
          <span className='text-[#C11513FF]'><MdOutlineKeyboardArrowRight fontSize={30} /></span>
            <span className={`text-[18px] leading-[28px] ${opensans_regular}`}>
            Integrity: Upholding ethics and transparency.
            </span>
          </li>
          <li className='flex items-center'>
          <span className='text-[#C11513FF]'><MdOutlineKeyboardArrowRight fontSize={30} /></span>
            <span className={`text-[18px] leading-[28px] ${opensans_regular}`}>
            Client-Centric: Tailoring solutions to meet client needs.
            </span>
          </li>
          <li className='flex items-center'>
          <span className='text-[#C11513FF]'><MdOutlineKeyboardArrowRight fontSize={30} /></span>
            <span className={`text-[18px] leading-[28px] ${opensans_regular}`}>
            Continuous Improvement: Cultivating ongoing excellence.
            </span>
          </li>
         </ul>
        </div>
        <div className='w-2/5'>
         <Image alt='values' src={value} />
        </div>
      
      </div>
    </div>
  )
}

export default CoreValue