import commonClasses from '@/style/common.module.css';
import type { ComponentProps, ElementType } from 'react';

type Classes = (string | undefined | null | false)[];
export function cn(...classes: Classes) {
  return classes.filter(Boolean).join(' ');
}

type Variant = 'primary' | 'secondary' | 'muted' | 'success' | 'warn' | 'error';
const variantClasses: Record<Variant, string> = {
  primary: commonClasses.vPrimary,
  secondary: commonClasses.vSecondary,
  muted: commonClasses.vMuted,
  success: commonClasses.vSuccess,
  warn: commonClasses.vWarn,
  error: commonClasses.vError,
};

type Pattern = 'hachure' | 'crosshatch' | 'dots' | 'stripes' | 'zigzag' | 'paper';
export const patternClasses: Record<Pattern, string> = {
  hachure: commonClasses.hachure,
  crosshatch: commonClasses.crosshatch,
  dots: commonClasses.dots,
  stripes: commonClasses.stripes,
  zigzag: commonClasses.zigzag,
  paper: commonClasses.paper,
};

interface SharedProps {
  pattern?: Pattern;
  noise?: boolean;
}
export type CommonProps<E extends ElementType, P = unknown> = Omit<
  ComponentProps<E>,
  keyof SharedProps | 'as' | keyof P
> &
  SharedProps &
  P;
export type CommonPropsWithAs<E extends ElementType = ElementType, P = unknown> = CommonProps<E, P> & { as?: E };

export type WithVariant<T> = T & { variant?: Variant };

type CleanProps<T> = Omit<T, keyof SharedProps>;
export function getCommonProps<T extends WithVariant<SharedProps & { className?: string }>>(
  { variant, pattern, noise, className, ...rest }: T,
  ...classes: Classes
): CleanProps<T> {
  return {
    className: cn(
      ...classes,
      variant && variantClasses[variant],
      pattern && patternClasses[pattern],
      noise && commonClasses.noise,
      className,
    ),
    ...rest,
  } as CleanProps<T>;
}
