import { useCachedStyles } from '@/hook/useCachedStyles';
import { getCommonProps, type CommonProps } from '@/lib/utils';
import { Button } from '@/ui/button/button';
import { check, copy, Icon } from '@/ui/icon/icon';
import { useMemo, useState } from 'react';
import { highlight, type HighlightOptions } from 'sugar-high';
import classes from './code.module.css';

interface CodeProps {
  code: string;
  options?: HighlightOptions;
  noCopy?: boolean;
}
type BlockCodeProps = CommonProps<'pre', CodeProps & { inline?: false }>;
type InlineCodeProps = CommonProps<'code', CodeProps & { inline: true }>;

export function Code({ code, options, inline, noCopy, style, ...props }: BlockCodeProps | InlineCodeProps) {
  const [copied, setCopied] = useState(false);

  const cStyles = useCachedStyles(),
    allStyles = { ...cStyles, ...style };
  const highlighted = useMemo(() => highlight(code, options), [code, options]);

  if (inline)
    return (
      <code
        style={allStyles}
        {...getCommonProps(props, classes.code, classes.inline)}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    );

  return (
    <pre
      style={allStyles}
      // props is not really BlockCodeProps here, but this is short and valid enough
      {...getCommonProps(props as BlockCodeProps, classes.codeWrapper, !noCopy && classes.hasButton)}
    >
      <code className={classes.code} dangerouslySetInnerHTML={{ __html: highlighted }} />

      {noCopy || (
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
    </pre>
  );
}
