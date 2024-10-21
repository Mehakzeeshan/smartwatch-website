import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className="h-[500px] mt-4" id="contact">
    <div className='h-[380px] md:w-[1050px]  bg-[#F5F5F5] md:mx-[150px] rounded-3xl mx-6'>

        <div className='main-item md:flex items-center pt-6  md:mx-8 mx-8'>
            <div className='paragraph md:pl-14 md:px-6'>

            <h1 className='md:text-4xl text-2xl  font-bold text-[#1E1D1D]'>Subscribe To Newsletter</h1>
            <p className='text-[#8B8E99] mt-2 font-semibold'>Get free guide about smart watches daily.</p>
                <span className="bg-[#FFFFFF] md:h-14 mt-5 flex md:items-center rounded-lg shadow-md md:max-w-[425px] md:w-full max-w-[450px]">
                <input 
                type='text'
                placeholder='Enter Email Address'
                className='bg-transparent outline-none text-[#8B8E99] flex-grow md:pl-7 md:font-medium font-sans text-sm'
                />
                <button className='text-[#FFFFFF] bg-blue-700 mx-1 rounded-lg md:h-11 md:w-[130px] font-semibold my-1 md:mx-2'>Subscribe</button>
                </span> 

            </div>

            <div className='image md:ml-16 md:pl-16 my-2'>
                <Image src="/Image/product1.png" alt='Apple Smartwatch' width={280} height={280}
                 className='md:ml-5 md:h-[300px] md:w-[300px] h-[150px] w-[150px] ml-16 mt-5'/>
            </div>
        </div>

    </div>


    <footer className='mt-[90px] h-[65px] bg-[#0B0B0B] text-center'>
        <p className='text-[#FFFFFF] py-5 font-semibold font-sans'>Copyright @ 2022 | Mohid</p>
    </footer>
    </section>

  )
}

export default Contact