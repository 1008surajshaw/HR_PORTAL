import React from 'react'
import LandingPage from '@/components/about/LandingPage'
import HeritageTimeline from '@/components/about/HeritageTimeline'
import CoreValue from '@/components/about/CoreValue'
import TeamMembers from '@/components/about/TeamMember'
const page = () => {
  return (
    <div>
      <LandingPage/>
      <HeritageTimeline/>
      <CoreValue/>
      <TeamMembers/>
    </div>
  )
}

export default page
