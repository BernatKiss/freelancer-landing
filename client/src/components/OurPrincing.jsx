import React from 'react'
import Title from './Title'
import { FaCheckCircle } from "react-icons/fa";


const OurPrincing = () => {
  return (
    <div className='relative'>
      <div className='w-[523px] h-[650px] absolute -z-10 bg-[#F3F3F3] rotate-[64.77deg] -left-45 top-40'></div>
      <Title title='Our' green='Princing Plan'/>
      <div className='flex flex-wrap justify-center gap-10.5 my-4' >
         <div className='group bg-white w-[362px] h-[508px] border-2  relative z-90 border-[#D8D8D8] flex flex-col py-[20px] items-center transition-all duration-300 ease-out hover:-translate-y-6 hover:border-t-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]'>
            <h3 className='font-medium text-[30px] group-hover:text-primary transition-all duration-300'>For Starter</h3>
            <h2 className='font-bold text-[60px] group-hover:text-primary transition-all duration-300'>$59</h2>
            <ul className='list-none space-y-3 mt-[34px] mb-[49px]'>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Feedback Categorization</li>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Features prioritization</li>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Real-time collaboration</li>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Feedback loop notifications</li>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Essential dev tools integrations</li>
            </ul>
            <button className='w-[278px] h-[60px] border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>Request Demo</button>
         </div>

         <div className='group  relative z-90 w-[362px] h-[508px] border-2 border-[#D8D8D8] flex flex-col py-[20px] items-center transition-all duration-300 ease-out hover:-translate-y-6 hover:border-t-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]'>
            <h3 className='font-medium text-[30px] group-hover:text-primary transition-all duration-300'>For Teams</h3>
            <h2 className='font-bold text-[60px] group-hover:text-primary transition-all duration-300'>$99</h2>
            <ul className='list-none space-y-3 mt-[34px] mb-[49px]'>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Feedback Categorization</li>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Features prioritization</li>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Real-time collaboration</li>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Feedback loop notifications</li>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Essential dev tools integrations</li>
            </ul>
            <button className='w-[278px] h-[60px] border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer'>Request Demo</button>
         </div>

         <div className='group  relative z-90 w-[362px] h-[508px] border-2 border-[#D8D8D8] flex flex-col py-[20px] items-center transition-all hover:border-t-white duration-300 ease-out hover:-translate-y-6 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]'>
            <h3 className='font-medium text-[30px] group-hover:text-primary transition-all duration-300'>For Company</h3>
            <h2 className='font-bold text-[60px] group-hover:text-primary transition-all duration-300'>Costum</h2>
            <ul className='list-none space-y-3 mt-[34px] mb-[49px]'>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Feedback Categorization</li>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Feedback loop notifications</li>
               <li className='flex gap-4 font-extralight text-[16px] group-hover:text-primary transition-all duration-300'><FaCheckCircle /> Essential dev tools integrations</li>
            </ul>
            <button className='w-[278px] h-[60px] border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer mt-19'>Contact Us</button>
         </div>
      </div>
    </div>
  )
}

export default OurPrincing