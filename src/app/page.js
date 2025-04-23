'use client';

import ConnectSection from '@/components/organisms/Connect';
import BusinessConsultingBlock from '@/components/organisms/Consulting';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import Information from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import ConsultingServicesSection from '@/components/organisms/Services';
import TestimonialGrid from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Information />
      <ConsultingServicesSection />
      <Products />
      <ConnectSection />
      <BusinessConsultingBlock />
      <TestimonialGrid />
      <Footer />
    </main>
  );
}
