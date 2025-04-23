import Image from 'next/image';
import Link from 'next/link';

const ConnectSection = () => {
  return (
    <section className='bg-[#faf8f2] px-6 md:px-20 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-16'>
      {/* Text content */}
      <div className='max-w-lg'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#0e0e23] mb-6'>
          Connect With Your Clients&apos; Tools
        </h2>
        <p className='text-gray-600 mb-6 text-sm md:text-base'>
          As a consulting partner for advertising agencies, we integrate the
          tools your clients already use — making data, messaging, and workflows
          seamless across platforms.
        </p>
        <Link
          href='/more-information'
          className='inline-block bg-red-400 text-white px-6 py-2 rounded-md font-medium hover:bg-red-500 transition'
        >
          Contact Us
        </Link>
      </div>

      {/* Illustration with floating icons */}
      <div className='relative w-full md:w-[400px] h-[360px]'>
        <Image
          src='/images/connect.png' // Replace with your actual image
          alt='illustration'
          layout='fill'
          objectFit='contain'
        />
        {/* Floating icons */}
        <Image
          src='/images/instagram.png'
          alt='Instagram'
          width={70}
          height={70}
          className='absolute top-2 left-6'
        />
        <Image
          src='/images/google.png'
          alt='Google'
          width={70}
          height={70}
          className='absolute top-2 right-6'
        />
        <Image
          src='/images/messenger.png'
          alt='Messenger'
          width={70}
          height={70}
          className='absolute bottom-16 left-0'
        />
        <Image
          src='/images/drive.png'
          alt='Google Drive'
          width={70}
          height={70}
          className='absolute bottom-4 right-4'
        />
      </div>
    </section>
  );
};

export default ConnectSection;
