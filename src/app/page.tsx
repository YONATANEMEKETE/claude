import Hero from '@/components/Hero';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <main className="h-screen bg-mycardbg font-default">
      <Nav />
      <Hero />
    </main>
  );
}
