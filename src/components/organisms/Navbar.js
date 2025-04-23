'use client';

import { useCart } from 'ecommerce-mxtech';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const { products } = useCart();
  return (
    <nav className='bg-[#faf8f2] px-6 md:px-20 py-4 flex items-center justify-between font-sans text-sm'>
      {/* Logo */}
      <Link href='/' className='font-bold text-xl'>
        <span className='text-red-600'>V</span>EYVE
      </Link>

      {/* Nav Links */}
      <div className='hidden md:flex items-center space-x-8 text-gray-800 font-medium'>
        <Link href='#services'>Services</Link>
        <Link href='#about'>About</Link>
        <Link href='#products'>Pricing</Link>
        <Link href='#solution'>Solution</Link>
        <Link href='/more-information'>Contact Us</Link>
      </div>

      {/* Cart and Auth Buttons */}

      <div className='flex items-center space-x-4'>
        <Link
          href='/my-cart'
          className='relative flex items-center text-gray-800 hover:text-red-500 transition'
        >
          <ShoppingCart size={24} />
          <span className='absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1'>
            {products.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
