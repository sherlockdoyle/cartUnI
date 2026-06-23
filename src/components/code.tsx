import { Code } from '@/component/code/code';
import { A, P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function CodeDocs() {
  return (
    <DocPage
      title='Code'
      description="Syntax-highlighted code blocks with a copy button, powered by sugar-high. Comes in block and inline flavors - because sometimes you need a whole code fence, and sometimes you just need a lil' snippet."
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add cartuni/code' />
        <P>
          This component uses{' '}
          <A href='https://github.com/huozhi/sugar-high' rel='noreferrer' target='_blank'>
            sugar-high
          </A>{' '}
          for syntax highlighting - a tiny (1KB), zero-dependency highlighter. It gets installed automatically as a
          dependency.
        </P>
      </DocSection>

      <DocSection title='Block Usage'>
        <P>
          Drop in a <Code code='Code' inline /> component with a <Code code='code' inline /> prop and you get a
          full-width, syntax-highlighted code block with a copy button in the corner. For supported highlighting options
          refer to the sugar-high docs.
        </P>
        <ComponentPreview>
          <div style={{ width: '100%' }}>
            <Code
              code={`from pawky import Pawky

awk = Pawky()

def header(r):
  print(r, 'Total')
awk[1] = header

def lines(r):
  print(r, ...)
awk[2:] = lines

(awk > 'out.txt') < 'marks.txt'`}
            />
          </div>
        </ComponentPreview>
        <Code
          code={`import { Code } from '@/component/code/code';

<Code code={\`def end():
  print('Total', ...)
awk['END'] = end\`} />`}
        />
      </DocSection>

      <DocSection title='Inline Usage'>
        <P>
          Pass <Code code='inline' inline /> to render a compact, inline code snippet - perfect for mentioning a{' '}
          <Code code='functionName()' inline /> or <Code code='variableName' inline /> right in the middle of a
          sentence. No copy button, no <Code code='<pre>' inline /> wrapper, just a tidy little badge of code.
        </P>
        <ComponentPreview atStart>
          <P>
            Use the <Code code='useCachedStyles' inline /> hook to make things wobbly.{' '}
            <Code code='prettier-plugin-sort-props' inline /> keeps your JSX props tidy. These things are unrelated but
            both true.
          </P>
        </ComponentPreview>
        <Code code={`<Code code="useCachedStyles" inline />`} />
      </DocSection>

      <DocSection title='Without Copy Button'>
        <P>
          Don't want the copy button? Set <Code code='noCopy' inline /> to hide it. The code block will still look the
          same, just without the lil' clipboard icon. Great for single-liners you don't expect anyone to actually copy.
        </P>
        <Code code='<Code code="you really gonna copy this?" noCopy />' noCopy />
      </DocSection>

      <DocSection title='API Reference'>
        <PropsTable
          items={[
            { name: 'code', type: 'string', description: 'The code string to highlight and display.' },
            {
              name: 'inline',
              type: 'boolean',
              default: 'false',
              description: 'Renders as an inline <code> element instead of a block <pre>.',
            },
            { name: 'noCopy', type: 'boolean', default: 'false', description: 'Hides the copy-to-clipboard button.' },
            {
              name: 'options',
              type: 'HighlightOptions',
              description: "Options passed to sugar-high's highlight() function.",
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
