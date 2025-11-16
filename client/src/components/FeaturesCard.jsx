import React from 'react'
import { features } from '../assets/assets'

const FeaturesCard = () => {
  return (
    <div className="flex flex-wrap justify-center mt-20 gap-10">
      {features.map((feature)=>(
         <div className='group w-[350px] h-[342px] flex text-center  border border-[#D8D8D8] gap-10 transition-all duration-500 hover:shadow-2xl hover:bg-white' key={feature.id}>
            <div className='pt-10 pb-8'>
               <h3 className='font-bold text-xl transition-colors duration-500 group-hover:text-primary'>{feature.name}</h3>
               <p className='px-9 pt-[25px] pb-[40px] font-extralight'>{feature.desc}</p>
               <a href="" className='underline transition-colors duration-500 group-hover:text-primary'>Learn More</a>
            </div>
         </div>
      ))}
    </div>
  )
}

export default FeaturesCard