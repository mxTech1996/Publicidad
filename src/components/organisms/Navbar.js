'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-[#faf8f2] px-6 md:px-20 py-4 flex items-center justify-between font-sans text-sm'>
      {/* Logo */}
      <Link href='/' className='font-bold text-xl'>
        <span className='text-red-600'>W</span>ednesday
      </Link>

      {/* Nav Links */}
      <div className='hidden md:flex items-center space-x-8 text-gray-800 font-medium'>
        <Link href='#'>Demos</Link>
        <Link href='#'>Company</Link>
        <Link href='#'>Pricing</Link>
        <Link href='#'>Contact Us</Link>
        <Link href='#'>All Pages</Link>
      </div>

      {/* Cart and Auth Buttons */}
      <div className='flex items-center space-x-4'>
        <ShoppingCart className='w-5 h-5 text-gray-800' />
        <Link href='#' className='text-red-500 font-semibold hover:underline'>
          Sign In
        </Link>
        <Link
          href='#'
          className='bg-[#0e0e23] text-white px-4 py-1.5 rounded-md font-semibold hover:bg-black transition'
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
