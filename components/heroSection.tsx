import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='h-[680px]'>
    <div className='grid grid-cols-2 ml-16 mr-0 pl-9 pr-0 my-16 mb-10'>
        {/*right*/}
        <div className='px-15 mx-16 py-16'>
        <h1 className='text-7xl text-[#FFFFFF] font-extrabold'>Discover Most Suitable Watches</h1>
        <p className='mt-6 text-[#8B8E99] font-semibold'>Find the best, reliable, and cheap smartwatches here.
            We focus on product quality. Here you can find smart watches
            of almost all brands. So why are you waiting?
            just order now!
        </p>
        
 <div className="bg-[#FFFFFF] h-14 mt-10 flex items-center rounded-lg shadow-md max-w-lg w-full mx-auto">
  {/* Search Icon Button */}
  <button className="ml-4">
    <FaSearch className="text-blue-700 h-6 w-6" />
  </button>

  {/* Input Field */}
  <input
    type="text"
    placeholder="Find the best brands"
    className="flex-grow pl-4 bg-transparent outline-none text-[#8B8E99]"
  />

  {/* Search Button */}
  <button className="text-[#FFFFFF] bg-blue-700 px-4 py-2 rounded-lg mr-2">
    Search
  </button>
</div>
 </div>
      {/* Left */}
        <div className='mt-11 ml-16 pl-7'>
            <Image src="/hero-image.png"
            alt="Smart Watch"
            width={350}
            height={350} />
        </div>
      </div>
    </section> 
  )
}

export default HeroSection;