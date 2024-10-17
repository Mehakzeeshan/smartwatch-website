import React from 'react';
import Image from 'next/image';

const Brands = () => {
  return (
    <section>
    <div className="brands  md:flex md:justify-evenly md:mx-16 mt-16 md:px-16 gap-5 mx-14" id="brands"> 
      <div className='box1 md:flex-1 bg-[#F8F8F8] px-12 flex  h-[230px] max-w-[380px] rounded-3xl items-center hover:bg-gray-200 mb-4 '>
        <div>
        <Image src="/apple.png" alt="Apple Smartwatch" width={350} height={350}/>
        </div>
        <div className='pl-8 my-4'>
        <h2 className='text-4xl font-bold text-[#1E1D1D]'>Apple</h2>
        <p className='text-[#8B8E99] my-2 font-medium text-base'>Apple is one of the most famous smart watches providing company</p>
        </div>
      </div>

      <div className='box2 flex-1 bg-[#F6F6F6] px-12 flex h-[230px] max-w-[380px] rounded-3xl items-center hover:bg-gray-200 mb-4'>
        <div>
        <Image src="/xiaomi.png" alt="Xiaomi Smartwatch" width={330} height={330}/>
        </div>
        <div className='pl-8 my-4'>
        <h2 className='text-4xl font-bold text-[#1E1D1D]'>Xiaomi</h2>
        <p className='text-[#8B8E99] my-2 font-medium text-base'>Xiaomi smart watches are produced by MI company </p>
        </div>
      </div>
      
      <div className='box3 flex-1 bg-[#F6F6F6] px-12 flex h-[230px] max-w-[380px] rounded-3xl items-center hover:bg-gray-200'>
        <div>
        <Image src="/fitbit.png" alt="FitBit Smartwatch" width={350} height={350}/>
        </div>
        <div className='pl-8 my-4'>
        <h2 className='text-4xl font-bold text-[#1E1D1D]'>FitBit</h2>
        <p className='text-[#8B8E99] my-2 font-medium text-base'>FitBit smart watches are best for their health and fitness features</p>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Brands;
