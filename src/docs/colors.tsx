import { Code } from '@/component/code/code';
import { Alert } from '@/ui/alert/alert';
import { check, Icon, info } from '@/ui/icon/icon';
import { A, P } from '@/ui/typography/typography';
import { useState, type CSSProperties } from 'react';
import { DocPage, DocSection } from '../doc-page';
import classes from '../docs.module.css';

const colors = [
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'brown',
    'grey',
    'blue-grey',
  ] as const,
  shades = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'a100',
    'a200',
    'a400',
    'a700',
  ] as const;

function ColorTable() {
  const [copiedColor, setCopiedColor] = useState<string>();

  return (
    <table className={classes.colorTable}>
      <thead>
        <tr>
          <th />
          {shades.map(col => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {colors.map(color => (
          <tr key={color}>
            <th>{color}</th>
            {shades.map(shade => {
              const varName = `--c-${color}-${shade}`;

              return (
                <td key={shade}>
                  <button
                    title={varName}
                    onClick={async () => {
                      await navigator.clipboard.writeText(varName);
                      setCopiedColor(varName);
                    }}
                    style={{ '--color': `var(${varName})` } as CSSProperties}
                    aria-label={`Copy ${varName}`}
                  >
                    {copiedColor === varName && <Icon path={check} />}
                  </button>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Colors() {
  return (
    <DocPage
      title='Colors'
      description="cartUnI's entire color system, Material Design style, distilled into a ludicrous number of CSS variables. Click any swatch to copy its variable name. Your clipboard is about to get very colorful."
    >
      <DocSection title='How It Works'>
        <P>
          Every color lives as a CSS custom property on <Code code=':root' inline />. The naming convention is{' '}
          <Code code='--c-{color}-{shade}' inline /> - where <Code code='color' inline /> is the color name (e.g.{' '}
          <Code code='red' inline />, <Code code='blue-grey' inline />) and <Code code='shade' inline /> is the weight
          step.
        </P>
        <P>
          There are 19 color families in total. Each family gets 10 standard shades (<Code code='50' inline /> through{' '}
          <Code code='900' inline />) and 4 accent variants (<Code code='a100' inline />, <Code code='a200' inline />,{' '}
          <Code code='a400' inline />, <Code code='a700' inline />
          ). That's a grand total of <strong>266 color tokens</strong>. Overengineered? Absolutely. Useful? Also yes.
        </P>
        <Code
          code={`/* Standard shades - lighter to darker */
var(--c-red-50)   /* basically white with a hint of red */
var(--c-red-500)  /* the anchor shade */
var(--c-red-900)  /* so dark it's basically mystery */

/* Accent shades - high-chroma, punchy variants */
var(--c-red-a100) /* bright and perky */
var(--c-red-a700) /* vivid and slightly unhinged */`}
        />
      </DocSection>

      <DocSection title='Under the Hood'>
        <P>
          Colors are defined in{' '}
          <A
            href='https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch'
            rel='noreferrer noopener'
            target='_blank'
          >
            OKLCH
          </A>{' '}
          color space - a perceptually uniform color model that keeps lightness consistent across hues. Unlike{' '}
          <Code code='hsl()' inline />, OKLCH won't make your yellows blindingly bright while your blues sulk in the
          corner. Every color "feels" the same weight at the same shade step.
        </P>
        <P>
          The base <Code code='-500' inline /> shade for each family is hardcoded. All other shades are derived from it
          using CSS <Code code='oklch(from ...)' inline /> relative color syntax.
        </P>
        <Alert title='OKLCH browser support' icon={<Icon path={info} />} variant='primary'>
          OKLCH is supported in all modern browsers (Chrome 111+, Firefox 113+, Safari 15.4+). If you're supporting
          Internet Explorer... well, I'm rooting for you. Spiritually.
        </Alert>
      </DocSection>

      <DocSection title='Available Colors'>
        <P>
          All 19 color families, all 14 shades each. Click any swatch to copy its CSS variable name. First 10 columns
          are the standard scale (50-900), last 4 are the accent variants (a100-a700).
        </P>
        <ColorTable />
      </DocSection>
    </DocPage>
  );
}
