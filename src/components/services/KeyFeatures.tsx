'use client'
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import resume_scoring from '@/assets/service/resume_scoring.png'
const KeyFeatures = () => {
  return (
    <div>
        <div className="bg-[#C11513FF] rounded-[64px]">
            <div className="flex flex-col gap-4 w-max">
              <p className={`text-white`}>Key Features of HrPro Recruit: Enhance Your Recruitment Proces</p>
              <div className={`bg-white p-4 w-[338px] rounded-[24px]`}>
<h1>
  Scheduling of Interviews
</h1>
<p>Efficiently schedule interviews and sequence meetings according to predefined criteria, optimizing the hiring process.</p>
<button>
  <span>Learn More</span> 
  <span>
<MdOutlineKeyboardArrowRight/>
  </span>
</button>
 <div>
  <Image src={resume_scoring} alt="scheduling interview"  />
 </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default KeyFeatures
