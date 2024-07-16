"use client"
import Image from "next/image"
import key_features from '@/assets/home/key_features.png'
import { sarabun_bold, sarabun_regular, opensans_bold, opensans_regular } from "@/app/font"
import { FaArrowLeftLong } from "react-icons/fa6";

const KeyFeatures = () => {
    return (
        <section className="bg-white pt-20">
            <div className="bg-[#FEF1F199] w-10/12 rounded-lg mx-auto pt-[30px]  px-[48px]">
                <div className="max-w-7xl mx-auto pb-10">
                    <h2 className={`text-[32px] leading-[48px] ${sarabun_bold} text-primary_text mb-8`}>Our Key Features</h2>
                    <div className="flex  justify-between relative">

                        <div className="w-[438px] flex flex-col gap-6">
                            <div>
                                                                              {/* // text-[#C11513FF] */}
                                <h3 className={`${opensans_bold} leading-[26px]  text-red-600 mb-2`}>AI Recruitment Portal</h3>
                                <p className={`${sarabun_regular} text-primary_text leading-[26px]`}>Automate and streamline your hiring process with intelligent candidate matching and predictive analytics.</p>
                            </div>
                            <div>
                                                                               {/* // text-[#C11513FF] */}
                               
                                <h3 className={`${opensans_bold} leading-[26px]  text-red-600 mb-2`}>Cloud Payroll Software</h3>
                                <p className={`${sarabun_regular} text-primary_text leading-[26px]`}>Simplify payroll management with automated calculations, compliance tracking, and digital payslips.</p>
                            </div>
                            <div>
                                                                                {/* // text-[#C11513FF] */}
                              
                                <h3 className={`${opensans_bold} leading-[26px]  text-red-600 mb-2`}>Performance Management</h3>
                                <p className={`${sarabun_regular} text-primary_text leading-[26px]`}>Set goals, track progress, and conduct performance reviews seamlessly within our platform.</p>
                            </div>
                            <div>
                                <h3 className={`${opensans_bold} leading-[26px]  text-red-600 mb-2`}>Employee Self-Service</h3>
                                <p className={`${sarabun_regular} text-primary_text leading-[26px]`}>Empower your employees with access to their personal information, payslips, and leave management through a user-friendly interface.</p>
                            </div>
                        </div>
                        <div className="absolute -top-[165px] left-[529px]">
                            <Image src={key_features} alt="Comprehensive HR Solutions" className="w-[608px] h-[539px]" />
                        <button onClick={()=> console.log("#")} className={`bg-primary_bg ${opensans_regular} absolute left-[380px] flex items-center gap-x-4 justify-center text-white px-6  py-2 hover:text-[#FFFFFFFF] hover:bg-[#A01210FF] rounded-full`}> View Services 
                            <FaArrowLeftLong/>
                            </button>     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyFeatures
