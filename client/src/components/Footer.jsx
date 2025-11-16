import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <footer className="relative mt-30 w-full h-full h-[250px] bg-[#313131] p-10
    before:content-[''] before:absolute before:top-0 before:left-0
    before:border-t-[180px] before:border-r-[180px] before:border-t-[#2c2c2c] before:border-r-transparent

    after:content-[''] after:absolute after:top-0 after:right-0
    after:border-t-[180px] after:border-l-[180px] after:border-t-[#2c2c2c] after:border-l-transparent
">

  {/* Alsó bal sarok */}
  <div className="absolute bottom-0 left-0
      border-b-[180px] border-r-[180px] border-b-[#2c2c2c] border-r-transparent"></div>

  {/* Alsó jobb sarok */}
  <div className="absolute bottom-0 right-0
      border-b-[180px] border-l-[180px] border-b-[#2c2c2c] border-l-transparent"></div>

  {/* Footer tartalom */}
  <div className="relative z-10 text-white gap-12 flex flex-col items-center">
    <h2 className="text-[24px] md:text-[44px] lg:text-[60px] font-semibold text-center"> People who are <br />
ready took these courses!</h2>
    <button className='border px-11 py-5 hover:bg-white hover:text-[#313131] hover:font-bold transition-all duration-500'>Schedule demo</button>
  </div>

  <div className='grid grid-cols-2 gap-18 items-center md:items-start md:grid-cols-2 lg:grid-cols-4 mt-20 mx-20 lg:mt-45 lg:mx-51 justify-between'>

   <div className='flex flex-col gap-8 '>
      <img src={assets.footer_logo} width={120} alt="" />
      <p className='text-[12px] text-white'>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
   </div>

   <div>
      <h3 className='text-[14px] text-white font-semibold'>Links</h3>
      <div className='flex flex-col gap-3 lg:gap-7 mt-4 md:mt-9'>
         <a className='text-[12px] text-white font-extralight' href="">Overons</a>
         <a className='text-[12px] text-white font-extralight' href="">Social Media</a>
         <a className='text-[12px] text-white font-extralight' href="">Counters</a>
         <a className='text-[12px] text-white font-extralight' href="">Contact</a>
      </div>
   </div>

   <div>
      <h3 className='text-[14px] text-white font-semibold'>Company</h3>
      <div  className='flex flex-col gap-3 lg:gap-7 mt-4 md:mt-9'>
         <a className='text-[12px] text-white font-extralight' href="">Terms & Conditions</a>
         <a className='text-[12px] text-white font-extralight' href="">Privacy Policy Media</a>
         <a className='text-[12px] text-white font-extralight' href="">Contact</a>
      </div>
   </div>

   <div>
      <h3 className='text-[14px] text-white font-semibold'>Get in touch</h3>
      <div  className='flex flex-col gap-3 lg:gap-7 mt-4 md:mt-9'>
         <p className='text-[12px] text-white font-extralight' >Crechterwoord K12 182 <br /> DK Alknjkcb</p>
         <p className='text-[12px] text-white font-extralight' >085-132567</p>
         <p className='text-[12px] text-white font-extralight' >info@payme.net</p>
      </div>
   </div>
  

  </div>
 <p className='text-[12px] text-white font-extralight text-center items-center justify-center mt-10'>© 2021 Payme. All rights reserved</p>
</footer>

  )
}

export default Footer