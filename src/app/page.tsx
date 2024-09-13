import BgPatterns from '@/components/BgPatterns';
import Cta from '@/components/Cta';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import Stats from '@/components/Stats';
import Testimony from '@/components/Testimony';
import Trusted from '@/components/Trusted';

export default function Home() {
  return (
    <main className="font-default relative overflow-clip ">
      <Nav />
      <Sidebar />
      <Hero />
      <BgPatterns />
      <Trusted />
      <Features />
      <Integrations />
      <Testimony />
      <Stats />
      <Cta />
      <Footer />
    </main>
  );
}
