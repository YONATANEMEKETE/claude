import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <main className="min-h-screen font-default">
      <Nav />
      <Sidebar />
      <Hero />
    </main>
  );
}
