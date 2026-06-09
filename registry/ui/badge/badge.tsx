import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonPropsWithAs, type WithVariant } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import type { ElementType } from 'react';
import classes from './badge.module.css';

const BADGE_CLASSES = `${commonClasses.base} ${classes.badge}`;
export function Badge<E extends ElementType = 'span'>({ as, style, ...props }: WithVariant<CommonPropsWithAs<E>>) {
  const Comp = as ?? 'span';
  const cStyles = useCachedStyles();

  return (
    <Comp style={{ ...cStyles, ...style }} {...getCommonProps({ variant: 'secondary', ...props }, BADGE_CLASSES)} />
  );
}
