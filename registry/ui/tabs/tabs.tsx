import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import { Button } from '@/ui/button/button';
import { useCallback, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import classes from './tabs.module.css';

const TABS_CLASSES = `${commonClasses.base} ${classes.tabsWrapper}`;
export function Tabs<const V extends string>({
  tabs,
  defaultValue,
  style,
  ...props
}: CommonProps<'div', { tabs: { label: string; value: V; children: ReactNode }[]; defaultValue: NoInfer<V> }>) {
  const [active, setActive] = useState(defaultValue);

  const cStyles = useCachedStyles();
  const id = useId();

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const handleKeyDown = useCallback((e: KeyboardEvent, i: number) => {
    let next = i;

    if (e.key === 'ArrowLeft') next = i - 1;
    else if (e.key === 'ArrowRight') next = i + 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    else return;

    e.preventDefault();
    next = (next + tabs.length) % tabs.length;
    setActive(tabs[next].value);
    buttonRefs.current[next]?.focus();
  }, []);

  return (
    <div style={{ ...cStyles, ...style }} {...getCommonProps(props, TABS_CLASSES)}>
      <div className={classes.tabsList} role='tablist' aria-orientation='horizontal'>
        {tabs.map(({ label, value }, i) => {
          const isActive = active === value;

          return (
            <Button
              key={value}
              ref={e => {
                buttonRefs.current[i] = e;
              }}
              id={`${id}-${value}-tab`}
              className={classes.tabButton}
              tabIndex={isActive ? 0 : -1}
              role='tab'
              variant={isActive ? 'primary' : 'secondary'}
              size='sm'
              onClick={() => setActive(value)}
              onKeyDown={e => handleKeyDown(e, i)}
              aria-selected={isActive}
              aria-controls={`${id}-${value}-panel`}
            >
              {label}
            </Button>
          );
        })}
      </div>

      <div
        id={`${id}-${active}-panel`}
        className={classes.tabPanel}
        tabIndex={0}
        role='tabpanel'
        aria-labelledby={`${id}-${active}-tab`}
      >
        {tabs.find(({ value }) => value === active)?.children}
      </div>
    </div>
  );
}
