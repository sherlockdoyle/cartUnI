import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import classes from './table.module.css';

const TABLE_CLASSES = `${commonClasses.base} ${classes.table}`;
export function Table({ fixed, style, children, ...props }: CommonProps<'table', { fixed?: boolean }>) {
  const cStyles = useCachedStyles();

  return (
    <table
      style={{ ...cStyles, ...style, tableLayout: fixed ? 'fixed' : undefined }}
      {...getCommonProps(props, TABLE_CLASSES)}
    >
      {children}
    </table>
  );
}

export function THead(props: CommonProps<'thead'>) {
  return <thead {...getCommonProps(props, classes.thead)} />;
}

export function TBody(props: CommonProps<'tbody'>) {
  return <tbody {...getCommonProps(props, classes.tbody)} />;
}

export function TFoot(props: CommonProps<'tfoot'>) {
  return <tfoot {...getCommonProps(props, classes.tfoot)} />;
}

export function Tr(props: CommonProps<'tr'>) {
  return <tr {...getCommonProps(props, classes.tr)} />;
}

export function Th(props: CommonProps<'th'>) {
  return <th {...getCommonProps(props, classes.th)} />;
}

export function Td(props: CommonProps<'td'>) {
  return <td {...getCommonProps(props, classes.td)} />;
}
