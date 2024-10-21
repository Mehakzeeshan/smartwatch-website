import React from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const Products = () => {
  return (
    <section className="mt-14 pt-16" id="products">
        
        <p className='text-[#3858D6] text-center font-semibold text-lg'>Find your favorite smart watch.</p>
        <h1 className='text-center text-[40px] font-bold text-[#1E1D1D]'>Our Latest Products</h1>
      

    <div className='row1 md:flex mt-14 justify-evenly md:mx-16 mx-5'>
   
      <div>
       <div className='box1 bg-[#f5f5f5] hover:bg-[#F8F8F8] w-[340px] h-[340px] flex mt-12' >
         <Image src='/Image/product1.png' alt='Apple watch' width={260} height={180} className='mx-4 pl-4 pt-6 pb-6' />
         <div>
         < FaShoppingCart className='bg-blue-800 rounded-full text-white w-10 h-10 p-1 mt-3' />
         < FaHeart  className='bg-red-400 rounded-full text-white w-10 h-10 p-2 mt-3'/>
         </div>
       </div>
            <h3 className='text-3xl font-bold mt-4 text-[#1e1e1dea] text-center'>Apple Smart I</h3>
            <span className='flex mt-2 justify-center text-xl'> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <div className='flex justify-center mt-2'>
            <p className='text-[#8B8E99] text-xl pt-1 line-through'> $300.00 </p>
            <h3 className='text-[#000000] text-2xl font-bold pl-1'>$255.00</h3>
            </div>
       </div>
            
       <div>
       <div className='box2 bg-[#f5f5f5] hover:bg-[#F8F8F8] w-[340px] h-[340px] flex mt-12' >
         <Image src='/Image/product2.png' alt='Apple watch' width={280} height={280} className='mx-4 pl-4 pt-6 pb-6' />
       </div>
            <h3 className='text-3xl font-bold mt-4 text-[#1e1e1dea] text-center'>Apple Smart II</h3>
            <span className='flex mt-2 justify-center text-xl'> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <div className='flex justify-center mt-2'>
            <p className='text-[#8B8E99] text-xl pt-1 line-through'> $300.00 </p>
            <h3 className='text-[#000000] text-2xl font-bold pl-1'>$255.00</h3>
            </div>
       </div>
            
       <div>
       <div className='box3 bg-[#f5f5f5] hover:bg-[#F8F8F8] w-[340px] h-[340px] flex mt-12' >
         <Image src='/Image/product3.png' alt='Apple watch' width={270} height={180} className='mx-4 pl-4 pt-6 pb-6' />
        </div>
            <h3 className='text-3xl font-bold mt-4 text-[#1e1e1dea] text-center'>Apple Smart III</h3>
            <span className='flex mt-2 justify-center text-xl'> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <div className='flex justify-center mt-2'>
            <p className='text-[#8B8E99] text-xl pt-1 line-through'> $300.00 </p>
            <h3 className='text-[#000000] text-2xl font-bold pl-1'>$255.00</h3>
            </div>
       </div>
            
    </div>


    <div className='row2 md:flex mt-14 justify-evenly md:mx-16 mx-5'>
   
      <div>
       <div className='box4 bg-[#f5f5f5] hover:bg-[#F8F8F8] w-[340px] h-[340px] flex mt-12' >
         <Image src='/Image/product4.png' alt='Apple watch' width={270} height={180} className='mx-4 pl-4 pt-6 pb-6' />
       </div>
            <h3 className='text-3xl font-bold mt-4 text-[#1e1e1dea] text-center'>Apple Smart IV</h3>
            <span className='flex mt-2 justify-center text-xl'> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <div className='flex justify-center mt-2'>
            <p className='text-[#8B8E99] text-xl pt-1 line-through'> $450.00 </p>
            <h3 className='text-[#000000] text-2xl font-bold pl-1'>$399.00</h3>
            </div>
       </div>
            
       <div>
       <div className='box5 bg-[#f5f5f5] hover:bg-[#F8F8F8] w-[340px] h-[340px] flex mt-12' >
         <Image src='/Image/product5.png' alt='Apple watch' width={280} height={280} className='mx-4 pl-4 pt-6 pb-6' />
       </div>
            <h3 className='text-3xl font-bold mt-4 text-[#1e1e1dea] text-center'>Samsung Watch Pro</h3>
            <span className='flex mt-2 justify-center text-xl'> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <div className='flex justify-center mt-2'>
            <p className='text-[#8B8E99] text-xl pt-1 line-through'> $300.00 </p>
            <h3 className='text-[#000000] text-2xl font-bold pl-1'>$255.00</h3>
            </div>
       </div>
            
       <div>
       <div className='box6 bg-[#f5f5f5] hover:bg-[#F8F8F8] w-[340px] h-[340px] flex mt-12' >
         <Image src='/Image/product6.png' alt='Apple watch' width={270} height={270} className='mx-4 pl-4 pt-6 pb-6' />
        </div>
            <h3 className='text-3xl font-bold mt-4 text-[#1e1e1dea] text-center'>Fitbit Max 1</h3>
            <span className='flex mt-2 justify-center text-xl'> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </span>
            <div className='flex justify-center mt-2'>
            {/*<p className='text-[#8B8E99] text-xl pt-1 line-through'> $300.00 </p> */}
            <h3 className='text-[#000000] text-2xl font-bold pl-1'>$155.00</h3>
            </div>
       </div>
            
    </div>


  <div className='flex justify-center'>
    <button className='bg-blue-700 hover:bg-blue-600 text-white w-[200px] h-[45px] rounded-xl mt-16 font-semibold text-lg'>View More </button>
  </div> 

    </section>
  )
}

export default Products;