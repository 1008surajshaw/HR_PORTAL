"use client"
import { opensans_regular, sarabun_bold } from '@/app/font';
import member1 from "@/assets/about/member1.png"
import member2 from "@/assets/about/member2.png"
import member3 from "@/assets/about/member3.png"
import Image from 'next/image';
const teamMembers = [
  {
    name: 'Alessandra Hoover',
    title: 'Professional title',
    description: 'Commodo qui nulla ipsum ea cupidatat sit aliquip dolor.',
    image: member1, // Replace with actual image URL
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sharon Devarpiya',
    title: 'Founder & CEO',
    description: 'Commodo qui nulla ipsum ea cupidatat sit aliquip dolor.',
    image: member2, // Replace with actual image URL
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sharon Devarpiya',
    title: 'Founder & CEO',
    description: 'Commodo qui nulla ipsum ea cupidatat sit aliquip dolor.',
    image: member3, // Replace with actual image URL
    linkedin: '#',
    twitter: '#',
  },
];

const TeamMembers = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg  mx-auto mt-8 py-12">
      <h2 className={`text-[48px] leading-[68px] text-[#171A1FFF] ${sarabun_bold} text-center`}>Our Team</h2>
      <div className='w-10/12 mx-auto'>
      <p className={`text-[18px]  text-center my-8  leading-[28px] ${opensans_regular} text-[#171A1FFF]`}>
        At HrPro, our success is driven by a dedicated team of professionals who embody our core values of innovation, integrity, client-centricity, and continuous improvement. Get to know the individuals who make HrPro possible:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white   rounded-lg shadow-lg text-center">
            <Image src={member.image} alt={member.name} className="w-60 h-32 mx-auto rounded-full mb-4" />
            <div className='bg-[#FEF1F199]'>

            <h3 className="text-xl font-semibold mb-2 pt-3">{member.name}</h3>
            <p className="text-red-600 mb-2">{member.title}</p>
            <p className="text-gray-700 mb-4">{member.description}</p>
            <div className="flex justify-center space-x-4 py-3">
              <a href={member.linkedin} className="text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 24v-14.766c0-5.225-1.113-9.234-7.197-9.234-3.04 0-5.112 1.668-5.954 3.255h-.083v-2.765h-4.766v14.766h4.766v-7.766c0-2.078.416-4.234 3.068-4.234 2.611 0 2.652 2.384 2.652 4.359v7.641h4.766zm-19.492-24h-4.773v14.766h4.773v-14.766zm-2.386-9.234c-1.568 0-2.614 1.045-2.614 2.417 0 1.362 1.028 2.417 2.578 2.417h.033c1.594 0 2.614-1.055 2.614-2.417-.033-1.372-1.052-2.417-2.611-2.417zm-2.265 24h4.766v-14.766h-4.766v14.766z"/>
                </svg>
              </a>
              <a href={member.twitter} className="text-blue-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.389-1.83.654-2.828.775 1.017-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.918 2.2-4.918 4.917 0 .385.043.76.127 1.122-4.086-.205-7.71-2.165-10.14-5.144-.424.725-.666 1.565-.666 2.465 0 1.701.866 3.197 2.185 4.075-.804-.025-1.56-.246-2.222-.616v.062c0 2.374 1.688 4.354 3.93 4.8-.411.111-.846.171-1.294.171-.316 0-.624-.031-.927-.089.625 1.953 2.444 3.374 4.6 3.415-1.683 1.318-3.808 2.105-6.115 2.105-.397 0-.79-.023-1.175-.067 2.179 1.396 4.768 2.209 7.548 2.209 9.051 0 14-7.498 14-13.986 0-.213-.004-.425-.014-.636.961-.695 1.795-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TeamMembers;
