import { CekTarif } from '@/components/organism/landing/cek-tarif';
import HeroSection from '@/components/organism/landing/hero-section';
import MainLayout from '@/layouts/main-layout';

LandingPage.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

export default function LandingPage() {
  return (
    <div className="container mx-auto">
      <HeroSection className="flex flex-col py-30 pb-8" />
      <CekTarif />
    </div>
  );
}
