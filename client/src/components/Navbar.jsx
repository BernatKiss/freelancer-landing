import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'

const Navbar = ({ menuOpen, setMenuOpen }) => {
  
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 50px scroll után aktiválódik
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'lg:bg-white/70 lg:backdrop-blur-md lg:shadow-md' : 'bg-transparent'}`}>
    <div className={`flex justify-between my-3 mx-6 sm:mx-24 md:mx-32 relative z-10 `}>
      {/* Left side */}
      <div className='flex sm:gap-6 md:gap-12 items-center'>
        <img src={assets.logo} className={`h-5 w-18 mt-7 lg:mt-1 ${scrolled ? 'opacity-60 lg:opacity-100' : 'opacity-100'}`} alt="" />
        <div className='hidden lg:flex gap-12 text-base font-[18px]'>
          <a className='hover:text-primary relative inline-block text-black border-b-2 border-transparent hover:border-primary transition-all duration-500' href="#">Home</a>
          <a className='hover:text-primary relative inline-block text-black border-b-2 border-transparent hover:border-primary transition-all duration-500' href="/about">About</a>
          <a className='hover:text-primary relative inline-block text-black border-b-2 border-transparent hover:border-primary transition-all duration-500' href="/testimonials">Testimonials</a>
          <a className='hover:text-primary relative inline-block text-black border-b-2 border-transparent hover:border-primary transition-all duration-500' href="/contact">Contact</a>
        </div>
      </div>

      {/* Right side (desktop) */}
      <div className='hidden lg:flex gap-[27px] font-[18px]'>
        <button>Sign In</button>
        <button className='border border-primary text-primary py-4 px-10'>Sign Up</button>
      </div>

      {/* Hamburger / Close icon (mobile) */}
      <div
  className={`lg:hidden cursor-pointer z-50 fixed top-[40px] right-6 transition-transform duration-300  ${
    menuOpen ? 'rotate-90' : ''
  }`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <img
    src={menuOpen ? assets.close_icon : assets.menu_icon}
    className='w-7'
    alt="menu"
  />
</div>

      {/* Mobil menü (slide-in) */}
      <div
        className={`fixed bg-primary top-0 right-0 h-full w-3/5  shadow-lg transform transition-transform duration-300 z-40
          ${menuOpen ? 'translate-x-0 brightness-140' : 'translate-x-full'}`}
      >
        <div className='flex flex-col items-center mt-28 gap-8  text-lg font-medium'>
          <a className='hover:text-white' href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a className='hover:text-white' href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a className='hover:text-white' href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a className='hover:text-white' href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <div className='flex flex-col gap-4 mt-10'>
            <button className='cursor-pointer hover:text-white'>Sign In</button>
            <button className='border hover:text-primary hover:bg-white border-white text-white py-2 px-6 rounded-md cursor-pointer'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
