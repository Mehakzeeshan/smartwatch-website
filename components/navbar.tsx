import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
   <nav className='flex justify-between px-16'>
    <div className='py-3 pl-16'>
   <Image src="/logo.png" alt="Logo image" width={100} height={100} />
   </div>

   <div>
    <ul className='flex gap-5 text-[#8B8399] py-5'>
      <li><Link href="/">Home</Link></li>
      <div className="inline-block">
      <li>
        <Link href="#brands" className="rounded inline-flex items-center">
          Brands
          <span className="ml-0 text-sm">&#9662;</span> {/* Down arrow */}
        </Link>
      </li>
    </div>
      <li><Link href="#products">Recent Products</Link></li>
      <li><Link href="#contact">Contact</Link></li>
      <li><Link href="#about">About</Link></li>
    </ul>
   </div>

<div>
   <button className='flex gap-5 py-5 pr-8'>
    < FaSearch className='w-5 h-5 text-[#FFFFFF]' />
   

   
    < FaUser className='w-5 h-5 text-[#FFFFFF]' />
   

  
   < FaShoppingCart className='w-5 h-5 text-[#FFFFFF]'/>
   </button>
   
   </div>
    
    </nav>
    
  )
}

export default Navbar;