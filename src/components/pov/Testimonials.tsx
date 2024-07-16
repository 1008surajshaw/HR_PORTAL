"use client"
import Image from "next/image"
import testimonial from '@/assets/home/testimonial.jpg'
import { opensans_bold, opensans_regular } from "@/app/font"
import { FaArrowLeftLong } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <section className="bg-white py-8 ">
    <div className="w-10/12 mx-auto">
      <div className="text-center mb-8">
        <button className={`border border-red-600 ${opensans_regular} text-[18px] leading-[28px] text-red-600 px-6 py-2 rounded-md hover:bg-red-600 hover:text-white`}>Browse all Services</button>
      </div>
      <div className="bg-[#FEF1F199]  h-[371px] rounded-md ">
        <div className="w-9/12 mx-auto flex items-center">

        <div className="w-2/4">
          <Image src={testimonial} alt="Client Image" className="w-[285px] h-[371px]"  />
        </div>
        <div className="w-2/4 ">
          <h2 className={`text-[24px] leading-[36px] ${opensans_bold}  text-red-600 mb-4`}>Testimonials</h2>
          <h3 className={`leading-[26px] ${opensans_bold} text-red-600 mb-2`}>What Our Clients Say:</h3>
          <p className={`text-primary_text text-[18px] leading-[28px] ${opensans_regular} mb-4`}>"HrPro has transformed our hiring process. The AI recruitment portal is a game-changer"</p>
          <p className={`text-primary_text ${opensans_regular} text-[14px] leading-[22px] `}>Jane Doe, CEO of TechStart</p>
          <div className="mt-4">
            <button className={`border ${opensans_regular} gap-x-3 text-[14px] leading-[22px] flex items-center justify-center border-red-600 text-red-600 px-6 py-2 rounded-md  hover:bg-red-600 hover:text-white`}>Next
          <FaArrowLeftLong/>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials
