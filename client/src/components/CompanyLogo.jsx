import React from 'react'
import { company_logo } from '../assets/assets'

const CompanyLogo = () => {
  return (
    <div className='flex flex-col items-center gap-16 lg:gap-6 lg:flex-row lg:justify-between px-30 py-8 lg:py-[85px] bg-[#F8F8F8] '>
      {company_logo.map((logo, index) => (
         <img src={logo} key={index} className='w-28' alt="" />
      ))}
    </div>
  )
}

export default CompanyLogo