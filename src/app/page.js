'use client';

import ConnectSection from '@/components/organisms/Connect';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import Information from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import ConsultingServicesSection from '@/components/organisms/Services';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Information />
      <ConsultingServicesSection />
      <ConnectSection />
      <Footer />
    </main>
  );
}
