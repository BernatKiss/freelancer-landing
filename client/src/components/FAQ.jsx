import React, { useState } from 'react'
import Title from './Title'
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqData = [
  {
    question: "She met humoured sir breeding her. Six curiosity day assurance bed necessary.",
    answer: "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.."
  },
  {
    question: "And excellence partiality estimating terminated day everything?",
    answer: "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
  },
  {
    question: "Whatever landlord yourself at by pleasure of children be?",
    answer: "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
  },
  {
    question: "Latter person am secure of estate genius at?",
    answer: "Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
  }
]

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(null)

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='flex flex-col gap-6'>
      <Title green='FAQs'/>

      {faqData.map((item, index) => (
        <div
          key={index}
          className='max-w-[450px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[706px] w-full mx-auto bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-lg p-8 gap-6 hover:shadow-xl hover:bg-[#D8D8D8] transition-all duration-700'
        >
          <div className='flex gap-8'>
            <div
              className='flex text-primary cursor-pointer'
              onClick={() => toggleIndex(index)}
            >
              {openIndex === index ? <FaMinus size={30}/> : <FaPlus size={30}/>}
            </div>

            <div className='gap-10 flex flex-col'>
              <h4 className='text-[18px] md:text-[20px] font-medium'>
                {item.question}
              </h4>

              {openIndex === index && (
                <p className='text-[16px] transition-all duration-700 font-extralight'>
                  {item.answer}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default FAQ
