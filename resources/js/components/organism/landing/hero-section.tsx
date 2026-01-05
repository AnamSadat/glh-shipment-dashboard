import { Icon } from '@/components/atoms';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface HeroSectionProps {
  className?: string;
}

type CardItem =
  | {
      title: string;
      description: string;
      iconImage: string;
      icon?: never;
    }
  | {
      title: string;
      description: string;
      icon: ReactNode;
      iconImage?: never;
    };

export default function HeroSection({ className }: HeroSectionProps) {
  const cardItem: CardItem[] = [
    {
      title: 'Mobil',
      description: 'Pengiriman aman dan handal untuk mobil anda.',
      iconImage: '/img/car.svg',
    },
    {
      title: 'Motor',
      description: 'Layanan pengiriman handal dan terpercaya untuk motor',
      iconImage: '/img/bicycle.svg',
    },
    {
      title: 'Alat Berat',
      description: 'Transpor alat berat dengan profesionalisme tinggi',
      iconImage: '/img/alat-berat.svg',
    },
    {
      title: 'Cepat',
      description: 'Pengiriman cepat dan handal untuk kendaraan Anda.',
      iconImage: '/img/time.svg',
    },
    {
      title: 'Aman',
      description: 'Layanan pengiriman yang aman dan profesional.',
      iconImage: '/img/guard-ceklis.svg',
    },
    {
      title: 'Biaya',
      description: 'Harga terjangkau dengan kualitas layanan premium.',
      iconImage: '/img/biaya.svg',
    },
  ];

  return (
    <div className={cn('', className)}>
      <div className="flex flex-grow items-center">
        <div className="grid h-88 w-full grid-cols-3 flex-col bg-[url('/img/herosec.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-5 pl-5">
            <h1 className="pt-7 text-4xl font-extrabold text-blue-800">
              Jasa Pengiriman Mobil, Motor, Alat Berat Antar Pulau
            </h1>
            <p>
              Melayani pengiriman internasional dan domestik dari Ketra dan
              Sarja, serta menyediakan layanan transportasi darat dan pengiriman
              oleh Arindo.
            </p>
            <Button className="w-50 bg-blue-800">
              Kirim Kendaraan Sekarang
            </Button>
          </div>
        </div>
        {/* <div>
          <img src="/img/herosec.png" alt="" />
        </div> */}
      </div>
      <div className="grid grid-cols-3 gap-5 py-20">
        {cardItem.map((item) => (
          <Card key={item.title} className="flex flex-row gap-2!">
            <CardHeader className="flex! items-center! pr-0">
              {item.iconImage ? (
                <Icon
                  className="h-14 w-14"
                  iconImage={item.iconImage}
                  alt={item.title}
                />
              ) : (
                <Icon className="h-10 w-10">{item.icon}</Icon>
              )}
            </CardHeader>

            <CardContent className="pl-2">
              <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
