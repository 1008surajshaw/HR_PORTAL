"use client"
import hero_section_image from '@/assets/home/hero_section_image.png';
import { GoGoal } from "react-icons/go";
import { sarabun_bold,sarabun_regular,opensans_regular } from "@/app/font";
import Image from 'next/image'
import logo from '@/assets/logo/hrlogo.png'

const LandingPage = () => {
  return (
    <div className="bg-white flex flex-col">
       <div className='justify-center mr-14 flex flex-row w-[350px] h-[50px] mt-4'>
        <div className='w-[50px] h-[50px] mr-2'>
         <Image src={logo} alt='hr logo' className=''/>
        </div>
          <p className={`${sarabun_bold} text-black my-auto text-3xl`}>HrPro</p>
      </div>
      <div className="flex w-10/12 mx-auto pb-12 pt-5 flex-col  md:flex-row items-center justify-between mb-8 ">   
      <div className="md:w-2/5 mb-[80px]">
        <h1 className={`mb-4 font-bold ${sarabun_bold}  heading-large  text-black pr-2 w-[450px] pb-2`}>Shaping the Future of HR with AI and Cloud Integration</h1>
        <p className={`${sarabun_regular} mb-4 text-[16px] leading-[25px] text-primary_text`}>
          Welcome to HrPro - The innovative AI-driven platform for all your HR needs. Discover our AI recruitment portal and cloud-based payroll software with AI integration, designed specifically for SMEs.
        </p>
        {/* <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center space-x-2">
            <div className="bg-primary_bg text-white w-[48px] h-[48px] flex justify-center items-center rounded-full ">
              <GoGoal size={24}/>
            </div>
            <button onClick={()=>console.log("#")} className={`${opensans_regular} pl-2 text-[#C11513FF] leading-[26px]`}>CONTACT US</button>
          </div>
        </div> */}
        {/* <p className={`text-[25px] w-[375px] leading-[36px] ${sarabun_regular} text-[#171A1FFF] mb-8`}>Interested in connecting for info? Book a demo</p> */}
        <button onClick={()=> console.log("#")} className={`bg-primary_bg  text-white px-5  py-2 hover:text-[#FFFFFFFF] hover:bg-[#A01210FF] rounded-full mt-4 font-bold`}>Book a demo</button>
      </div>
      <div className="md:w-2/5 flex justify-center mt-8 md:mt-0 relative">
        <div className="w-[572px] h-[643px] relative">
          <Image src={hero_section_image} alt="My Projects"   /> 
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage
