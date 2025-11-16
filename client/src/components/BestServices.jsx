import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { TiStar } from "react-icons/ti";

const BestServices = () => {
  return (
    <div className='mb-[140px]'>
      
      <Title title='Best' green='Services' desc='Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.'/>

      <div className="flex flex-col items-center mt-20 gap-10 px-6 sm:px-10 md:px-20 lg:px-40">
         <img src={assets.bigdec} className='hidden md:flex md:absolute  left-0 top-300 lg:top-370 xl:top-450'  alt="" />
  {/* Felső sor */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
    {/* 1. kártya */}
    <div className="relative w-[450px] sm:w-[400px] md:w-[350px] lg:w-[470px] aspect-square group">
      <img
        src={assets.webdev}
        className="object-cover w-full h-full   md:rounded-tl-[236px]"
        alt=""
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 md:rounded-tl-[236px]"></div>

      <h4 className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl sm:text-3xl font-semibold">
        Web <br /> Development
      </h4>

      <div className="flex gap-1 absolute inset-0 items-center justify-center mt-32 sm:mt-36 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <TiStar key={i} className="text-2xl sm:text-3xl" />
        ))}
      </div>
    </div>

    {/* 2. kártya */}
    <div className="relative w-[450px] sm:w-[400px] md:w-[350px] lg:w-[470px] aspect-square md:top-10 group">
      <img
        src={assets.webdesigne}
        className="object-cover w-full h-full md:rounded-tr-[236px]"
        alt=""
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 md:rounded-tr-[236px]"></div>

      <h4 className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl sm:text-3xl font-semibold">
        Web <br /> Designing
      </h4>

      <div className="flex gap-1 absolute inset-0 items-center justify-center mt-32 sm:mt-36 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <TiStar key={i} className="text-2xl sm:text-3xl" />
        ))}
      </div>
    </div>
  </div>

  {/* Alsó sor */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
    {/* 3. kártya */}
    <div className="relative w-[450px] sm:w-[400px] md:w-[350px] lg:w-[470px] aspect-square group">
      <img
        src={assets.database}
        className="object-cover w-full h-full md:rounded-bl-[236px]"
        alt=""
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 md:rounded-bl-[236px]"></div>

      <h4 className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl sm:text-3xl font-semibold">
        Database <br /> Management
      </h4>

      <div className="flex gap-1 absolute inset-0 items-center justify-center mt-32 sm:mt-36 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <TiStar key={i} className="text-2xl sm:text-3xl" />
        ))}
      </div>
    </div>

    {/* 4. kártya */}
    <div className="relative w-[450px] sm:w-[400px] md:w-[350px] lg:w-[470px] aspect-square md:top-10 group">
      <img
        src={assets.seo}
        className="object-cover w-full h-full md:rounded-br-[236px]"
        alt=""
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 md:rounded-br-[236px]"></div>

      <h4 className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl sm:text-3xl font-semibold">
        SEO
      </h4>

      <div className="flex gap-1 absolute inset-0 items-center justify-center mt-32 sm:mt-36 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <TiStar key={i} className="text-2xl sm:text-3xl" />
        ))}
      </div>
    </div>
  </div>
</div>
   <div className='flex items-center justify-center mt-40'>
      <button className="px-15 py-3 border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-500">
              Explore All
            </button>

   </div>
    </div>
  )
}

export default BestServices