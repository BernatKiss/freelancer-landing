import React from 'react'

const Title = ({title, green, desc}) => {
  return (
    <>
      <h3 className='text-5xl md:text-6xl font-extralight gap-6 flex justify-center mt-[140px] mb-[30px] items-center'>{title}<span className='font-normal text-primary'>{green}</span></h3>
      <p className='mx-auto mt-16 w-[80%] lg:w-[30%] text-center leading-relaxed'>{desc}</p>
    </>
  )
}

export default Title