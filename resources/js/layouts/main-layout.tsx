import { AppNavbar } from '@/components/organism/app-navbar';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <AppNavbar />
      <main>{children}</main>
    </>
  );
}
