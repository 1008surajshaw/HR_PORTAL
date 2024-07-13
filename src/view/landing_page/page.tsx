import React from 'react'
import LandingPage from '@/components/pov/LandingPage'
import ChooseHrPro from '@/components/pov/ChooseHrPro'
import KeyFeatures from '@/components/pov/KeyFeatures'
import Testimonials from '@/components/pov/Testimonials'
import Blogs from '@/components/pov/Blogs'
const HomePage = () => {
  return (
    <div>
        <LandingPage/>
        <ChooseHrPro/>
        <KeyFeatures/>
        <Testimonials/>
        <Blogs/>
       

    </div>
  )
}

export default HomePage
