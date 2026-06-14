import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import type { ElementType } from 'react';
import classes from './typography.module.css';

type HeadingProps<E extends ElementType> = CommonProps<E, { b?: boolean }>;
function useHeadingProps<E extends ElementType>({ b, style, ...props }: HeadingProps<E>, className: string) {
  const cStyles = useCachedStyles();
  return getCommonProps({ style: { ...cStyles, ...style }, ...props }, className, b && classes.b);
}

export function H1(props: HeadingProps<'h1'>) {
  return <h1 {...useHeadingProps(props, classes.h1)} />;
}

export function H2(props: HeadingProps<'h2'>) {
  return <h2 {...useHeadingProps(props, classes.h2)} />;
}

export function H3(props: HeadingProps<'h3'>) {
  return <h3 {...useHeadingProps(props, classes.h3)} />;
}

export function H4(props: HeadingProps<'h4'>) {
  return <h4 {...useHeadingProps(props, classes.h4)} />;
}

export function H5(props: HeadingProps<'h5'>) {
  return <h5 {...useHeadingProps(props, classes.h5)} />;
}

export function H6(props: HeadingProps<'h6'>) {
  return <h6 {...useHeadingProps(props, classes.h6)} />;
}

export function P(props: CommonProps<'p'>) {
  return <p {...getCommonProps(props, classes.p)} />;
}

export function Small(props: CommonProps<'small'>) {
  return <small {...getCommonProps(props, classes.small)} />;
}

const A_CLASSES = `${commonClasses.focusable} ${classes.a}`;
export function A({ style, ...props }: CommonProps<'a'>) {
  const cStyles = useCachedStyles();

  return <a style={{ ...cStyles, ...style }} {...getCommonProps(props, A_CLASSES)} />;
}

export function Blockquote({ style, ...props }: CommonProps<'blockquote'>) {
  const cStyles = useCachedStyles();

  return <blockquote style={{ ...cStyles, ...style }} {...getCommonProps(props, classes.blockquote)} />;
}

export function Mark({ style, ...props }: CommonProps<'mark'>) {
  const cStyles = useCachedStyles();

  return <mark style={{ ...cStyles, ...style }} {...getCommonProps(props, classes.mark)} />;
}

export function Ol(props: CommonProps<'ol'>) {
  return <ol {...getCommonProps(props, classes.ol)} />;
}

export function Ul({ randomListStyle, ...props }: CommonProps<'ul', { randomListStyle?: boolean }>) {
  return <ul {...getCommonProps(props, classes.ul, randomListStyle && classes.randomListStyle)} />;
}

export function Li({ style, ...props }: CommonProps<'li'>) {
  const cStyles = useCachedStyles(true);

  return <li style={{ ...cStyles, ...style }} {...getCommonProps(props, classes.li)} />;
}

export function Hr({ style, ...props }: CommonProps<'hr'>) {
  const cStyles = useCachedStyles(true);

  return <hr style={{ ...cStyles, ...style }} {...getCommonProps(props, classes.hr)} />;
}
