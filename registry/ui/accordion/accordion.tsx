import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import type { ReactNode } from 'react';
import classes from './accordion.module.css';

const ACCORDION_CLASSES = `${commonClasses.base} ${classes.accordionItem}`;
export function AccordionItem({ title, style, children, ...props }: CommonProps<'details', { title?: ReactNode }>) {
  const cStyles = useCachedStyles();

  return (
    <details style={{ ...cStyles, ...style }} {...getCommonProps(props, ACCORDION_CLASSES)}>
      <summary className={classes.summary}>{title}</summary>
      <div className={classes.content}>{children}</div>
    </details>
  );
}
