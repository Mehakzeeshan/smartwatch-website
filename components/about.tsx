import React from 'react'
import Image from 'next/image';
import { FaStar, FaCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section className="h-[750px] mt-16 pt-16" id="about">
        <p className='text-[#3858D6] text-center font-semibold text-lg'>Here are our some of the best clients.</p>
        <h2 className='text-center text-[40px] font-[799] text-[#1E1D1D] mt-2'>What People Say About Us</h2>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:h-[250px] md:w-[1050px] mt-12 md:mx-[150px] mx-5'>
          
          <div className='box1 bg-[#f5f5f5] rounded-3xl flex items-center'>
            <Image src="/Image/review1.png" alt='Review' width={200} height={220} className='pl-9' />
            <div className='pl-8'>
            <h2 className='text-3xl font-bold text-[#1e1e1dea]'>Hamza Faizi</h2>
            <p className='text-[#8B8E99] pt-1 font-[600] text-base pr-3'>Do not waste time, just order! This is the best website to purchase smart watches.</p>
            
            <span className='flex text-xl pt-1'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            </div>
          </div>
          
          
        <div className='box2 bg-[#f5f5f5] rounded-3xl flex items-center'>
          <Image src="/Image/review2.png" alt='Review' width={200} height={220}  className='pl-9'/>
          <div className='pl-8'>
            <h2 className='text-3xl font-bold text-[#1e1e1dea]'>Hafiz Huzaifa</h2>
            <p className='text-[#8B8E99] pt-1 font-[600] text-base pr-3'>I have been purchasing smart watches of Mohid for a long time. All the products are good quality</p>
           
            <span className='flex text-xl pt-1'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            </div>
          </div>

        </div>

        <div className='flex justify-center mt-11 gap-2 text-[18px] text-[#D9D9D9]'>
          <FaCircle />
          <FaCircle />
          <FaCircle />
          <FaCircle />
          <FaCircle  className='text-[#3858D6]'/>
        </div>

    </section>
  )
}

export default About;
