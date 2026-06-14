import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps } from '@/lib/utils';
import { Button } from '@/ui/button/button';
import { check, copy, Icon } from '@/ui/icon/icon';
import { useMemo, useState } from 'react';
import { highlight, type HighlightOptions } from 'sugar-high';
import classes from './code.module.css';

export function Code({
  code,
  options,
  inline,
  noCopy,
  style,
  ...props
}: CommonProps<'div', { code: string; options?: HighlightOptions; inline?: boolean; noCopy?: boolean }>) {
  const [copied, setCopied] = useState(false);

  const cStyles = useCachedStyles();
  const highlighted = useMemo(() => highlight(code, options), [code, options]);
  const codeElem = <code className={classes.code} dangerouslySetInnerHTML={{ __html: highlighted }} />;

  return (
    <div
      style={{ ...cStyles, ...style }}
      {...getCommonProps(
        props,
        classes.codeWrapper,
        inline && classes.inline,
        !(inline || noCopy) && classes.hasButton,
      )}
    >
      {inline ? codeElem : <pre>{codeElem}</pre>}

      {inline || noCopy || (
        <Button
          className={classes.copyButton}
          variant='muted'
          size='icon'
          onClick={async () => {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          }}
        >
          <Icon path={copied ? check : copy} />
        </Button>
      )}
    </div>
  );
}
