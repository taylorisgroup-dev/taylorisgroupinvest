import HeroSection from '@/components/HeroSection';
import KPIsSection from '@/components/KPIsSection';
import EOSSection from '@/components/EOSSection';
import NewsSection from '@/components/NewsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-light">
      <HeroSection />
      <KPIsSection />
      <EOSSection />
      <NewsSection />
    </main>
  );
}