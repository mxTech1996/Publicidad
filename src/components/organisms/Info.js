'use client';

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import { random } from 'lodash';

const services = [
  {
    step: 1,
    bg: 'bg-green-100',
    text: 'We collaborate with your agency to define goals and improve client-facing results through tailored strategies and creative alignment.',
  },
  {
    step: 2,
    bg: 'bg-orange-100',
    text: 'We implement data-driven performance reporting systems to help you track campaign results and optimize ROI with ease.',
  },
  {
    step: 3,
    bg: 'bg-red-200',
    text: 'We help you build a powerful agency brand with in-depth analytics, positioning strategies, and client acquisition frameworks.',
  },
];

const getRandomBgColor = () => {
  const colors = [
    'bg-green-100',
    'bg-orange-100',
    'bg-red-200',
    'bg-blue-100',
    'bg-purple-100',
  ];
  return colors[random(0, colors.length - 1)];
};

const newServices = dataSite.services.map((service, index) => ({
  step: index + 1,
  bg: getRandomBgColor(),
  text: service.description,
}));

console.log('newServices', newServices);
const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Information = () => {
  return (
    <section
      id='services'
      className='bg-[#0e0e23] text-white px-6 md:px-20 py-24 relative'
    >
      <h2 className='text-3xl md:text-4xl font-semibold text-center mb-16'>
        Our Best Included Services
      </h2>

      <div className='space-y-6 max-w-4xl mx-auto relative'>
        {newServices.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={itemVariants}
            className={`${service.bg} rounded shadow-md px-6 py-6 text-[#0e0e23] font-medium relative`}
            style={{
              marginLeft: `${index * 2}rem`,
            }}
          >
            <div className='flex items-start gap-4'>
              <div className='text-2xl font-bold text-[#0e0e23]'>
                {service.step}
              </div>
              <p className='max-w-md leading-relaxed'>{service.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Information;
