import BgPatterns from '@/components/BgPatterns';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import Trusted from '@/components/Trusted';

export default function Home() {
  return (
    <main className="font-default relative">
      <Nav />
      <Sidebar />
      <Hero />
      <BgPatterns />
      <Trusted />
    </main>
  );
}
