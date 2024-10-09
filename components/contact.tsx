import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className="h-[500px] mt-12" id="contact">
    <div className='h-[380px] w-[1050px] bg-[#F5F5F5] mx-[150px] rounded-3xl'>

        <div className='main-item flex items-center pt-6  mx-8'>
            <div className='paragraph pl-14'>

            <h1 className='text-4xl  font-bold text-[#1E1D1D]'>Subscribe To Newsletter</h1>
            <p className='text-[#8B8E99] mt-2 font-semibold'>Get free guide about smart watches daily.</p>
                <span className="bg-[#FFFFFF] h-14 mt-5 flex items-center rounded-lg shadow-md max-w-[425px] w-full">
                <input 
                type='text'
                placeholder='Enter Email Address'
                className='bg-transparent outline-none text-[#8B8E99] flex-grow pl-7 font-medium font-sans'
                />
                <button className='text-[#FFFFFF] bg-blue-700 rounded-lg h-11 w-[130px] font-semibold mx-2'>Subscribe</button>
                </span> 

            </div>

            <div className='image ml-16 pl-16 my-2'>
                <Image src="/Image/product1.png" alt='Apple Smartwatch' width={280} height={280} className='ml-8'/>
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