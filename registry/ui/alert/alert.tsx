import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonPropsWithAs, type WithVariant } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import type { ElementType, ReactNode } from 'react';
import classes from './alert.module.css';

const ALERT_CLASSES = `${commonClasses.base} ${commonClasses.shadow} ${classes.alert}`;
export function Alert<E extends ElementType = 'div'>({
  as,
  icon,
  title,
  style,
  role = 'alert',
  children,
  ...props
}: WithVariant<CommonPropsWithAs<E, { icon?: ReactNode; title?: ReactNode }>>) {
  const Comp = as ?? 'div';
  const cStyles = useCachedStyles();

  return (
    <Comp
      style={{ ...cStyles, ...style }}
      {...getCommonProps({ variant: 'secondary', ...props }, ALERT_CLASSES)}
      role={role}
    >
      {icon && <span className={classes.icon}>{icon}</span>}
      <div className={classes.content}>
        {title && <h5 className={classes.title}>{title}</h5>}
        <div className={classes.body}>{children}</div>
      </div>
    </Comp>
  );
}
