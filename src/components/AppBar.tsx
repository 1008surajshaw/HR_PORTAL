
import React from 'react'
import Link from 'next/link'
import {NavbarLinks} from '@/data/navbar-links'
import { sarabun_bold,opensans_regular } from '@/app/font'
const AppBar = () => {
  
  
  return (
    <div className='bg-primary_bg flex items-center  h-[62px]'>
      <div className='w-10/12 relative mx-auto flex justify-between items-center  '>

      <div className={`text-[30px] ${sarabun_bold}   leading-[46px]  text-white `}>
        HRPRO
      </div>
      

      <nav className={`flex ${opensans_regular}  gap-[15px] ` }>
      {
        NavbarLinks.map((data,i)=>(
          
          <li key={i} className={`list-none }`}>
            <Link  className='text-[14px] leading-[22px] font-normal text-white' href={data.path}>{data.title}</Link>
          </li>
          
        ))
      }
      </nav>
      
      </div>
    </div>
  )
}

export default AppBar