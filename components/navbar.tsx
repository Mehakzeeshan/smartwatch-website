"use client";

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-16 py-4">
      {/* Logo */}
      <div className="py-2">
        <Image src="/logo.png" alt="Logo image" width={100} height={100} />
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row gap-6 text-[#8B8399]">
          <li>
            <Link href="/" className="hover:text-white" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link href="#brands" className="hover:text-white flex items-center" onClick={toggleMenu}>
              Brands <span className="ml-1 text-sm">&#9662;</span>
            </Link>
            {/* Dropdown */}
            <ul className="absolute left-0 hidden mt-2 bg-gray-700 group-hover:block text-white py-2 rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="#brand1" onClick={toggleMenu}>Apple</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="#brand2" onClick={toggleMenu}>Xiaomi</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <Link href="#brand3" onClick={toggleMenu}>FitBit</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#products" className="hover:text-white" onClick={toggleMenu}>
              Recent Products
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-white" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-white" onClick={toggleMenu}>
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Icons Section */}
      <div className="flex gap-5 items-center">
        <button className="text-[#FFFFFF]">
          <FaSearch className="w-5 h-5" />
        </button>
        <button className="text-[#FFFFFF]">
          <FaUser className="w-5 h-5" />
        </button>
        <button className="text-[#FFFFFF]">
          <FaShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
