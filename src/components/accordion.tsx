import { Code } from '@/component/code/code';
import { AccordionItem } from '@/ui/accordion/accordion';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function Accordion() {
  return (
    <DocPage
      title='Accordion'
      description='A collapsible content panel - like a drawer, but vertical and way more fun. Built on the native <details> element, so it works even if JavaScript took a vacation.'
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add cartuni/accordion' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          The <Code code='AccordionItem' inline /> wraps a native <Code code='<details>' inline /> element. Give it a{' '}
          <Code code='title' inline /> and some children, and you've got yourself a collapsible section. Click it. Go
          on. You know you want to.
        </P>
        <ComponentPreview>
          <AccordionItem title='Is cartUnI production-ready?'>
            Technically? Yes. Philosophically? It depends on your tolerance for wobbly borders in a serious enterprise
            dashboard. We ship to prod. We ship wobbly. These are not mutually exclusive.
          </AccordionItem>
          <AccordionItem title='Why does every component look slightly different?'>
            That's the whole point! The <Code code='useCachedStyles' inline /> hook generates randomized border-radii
            for each component instance. No two buttons, no two cards, no two accordions look the same. It's like
            snowflakes, but nerdier and significantly less cold.
          </AccordionItem>
          <AccordionItem title='Can I put other components inside an accordion?'>
            Absolutely. Throw in buttons, inputs, other cards, a <Code code='Dialog' inline />, your deepest regrets -
            the accordion is non-judgmental. It just collapses and expands. That's its whole personality.
          </AccordionItem>
        </ComponentPreview>
        <Code
          code={`import { AccordionItem } from '@/ui/accordion/accordion';

<AccordionItem title="Is cartUnI production-ready?">
  We ship wobbly. It's a feature.
</AccordionItem>`}
        />
      </DocSection>

      <DocSection title='Disabled'>
        <P>
          Pass <Code code='disabled' inline /> to lock an accordion shut. It goes translucent and the summary becomes
          inert - no clicking, no keyboard, no nothing. The content is sealed away like a forbidden scroll.
        </P>
        <ComponentPreview>
          <AccordionItem title="Classified (you can't open me)" disabled>
            If you're reading this, something went very wrong. Or you're inspecting the DOM. Probably the DOM thing.
          </AccordionItem>
          <AccordionItem title='Totally Normal Accordion'>
            Freedom feels good. This one you can open. Go nuts.
          </AccordionItem>
        </ComponentPreview>
        <Code
          code={`<AccordionItem title="Classified" disabled>
  If you're reading this, you're in the DOM inspector.
</AccordionItem>`}
        />
      </DocSection>

      <DocSection title='API Reference'>
        <PropsTable
          items={[
            { name: 'title', type: 'ReactNode', description: 'Content displayed in the clickable summary header.' },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'Locks the accordion shut. Sets aria-disabled and makes the summary inert.',
            },
            { name: 'children', type: 'ReactNode', description: 'Content revealed when the accordion is expanded.' },
            { name: '...props', type: 'HTMLDetailsElement', description: 'All native <details> props are forwarded.' },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
