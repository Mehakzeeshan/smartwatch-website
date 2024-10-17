import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="h-[680px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:ml-16 md:mr-0 md:px-9 my-16 mb-10">
        {/* Right Section */}
        <div className="px-4 md:px-8 py-8 md:py-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-[#FFFFFF] font-extrabold">
            Discover Most Suitable Watches
          </h1>
          <p className="mt-4 md:mt-6 text-[#8B8E99] font-semibold text-sm sm:text-base md:text-lg">
            Find the best, reliable, and cheap smartwatches here. We focus on product quality. Here you can find smart watches
            of almost all brands. So why are you waiting? Just order now!
          </p>

          {/* Search Bar */}
          <div className="bg-[#FFFFFF] h-12 sm:h-14 mt-8 md:mt-10 flex items-center rounded-lg shadow-md max-w-lg w-full">
            {/* Search Icon Button */}
            <button className="ml-4">
              <FaSearch className="text-blue-700 h-5 sm:h-6 w-5 sm:w-6" />
            </button>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Find the best brands"
              className="flex-grow pl-4 bg-transparent outline-none text-[#8B8E99] text-sm sm:text-base"
            />

            {/* Search Button */}
            <button className="text-[#FFFFFF] bg-blue-700 px-3 py-1 sm:px-4 sm:py-2 rounded-lg mr-2">
              Search
            </button>
          </div>
        </div>

        {/* Left Section */}
        <div className="mt-12 sm:mt-11 ml-0 sm:ml-8 md:ml-16 flex justify-center md:justify-between">
          <Image
            src="/hero-image.png"
            alt="Smart Watch"
            width={300}
            height={300}
            className="md:w-[400px] md:h-[400px] w-[250px] h-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
