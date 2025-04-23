import {
  CheckSquare,
  LayoutDashboard,
  Code,
  Clock,
  BarChart4,
} from 'lucide-react';

const features = [
  {
    icon: <CheckSquare className='w-6 h-6 text-orange-500' />,
    title: 'Campaign Strategy',
    desc: 'Build advertising strategies that align with client goals and audience behavior for greater engagement and ROI.',
  },
  {
    icon: <LayoutDashboard className='w-6 h-6 text-green-500' />,
    title: 'Creative Direction',
    desc: 'Design compelling brand stories and messaging frameworks that elevate visual identity and performance.',
  },
  {
    icon: <Code className='w-6 h-6 text-red-500' />,
    title: 'Ad Tech Development',
    desc: 'Implement and maintain ad tracking systems, CRMs, and analytics for efficient campaign execution.',
  },
  {
    icon: <Clock className='w-6 h-6 text-blue-500' />,
    title: 'Workflow Optimization',
    desc: 'Streamline agency operations to reduce delivery time and boost team productivity.',
  },
];

const ConsultingServicesSection = () => {
  return (
    <section id='solution' className='bg-[#faf8f2] px-6 md:px-20 py-20'>
      {/* Top Feature Grid */}
      <h2 className='text-center text-3xl md:text-4xl font-bold text-[#0e0e23] mb-12'>
        The Best Solutions For Your Agency
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        {features.map((f, idx) => (
          <div key={idx} className='space-y-3'>
            <div className='flex justify-center'>{f.icon}</div>
            <h3 className='font-bold text-[#0e0e23]'>{f.title}</h3>
            <p className='text-sm text-gray-600'>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultingServicesSection;
