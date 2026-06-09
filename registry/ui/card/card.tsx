import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps, type CommonPropsWithAs } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import type { ElementType } from 'react';
import classes from './card.module.css';

const CARD_CLASSES = `${commonClasses.base} ${commonClasses.shadow} ${classes.card}`;
export function Card<E extends ElementType = 'article'>({ as, style, ...props }: CommonPropsWithAs<E>) {
  const Comp = as ?? 'article';
  const cStyles = useCachedStyles();

  return <Comp style={{ ...cStyles, ...style }} {...getCommonProps(props, CARD_CLASSES)} />;
}

export function CardHeader(props: CommonProps<'header'>) {
  return <header {...getCommonProps(props, classes.cardHeader)} />;
}

export function CardTitle<E extends ElementType = 'h3'>({ as, ...props }: CommonPropsWithAs<E>) {
  const Comp = as ?? 'h3';

  return <Comp {...getCommonProps(props, classes.cardTitle)} />;
}

export function CardDescription(props: CommonProps<'p'>) {
  return <p {...getCommonProps(props, classes.cardDescription)} />;
}

export function CardContent(props: CommonProps<'div'>) {
  return <div {...getCommonProps(props, classes.cardContent)} />;
}

export function CardFooter(props: CommonProps<'footer'>) {
  return <footer {...getCommonProps(props, classes.cardFooter)} />;
}
