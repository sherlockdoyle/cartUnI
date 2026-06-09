import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonPropsWithAs } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import { useState, type ElementType, type ReactNode } from 'react';
import classes from './avatar.module.css';

const AVATAR_CLASSES = `${commonClasses.base} ${classes.avatar}`;
export function Avatar<E extends ElementType = 'span'>({
  as,
  src,
  fallback,
  style,
  ...props
}: CommonPropsWithAs<E, { src?: string; fallback?: ReactNode }>) {
  const Comp = as ?? 'span';
  const cStyles = useCachedStyles(true);

  const [imgError, setImgError] = useState(false);

  return (
    <Comp style={{ ...cStyles, ...style }} {...getCommonProps(props, AVATAR_CLASSES)}>
      {src && !imgError ? (
        <img
          className={classes.img}
          src={src}
          alt={typeof fallback === 'string' ? fallback : 'Avatar'}
          onError={() => setImgError(true)}
        />
      ) : (
        fallback && <span className={classes.fallback}>{fallback}</span>
      )}
    </Comp>
  );
}
