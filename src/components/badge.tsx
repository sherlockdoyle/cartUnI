import { Code } from '@/component/code/code';
import { Badge } from '@/ui/badge/badge';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function BadgeDocs() {
  return (
    <DocPage
      title='Badge'
      description='A tiny label that packs a punch. Use it to tag, categorize, or just add a little flair. Think of it as a sticker for your UI.'
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add cartuni/badge' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          Badges are inline elements that show a short label. They're great for status indicators, counts, categories,
          or just making things look important.
        </P>
        <ComponentPreview>
          <Badge>Default</Badge>
        </ComponentPreview>
        <Code
          code={`import { Badge } from '@/ui/badge/badge';

<Badge>Default</Badge>`}
        />
      </DocSection>

      <DocSection title='Variants'>
        <P>
          All the variant flavors are available. Each one shifts the badge's background via the{' '}
          <Code code='--c-variant' inline /> CSS variable.
        </P>
        <ComponentPreview>
          <Badge variant='primary'>Primary</Badge>
          <Badge variant='secondary'>Secondary</Badge>
          <Badge variant='muted'>Muted</Badge>
          <Badge variant='success'>Success</Badge>
          <Badge variant='warn'>Warning</Badge>
          <Badge variant='error'>Error</Badge>
        </ComponentPreview>
        <Code
          code={`<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="muted">Muted</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warn">Warning</Badge>
<Badge variant="error">Error</Badge>`}
        />
      </DocSection>

      <DocSection title='With Patterns'>
        <P>Badges look extra fun with background patterns. Perfect for when a plain badge just isn't enough.</P>
        <ComponentPreview>
          <Badge pattern='hachure' variant='primary'>
            Hachure
          </Badge>
          <Badge pattern='dots' variant='success'>
            Dots
          </Badge>
          <Badge pattern='stripes' variant='warn'>
            Stripes
          </Badge>
          <Badge pattern='zigzag' variant='error'>
            Zigzag
          </Badge>
        </ComponentPreview>
      </DocSection>

      <DocSection title='API Reference'>
        <PropsTable
          items={[
            {
              name: 'variant',
              type: 'Variant',
              default: "'secondary'",
              description: 'Controls the badge color scheme.',
            },
            { name: 'as', type: 'ElementType', default: "'span'", description: 'Polymorphic root element.' },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
