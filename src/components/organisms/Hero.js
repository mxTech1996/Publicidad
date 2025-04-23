import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='bg-[#faf8f2] min-h-screen flex items-center justify-center px-6 md:px-20 py-20'>
      <div className='grid md:grid-cols-2 items-center gap-10'>
        {/* Text Content */}
        <div>
          <h1 className='text-4xl md:text-5xl font-extrabold text-[#0e0e23] leading-tight mb-6'>
            New Software You <br />
            Looking For.
          </h1>
          <p className='text-gray-500 text-base mb-8 max-w-md'>
            Backed with vast experience and full up to date skills set, at
            Software offer the best in a class.
          </p>
          <div className='flex space-x-6'>
            <Link
              href='#products'
              className='bg-[#0e0e23] text-white px-6 py-2 rounded-md font-semibold hover:bg-black transition'
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className='relative w-full h-[600px]'>
          <Image
            src={'/images/marketing.png'}
            alt='Marketing Illustration'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
