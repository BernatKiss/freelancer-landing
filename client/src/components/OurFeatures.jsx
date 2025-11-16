import React from 'react'
import Title from './Title'
import FeaturesCard from './FeaturesCard'

const OurFeatures = () => {
  return (
    <div className='p-1 bg-[#F8F8F8]'>
      <Title title='Our' green='Features' desc='Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.'/>
      <div className='flex flex-col items-center'>
         <FeaturesCard />
      </div>
      <div className='flex items-center justify-center my-20'>
         <button className="px-15 py-3 border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-500">Explore All</button>
      </div>
    </div>
  )
}

export default OurFeatures