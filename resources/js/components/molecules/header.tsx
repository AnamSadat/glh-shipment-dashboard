import { cn } from '@/lib/utils';
import ClassNameProps from '@/types/classname-props';

interface HeaderProps extends ClassNameProps {
  title?: string;
  titleColor?: string;
  space?: boolean;
  classNameTitleColor?: string;
}

export function Header({
  title,
  className,
  titleColor,
  space,
  classNameTitleColor,
}: HeaderProps) {
  const baseClass = cn('text-5xl font-bold', className);
  return (
    <h1 className={baseClass}>
      {title}
      {space && ' '}
      <span className={classNameTitleColor}>{titleColor}</span>
    </h1>
  );
}
