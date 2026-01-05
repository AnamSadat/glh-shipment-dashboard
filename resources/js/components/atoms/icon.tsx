import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type IconSize = 'sm' | 'md' | 'lg';

const sizeClass: Record<IconSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

type BaseProps = {
  className?: string;
  size?: IconSize;
};

type ImgProps = BaseProps & {
  iconImage: string;
  alt?: string;
  children?: never;
};

type ChildrenProps = BaseProps & {
  children: ReactNode;
  iconImage?: never;
  alt?: never;
};

export type IconProps = ImgProps | ChildrenProps;

export function Icon(props: IconProps) {
  const { className, size = 'sm' } = props;

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center',
        '[&_img]:h-full [&_img]:w-full [&_svg]:h-full [&_svg]:w-full',
        sizeClass[size],
        className,
      )}
    >
      {'iconImage' in props ? (
        <img src={props.iconImage} alt={props.alt ?? ''} />
      ) : (
        props.children
      )}
    </span>
  );
}
