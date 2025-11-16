import React from 'react'
import assets from '../assets/assets'
import { TiStar } from "react-icons/ti";

const Clients = () => {
  return (
    <div>
     
      {/* Címsor és szöveg */}
      <div>
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-extralight gap-3 flex justify-center mt-[140px] mb-[30px] items-center">
          What <span className="font-normal text-primary">Clients</span> Say
        </h3>
        <p className="mx-auto mt-10 w-[85%] md:w-[60%] lg:w-[30%] text-center leading-relaxed text-gray-600">
          Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.
        </p>
      </div>

      {/* Kép és szürke doboz */}
       
      <div className="flex relative flex-col lg:flex-row items-center justify-center gap-8 mt-20 mx-auto w-full">
         <img src={assets.bigdec} className='absolute -z-10 rotate-180 -right-70 -top-60' alt="" />
        {/* Kép */}
        <img
          src={assets.profile}
          alt="client"
          className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[482px] md:h-[472px] object-cover rounded-xl"
        />

        {/* Szürke doboz */}
        <div className="w-[320px] h-[520px] sm:w-[500px] sm:h-[400px] md:w-[472px] lg:w-[668px] md:h-[412px] lg:h-[472px] bg-[#F8F8F8] rounded-tr-[120px] sm:rounded-tr-[180px] md:rounded-tr-[235px] flex flex-col  p-6 sm:p-10 justify-center">
          <h4 className='font-bold text-xl mb-6'>Best Developers</h4>
          <p className='mb-2.5 font-extralight w-[90%]'>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.</p>
          <div className="flex gap-1 mb-5  text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <TiStar key={i} className="text-xl lg:text-2xl" />
                  ))}
         </div>
         <h5 className='text-lg mb-1.5'>Robert Johnson</h5>
         <p className='font-extralight'>Director at Behance</p>
        </div>
      </div>

      <div className='flex mt-19 gap-2.5 items-center justify-center'>
         <img src={assets.left} className='cursor-pointer' alt="" />
         <img src={assets.right} className='cursor-pointer' alt="" />
      </div>
    </div>
  )
}

export default Clients
