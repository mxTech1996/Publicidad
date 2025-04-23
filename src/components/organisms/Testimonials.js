'use client';

import { dataSite } from '@/data';
import { useMemo } from 'react';

const testimonials = dataSite.references;
const bgColors = [
  'bg-green-100',
  'bg-red-200',
  'bg-purple-200',
  'bg-yellow-200',
  'bg-pink-100',
  'bg-blue-100',
];

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const TestimonialGrid = () => {
  const coloredTestimonials = useMemo(() => {
    const usedColors = new Set();
    return testimonials.map((testimonial) => {
      const availableColors = bgColors.filter(
        (color) => !usedColors.has(color)
      );
      const randomColor =
        availableColors[Math.floor(Math.random() * availableColors.length)] ||
        'bg-white';
      usedColors.add(randomColor);
      return { ...testimonial, color: randomColor };
    });
  }, []);

  return (
    <section className='bg-[#fdf8ee] py-20 px-6 md:px-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {coloredTestimonials.map((t, index) => (
          <div
            key={index}
            className={`p-6 rounded-md border border-gray-300 shadow-sm text-center ${t.color}`}
          >
            <div className='flex justify-center mb-4'>
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.name}
                  className='w-12 h-12 rounded-full object-cover'
                />
              ) : (
                <div className='w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-semibold text-sm'>
                  {getInitials(t.name)}
                </div>
              )}
            </div>
            <h3 className='font-bold text-lg text-[#0e0e23]'>{t.name}</h3>
            <p className='text-sm font-medium text-gray-700 mb-3'>{t.title}</p>
            <p className='text-sm text-[#0e0e23]/80 italic'>
              “{t.description}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialGrid;
