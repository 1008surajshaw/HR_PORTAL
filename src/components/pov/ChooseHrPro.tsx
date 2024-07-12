import Image from "next/image";
import choose_hr_pro from "@/assets/home/choose_hr_pro.png";
import { sarabun_bold ,opensans_regular,sarabun_regular} from "@/app/font";
const ChooseHrPro=()=>{
    return (
        <section className="bg-white ">
            <div className="bg-[#FEF1F199] w-10/12 rounded-lg mx-auto py-[38px] px-[48px]">

        <div className="max-w-7xl mx-auto">
          <h2 className={`text-[32px] leading-[48px] ${sarabun_bold} text-primary_text mb-8`}>Why Choose HrPro?</h2>
          <div className="flex  justify-between">

          <div className="w-[438px] flex flex-col gap-6">
            <div>
              <h3 className={`${opensans_regular} leading-[26px] font-semibold text-red-500 mb-4`}>Comprehensive HR Solutions</h3>
              <p className={`${sarabun_regular} text-primary_text leading-[26px]`}>From recruitment to payroll, we offer a full suite of services to manage your HR functions seamlessly.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-4">AI-Driven Recruitment</h3>
              <p className="text-gray-700">From recruitment to payroll, we offer a full suite of services to manage your HR functions seamlessly.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-4">Cloud-Based Payroll</h3>
              <p className="text-gray-700">Our secure, cloud-based payroll software ensures accuracy, compliance, and ease of use, enabling you to manage payroll from anywhere.</p>
            </div>
          </div>
          <div className="">
            <Image src={choose_hr_pro} alt="Comprehensive HR Solutions" className="w-[625px] h-[410px]" />
           
          </div>
          </div>
        </div>
            </div>
      </section>
    )
}
export default ChooseHrPro;