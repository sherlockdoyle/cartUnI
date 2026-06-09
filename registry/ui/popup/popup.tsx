import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps, type CommonPropsWithAs } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import { cloneElement, isValidElement, useId, type CSSProperties, type ElementType, type ReactNode } from 'react';
import classes from './popup.module.css';

declare module 'react' {
  interface ButtonHTMLAttributes<T> {
    command?: string;
    commandfor?: string;
  }
}

const CLOSE_CLASSES = `${commonClasses.focusable} ${classes.close}`;
export function Dialog({
  trigger,
  style,
  children,
  ...props
}: Omit<CommonProps<'dialog', { trigger: ReactNode }>, 'closedby'>) {
  const closeStyles = useCachedStyles(true);

  const id = useId();
  const triggerProps = { command: 'show-modal', commandfor: id };

  return (
    <>
      {isValidElement(trigger) ? (
        cloneElement(trigger, triggerProps)
      ) : (
        <button className={classes.trigger} {...triggerProps}>
          {trigger}
        </button>
      )}
      <dialog id={id} {...getCommonProps(props, classes.dialog)} closedby='any'>
        {children}
        <button
          command='close'
          className={CLOSE_CLASSES}
          style={closeStyles as CSSProperties}
          commandfor={id}
          aria-label='Close dialog'
        />
      </dialog>
    </>
  );
}

type Or<A extends string, B extends string> = A | B | `${A} ${B}` | `${B} ${A}`;
type Dbl<A extends string> = A | `${A} ${A}`;

type S = '' | 'span-';
type E = 'start' | 'end';
type C = 'center' | 'span-all';

type PositionArea =
  | Or<C | `${S}${'left' | 'right' | `${'' | 'self-'}x-${E}`}`, C | `${S}${'top' | 'bottom' | `${'' | 'self-'}y-${E}`}`>
  | Or<C | `${S}block-${E}`, C | `${S}inline-${E}`>
  | Or<'span-all' | `${S}self-block-${E}`, 'span-all' | `${S}self-inline-${E}`>
  | Dbl<C | `${S}${E}`>
  | Dbl<C | `${S}self-${E}`>;

export function Popover<E extends ElementType = 'div'>({
  as,
  trigger,
  style,
  positionArea = 'top',
  id,
  role = 'dialog',
  children,
  ...props
}: CommonPropsWithAs<E, { trigger?: ReactNode; positionArea?: PositionArea }>) {
  const Comp = as ?? 'div';

  const generatedId = useId();
  const popoverId = id ?? generatedId;
  const triggerProps = {
    popoverTarget: popoverId,
    style: { anchorName: `--${popoverId}` },
    'aria-haspopup': role,
  };

  return (
    <>
      {isValidElement(trigger) ? (
        cloneElement(trigger, triggerProps)
      ) : (
        <button className={classes.trigger} {...triggerProps}>
          {trigger}
        </button>
      )}
      <Comp
        style={{ ...style, positionAnchor: `--${popoverId}`, positionArea }}
        {...getCommonProps(props, classes.popover)}
        id={popoverId}
        role={role}
        popover='auto'
      >
        {children}
      </Comp>
    </>
  );
}

const CONTENT_CLASSES = `${commonClasses.base} ${commonClasses.shadow} ${classes.content}`;
export function Tooltip<E extends ElementType = 'div'>({
  as,
  content,
  style,
  id,
  children,
  ...props
}: Omit<CommonPropsWithAs<E, { content?: ReactNode }>, 'role'>) {
  const Comp = (as as ElementType) ?? 'div';
  const cStyles = useCachedStyles();

  const generatedId = useId();
  const tooltipId = id ?? generatedId;

  return (
    <div className={classes.tooltipWrapper}>
      {isValidElement(children) ? cloneElement(children, { 'aria-describedby': tooltipId }) : children}
      <Comp style={{ ...cStyles, ...style }} {...getCommonProps(props, CONTENT_CLASSES)} id={tooltipId} role='tooltip'>
        {content}
      </Comp>
    </div>
  );
}
