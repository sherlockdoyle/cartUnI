import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import type { ReactNode } from 'react';
import classes from './accordion.module.css';

const ACCORDION_CLASSES = `${commonClasses.base} ${classes.accordionItem}`;
export function AccordionItem({
  title,
  disabled,
  style,
  children,
  ...props
}: CommonProps<'details', { title?: ReactNode; disabled?: boolean }>) {
  const cStyles = useCachedStyles();

  return (
    <details style={{ ...cStyles, ...style }} {...getCommonProps(props, ACCORDION_CLASSES)} aria-disabled={disabled}>
      <summary className={classes.summary} inert={disabled}>
        {title}
      </summary>
      <div className={classes.content}>{children}</div>
    </details>
  );
}
