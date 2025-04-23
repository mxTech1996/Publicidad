import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { dataSite } from '@/data';

const BusinessConsultingBlock = () => {
  return (
    <section id='about' className='bg-[#faf8f2] px-6 md:px-20 py-20'>
      <div className='grid md:grid-cols-2 gap-16 items-center'>
        {/* Left illustration box */}
        <div className='relative bg-orange-200 p-6 rounded-md shadow-md'>
          {/* Placeholder for software collaboration UI */}
          <div className='bg-white p-4 rounded-md shadow-sm border mb-4'>
            <Image
              src={dataSite.image_hero}
              alt='Software Collaboration'
              width={400}
              height={300}
              className='rounded-md'
            />
          </div>
        </div>

        {/* Right content */}
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-[#0e0e23] mb-4'>
            {dataSite.subtitle}
          </h2>
          <p className='text-gray-600 text-sm mb-6 max-w-md'>
            {dataSite.description}
          </p>

          {/* Features */}
          <div className='space-y-6'>
            <div>
              <h4 className='font-bold text-[#0e0e23] flex items-center gap-2'>
                <span className='text-red-500'>➤</span>
                {dataSite.info[1].title}
              </h4>
              <p className='text-gray-600 text-sm mt-1 max-w-md'>
                {dataSite.info[1].description}
              </p>
            </div>

            <div>
              <h4 className='font-bold text-[#0e0e23] flex items-center gap-2'>
                <span className='text-red-500'>➤</span>
                {dataSite.info[2].title}
              </h4>
              <p className='text-gray-600 text-sm mt-1 max-w-md'>
                {dataSite.info[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessConsultingBlock;
