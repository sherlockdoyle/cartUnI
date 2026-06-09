import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import classes from './progress.module.css';

const PROGRESS_CLASSES = `${commonClasses.base} ${classes.progress}`;
export function Progress({ style, ...props }: CommonProps<'progress'>) {
  const cStyles = useCachedStyles();

  return <progress style={{ ...cStyles, ...style }} {...getCommonProps(props, PROGRESS_CLASSES)} />;
}
