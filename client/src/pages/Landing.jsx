import React from 'react'
import LandingNav from '../components/LandingNav'
import VegeInfo from '../components/VegeInfo'

const Landing = () => {
  return (
    <div className='grid place-items-center space-y-20'>
        <LandingNav />
        <VegeInfo />
    </div>
  )
}

export default Landing