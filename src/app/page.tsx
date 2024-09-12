import BgPatterns from '@/components/BgPatterns';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import Trusted from '@/components/Trusted';

export default function Home() {
  return (
    <main className="font-default relative overflow-clip pb-20">
      <Nav />
      <Sidebar />
      <Hero />
      <BgPatterns />
      <Trusted />
      <Features />
      <Integrations />
    </main>
  );
}
