import { Code } from '@/component/code/code';
import { Alert } from '@/ui/alert/alert';
import { Badge } from '@/ui/badge/badge';
import { Button } from '@/ui/button/button';
import { Card } from '@/ui/card/card';
import { Icon, info, triangleAlert } from '@/ui/icon/icon';
import { P } from '@/ui/typography/typography';
import type { ComponentProps } from 'react';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';
import classes from '../docs.module.css';

export function Box(props: ComponentProps<typeof Card>) {
  return <Card className={classes.box} {...props} />;
}

export default function CommonStyles() {
  return (
    <DocPage
      title='Common Styles'
      description="The secret sauce that makes everything look delightfully wonky. Learn about variants, patterns, noise, and animations - the building blocks of cartUnI's personality."
    >
      <DocSection title='Variants'>
        <P>
          Every component that supports variants gets a <Code code='variant' inline /> prop. Variants control the accent
          color through a CSS variable (<Code code='--c-variant' inline />
          ), so the whole component shifts hue in one go. Pretty nifty!
        </P>
        <ComponentPreview>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='muted'>Muted</Button>
          <Button variant='success'>Success</Button>
          <Button variant='warn'>Warn</Button>
          <Button variant='error'>Error</Button>
        </ComponentPreview>
        <Code
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="muted">Muted</Button>
<Button variant="success">Success</Button>
<Button variant="warn">Warn</Button>
<Button variant="error">Error</Button>`}
        />
        <PropsTable
          items={[
            {
              name: 'variant',
              type: "'primary' | 'secondary' | 'muted' | 'success' | 'warn' | 'error'",
              description: "Sets the component's color theme via --c-variant CSS variable.",
            },
          ]}
        />
      </DocSection>

      <DocSection title='Patterns'>
        <P>
          Want some texture? Slap a <Code code='pattern' inline /> prop on any component and watch it get fancy. These
          are pure CSS background patterns - no images, no SVGs, just vibes. And yes, <em>every</em> cartUnI component
          supports the <Code code='pattern' inline /> prop - no exceptions.
        </P>
        <Alert title='Heads up about the paper pattern' icon={<Icon path={triangleAlert} />} variant='warn'>
          The <Code code='paper' inline /> pattern uses an SVG <Code code='<feTurbulence />' inline /> filter under the
          hood to generate its texture. Due to how browsers render SVG filters, the full effect may not appear correctly
          in all browsers - some will nail it, some will render it partially, and some will just give you a blank stare.
          On top of that, the texture appearance can shift between light and dark themes since it composites over the
          component's background color. Use it for the vibe, not the pixel-perfect precision.
        </Alert>
        <ComponentPreview>
          <Box pattern='hachure'>Hachure</Box>
          <Box pattern='crosshatch'>Crosshatch</Box>
          <Box pattern='dots'>Dots</Box>
          <Box pattern='stripes'>Stripes</Box>
          <Box pattern='zigzag'>Zigzag</Box>
          <Box pattern='paper'>Paper</Box>
        </ComponentPreview>
        <Code
          code={`<Card pattern="hachure">Hachure</Card>
<Card pattern="crosshatch">Crosshatch</Card>
<Card pattern="dots">Dots</Card>
<Card pattern="stripes">Stripes</Card>
<Card pattern="zigzag">Zigzag</Card>
<Card pattern="paper">Paper</Card>`}
        />
        <PropsTable
          items={[
            {
              name: 'pattern',
              type: "'hachure' | 'crosshatch' | 'dots' | 'stripes' | 'zigzag' | 'paper'",
              description: 'Adds a CSS background pattern overlay to the component. Pure CSS, no images!',
            },
          ]}
        />
      </DocSection>

      <DocSection title='Noise Filter'>
        <P>
          The <Code code='noise' inline /> prop applies an SVG <Code code='feDisplacementMap' inline /> filter that
          pushes pixels around to make components look hand-drawn and satisfyingly crinkly. Like everything else,{' '}
          <em>all</em> cartUnI components support the <Code code='noise' inline /> prop.
        </P>
        <Alert
          title={
            <>
              The <Code code='noise' inline /> prop requires the global Filter component.
            </>
          }
          icon={<Icon path={info} />}
          variant='primary'
        >
          The displacement filter works by referencing an SVG <Code code='<filter id="noise" />' inline /> element that
          must exist somewhere in the DOM. If you skipped the optional <em>Add the Noise Filter</em> step during
          installation, the <Code code='noise' inline /> prop will silently do nothing - no errors, just vibes-free
          components. Head back to Installation and drop the <Code code='<Filter />' inline /> component at your app
          root to fix that right up.
        </Alert>
        <ComponentPreview>
          <Box noise>I'm noisy!</Box>
          <Box>I'm smooth</Box>
          <Box pattern='crosshatch' noise>
            I'm noisy with pattern
          </Box>
        </ComponentPreview>
        <Code
          code={`<Badge noise>I'm noisy!</Badge>
<Badge>I'm smooth</Badge>`}
        />
      </DocSection>

      <DocSection title='Randomized Borders'>
        <P>
          Here's the real magic trick - every component instance gets a unique, randomly-generated border via the{' '}
          <Code code='useCachedStyles' inline /> hook. This means no two buttons, cards, or badges will ever look
          exactly the same. It's like snowflakes, but for UI.
        </P>
        <ComponentPreview>
          <Button>I'm unique!</Button>
          <Button>No, I am!</Button>
          <Button>We're all special.</Button>
          <Button>CSS said so.</Button>
        </ComponentPreview>
        <P>
          The hook generates two sets of random border-radius values (<Code code='--radius' inline /> and{' '}
          <Code code='--radius-alt' inline />
          ), plus a tiny random <Code code='transform' inline /> (a hair of rotation and skew), all cached by React{' '}
          <Code code='useId()' inline /> so a component keeps its shape across re-renders. On hover or focus, many
          components swap to the alternate radius - giving that playful &ldquo;squiggle&rdquo; feel.
        </P>
        <Alert title='Heads up about the transform' icon={<Icon path={triangleAlert} />} variant='warn'>
          Every component that goes through <Code code='useCachedStyles' inline /> gets its own{' '}
          <Code code='transform' inline />, and CSS transforms create a new stacking context. On pages with{' '}
          <em>lots</em> of components, this can cause unexpected <Code code='z-index' inline /> layering and may bump up
          GPU memory usage on lower-end devices. If that's biting you, just open{' '}
          <Code code='@/hook/useCachedStyles.ts' inline /> and delete the <Code code='transform' inline /> line from the
          returned object - no hard feelings.
        </Alert>
      </DocSection>

      <DocSection title='Animations'>
        <P>
          cartUnI ships with a bunch of cartoony animation classes. You can use them directly via class names, or as
          hover-triggered variants. Each animation has both an always-on version and a <Code code=':hover' inline />{' '}
          version.
        </P>
        <ComponentPreview>
          {['boop', 'float-tilt', 'jump', 'shiver', 'squiggle', 'squish', 'tiptoe', 'wobble'].map(name => (
            <Badge key={name} className={name}>
              {name}
            </Badge>
          ))}
        </ComponentPreview>
        <Code
          code={`/* Always-on - this thing never stops */
<Badge className="boop">Booping forever</Badge>

/* Hover-triggered - only performs when watched */
<Badge className="jump:hover">I jump on hover!</Badge>

/* Available animations:
   boop, float-tilt, jump, shiver,
   squiggle, squish, tiptoe, wobble */`}
        />
      </DocSection>

      <DocSection title='The as Prop'>
        <P>
          Many cartUnI components accept an <Code code='as' inline /> prop for polymorphism - render a Button as an{' '}
          <Code code='<a>' inline />, a Card as a <Code code='<section>' inline />, whatever floats your boat. The types
          stay correct too, so you get the right HTML attributes for whatever element you choose. It's like a
          shapeshifter, but for HTML elements. A very well-typed shapeshifter.
        </P>
        <Code
          code={`// Button disguised as a link (very sneaky)
<Button as="a" href="https://github.com/sherlockdoyle/cartUnI">
  Star on GitHub
</Button>

// Card disguised as a section (very semantic)
<Card as="section">I am semantically correct!</Card>`}
        />
      </DocSection>
    </DocPage>
  );
}
