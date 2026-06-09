import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonPropsWithAs, type WithVariant } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import type { ElementType } from 'react';
import classes from './button.module.css';

type Size = 'default' | 'sm' | 'lg' | 'icon';
const sizeClasses: Record<Size, string> = {
  default: classes.sDefault,
  sm: classes.sSm,
  lg: classes.sLg,
  icon: classes.sIcon,
};

const BUTTON_CLASSES = `${commonClasses.base} ${commonClasses.shadow} ${commonClasses.focusable} ${classes.button}`;
export function Button<E extends ElementType = 'button'>({
  as,
  size = 'default',
  style,
  ...props
}: WithVariant<CommonPropsWithAs<E, { size?: Size }>>) {
  const Comp = as ?? 'button';
  const cStyles = useCachedStyles();

  return (
    <Comp
      style={{ ...cStyles, ...style }}
      {...getCommonProps({ variant: 'primary', ...props }, BUTTON_CLASSES, sizeClasses[size])}
    />
  );
}
