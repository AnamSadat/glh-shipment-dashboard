import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScrolled);
  }, [scrolled]);

  const routes = [
    {
      label: 'Beranda',
      href: '/',
    },
    {
      label: 'Layanan',
      href: '/layanan',
    },
    {
      label: 'Cek Tarif',
      href: '/cek-tarif',
    },
    {
      label: 'Lacak Pengiriman',
      href: '/lacak-pengiriman',
    },
    {
      label: 'Tentang Kami',
      href: '/tentang-kami',
    },
  ];

  const baseClass = cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    scrolled ? 'border-b bg-background/60 backdrop-blur-md' : 'bg-transparent',
  );

  return (
    <div className={baseClass}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/img/logo-glh.svg" alt="logo-glh" width={70} height={0} />
          <h1 className="hidden pl-3 font-bold text-blue-900 lg:block">
            PT Garis Laut Handal
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {routes.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Button className="bg-blue-800">Masuk</Button>
        </div>
      </div>
    </div>
  );
}
