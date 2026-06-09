import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import classes from './input.module.css';

const INPUT_CLASSES = `${commonClasses.base} ${commonClasses.focusable} ${classes.input}`;
export function Input({ style, ...props }: CommonProps<'input'>) {
  const cStyles = useCachedStyles();

  return <input style={{ ...cStyles, ...style }} {...getCommonProps(props, INPUT_CLASSES)} />;
}

const TEXTAREA_CLASSES = `${commonClasses.base} ${commonClasses.focusable} ${classes.textarea}`;
export function Textarea({ style, ...props }: CommonProps<'textarea'>) {
  const cStyles = useCachedStyles();

  return <textarea style={{ ...cStyles, ...style }} {...getCommonProps(props, TEXTAREA_CLASSES)} />;
}

const SELECT_CLASSES = `${commonClasses.base} ${commonClasses.focusable} ${classes.select}`;
export function Select({ style, ...props }: CommonProps<'select'>) {
  const cStyles = useCachedStyles();

  return (
    <div className={classes.selectWrapper}>
      <select style={{ ...cStyles, ...style }} {...getCommonProps(props, SELECT_CLASSES)} />
    </div>
  );
}

const CHECKBOX_CLASSES = `${commonClasses.base} ${commonClasses.focusable} ${classes.checkbox}`;
export function Checkbox({ style, ...props }: Omit<CommonProps<'input'>, 'type'>) {
  const cStyles = useCachedStyles();

  return <input style={{ ...cStyles, ...style }} {...getCommonProps(props, CHECKBOX_CLASSES)} type='checkbox' />;
}

const RADIO_CLASSES = `${commonClasses.base} ${commonClasses.focusable} ${classes.radio}`;
export function Radio({ style, ...props }: Omit<CommonProps<'input'>, 'type'>) {
  const cStyles = useCachedStyles(true);

  return <input style={{ ...cStyles, ...style }} {...getCommonProps(props, RADIO_CLASSES)} type='radio' />;
}

const SWITCH_CLASSES = `${commonClasses.base} ${commonClasses.focusable} ${classes.switch}`;
export function Switch({ style, ...props }: Omit<CommonProps<'input'>, 'type' | 'role'>) {
  const cStyles = useCachedStyles(true);

  return (
    <input style={{ ...cStyles, ...style }} {...getCommonProps(props, SWITCH_CLASSES)} role='switch' type='checkbox' />
  );
}

const SLIDER_CLASSES = `${commonClasses.base} ${commonClasses.focusable} ${classes.slider}`;
export function Slider({ style, ...props }: Omit<CommonProps<'input'>, 'type'>) {
  const cStyles = useCachedStyles();

  return <input style={{ ...cStyles, ...style }} {...getCommonProps(props, SLIDER_CLASSES)} type='range' />;
}

export function Label(props: CommonProps<'label'>) {
  return <label {...getCommonProps(props, classes.label)} />;
}
