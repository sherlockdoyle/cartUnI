import { Code } from '@/component/code/code';
import { Button } from '@/ui/button/button';
import { Icon, externalLink } from '@/ui/icon/icon';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function ButtonDocs() {
  return (
    <DocPage
      title='Button'
      description='The trusty button - click it, smash it, hover over it and watch it squish. Comes in multiple sizes and every variant flavor you could want.'
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add @cartuni/button' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          Import it, plop it down, and watch it wobble. The Button component renders a <Code code='<button>' inline />{' '}
          by default, but you can change it to any element with the <Code code='as' inline /> prop.
        </P>
        <ComponentPreview>
          <Button>Click me!</Button>
        </ComponentPreview>
        <Code
          code={`import { Button } from '@/ui/button/button';

// The most important button in the world
<Button>Click me!</Button>`}
        />
      </DocSection>

      <DocSection title='Variants'>
        <P>
          Six variants to match every mood. The active press animation slides the button down and flattens its shadow -
          very satisfying!
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
      </DocSection>

      <DocSection title='Sizes'>
        <P>
          From smol to chonky. The <Code code='icon' inline /> size gives you a perfect square for icon-only buttons.
        </P>
        <ComponentPreview>
          <Button size='sm'>Small</Button>
          <Button size='default'>Default</Button>
          <Button size='lg'>Large</Button>
          <Button size='icon'>
            <Icon path={externalLink} />
          </Button>
        </ComponentPreview>
        <Code
          code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon path={externalLink} /></Button>`}
        />
      </DocSection>

      <DocSection title='As a Link'>
        <P>
          Use the <Code code='as' inline /> prop to render the button as an anchor tag. It'll look like a button but
          behave like a link. Best of both worlds!
        </P>
        <ComponentPreview>
          <Button as='a' href='https://github.com/sherlockdoyle/cartUnI' target='_blank'>
            <Icon path={externalLink} />
            Star cartUnI on GitHub
          </Button>
        </ComponentPreview>
        <Code
          code={`<Button as="a" href="https://github.com/sherlockdoyle/cartUnI" target="_blank">
  <Icon path={externalLink} />
  Visit GitHub
</Button>`}
        />
      </DocSection>

      <DocSection title='With Patterns'>
        <P>Buttons with background patterns - because why not?</P>
        <ComponentPreview>
          <Button pattern='hachure' variant='primary'>
            Hachure
          </Button>
          <Button pattern='dots' variant='success'>
            Dots
          </Button>
          <Button pattern='crosshatch' variant='warn'>
            Crosshatch
          </Button>
        </ComponentPreview>
      </DocSection>

      <DocSection title='Disabled'>
        <P>
          Hit it with the native <Code code='disabled' inline /> attribute and the button goes translucent. Hover and
          active effects bail out too - the button is on vacation.
        </P>
        <ComponentPreview>
          <Button disabled>Can't touch this</Button>
          <Button variant='secondary' disabled>
            Also nope
          </Button>
        </ComponentPreview>
        <Code
          code={`<Button disabled>Can't touch this</Button>
<Button variant="secondary" disabled>Also nope</Button>`}
        />
      </DocSection>

      <DocSection title='API Reference'>
        <PropsTable
          items={[
            {
              name: 'variant',
              type: 'Variant',
              default: "'primary'",
              description: 'Controls the button color scheme.',
            },
            {
              name: 'size',
              type: "'default' | 'sm' | 'lg' | 'icon'",
              default: "'default'",
              description: 'Sets the button size.',
            },
            {
              name: 'as',
              type: 'ElementType',
              default: "'button'",
              description: 'Polymorphic root element (e.g., "a" for links).',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'Disables the button. Half-opacity, no hover/active effects.',
            },
            { name: '...props', type: 'ButtonHTMLAttributes', description: 'All native button props are forwarded.' },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
