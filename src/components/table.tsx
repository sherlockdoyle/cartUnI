import { Code } from '@/component/code/code';
import { Table, TBody, Td, TFoot, Th, THead, Tr } from '@/ui/table/table';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function TableDocs() {
  return (
    <DocPage title='Table' description="Good ol' HTML tables, but make them wobbly and wonderful.">
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add @cartuni/table' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          The Table system is composed of several sub-components: <Code code='Table' inline />,{' '}
          <Code code='THead' inline />, <Code code='TBody' inline />, <Code code='TFoot' inline />,{' '}
          <Code code='Tr' inline />, <Code code='Th' inline />, and <Code code='Td' inline />. Assemble them just like
          regular HTML tables - but with 100% more personality.
        </P>
        <ComponentPreview>
          <Table>
            <THead>
              <Tr>
                <Th>Project</Th>
                <Th>Language</Th>
                <Th>Usefulness™</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td>Handwriter</Td>
                <Td>Python</Td>
                <Td>83 ⭐ and counting</Td>
              </Tr>
              <Tr>
                <Td>typenative</Td>
                <Td>C++ / Rust</Td>
                <Td>Compiled TS. Yes, really.</Td>
              </Tr>
              <Tr>
                <Td>mineder</Td>
                <Td>TypeScript</Td>
                <Td>Almost Tinder</Td>
              </Tr>
            </TBody>
          </Table>
        </ComponentPreview>
        <Code
          code={`import { Table, THead, TBody, Tr, Th, Td } from '@/ui/table/table';

<Table>
  <THead>
    <Tr>
      <Th>Project</Th>
      <Th>Language</Th>
      <Th>Usefulness</Th>
    </Tr>
  </THead>
  <TBody>
    <Tr>
      <Td>cStDf</Td>
      <Td>Vue</Td>
      <Td>Puzzle-shaped fun</Td>
    </Tr>
  </TBody>
</Table>`}
        />
      </DocSection>

      <DocSection title='With Footer'>
        <P>
          Need a footer row? <Code code='TFoot' inline /> pins it to the bottom with a subtle top border and slightly
          different background. Great for totals, summaries, or snarky footnotes.
        </P>
        <ComponentPreview>
          <Table>
            <THead>
              <Tr>
                <Th>Component</Th>
                <Th>Star Rating ⭐</Th>
                <Th>Wobbliness</Th>
              </Tr>
            </THead>
            <TBody>
              <Tr>
                <Td>Button</Td>
                <Td>⭐⭐⭐⭐⭐</Td>
                <Td>Maximum</Td>
              </Tr>
              <Tr>
                <Td>Table</Td>
                <Td>⭐⭐⭐⭐</Td>
                <Td>Moderate</Td>
              </Tr>
            </TBody>
            <TFoot>
              <Tr>
                <Td>Overall</Td>
                <Td>⭐⭐⭐⭐⭐</Td>
                <Td>Very yes</Td>
              </Tr>
            </TFoot>
          </Table>
        </ComponentPreview>
      </DocSection>

      <DocSection title='Fixed Layout'>
        <P>
          Pass <Code code='fixed' inline /> to use <Code code='table-layout: fixed' inline /> - all columns get equal
          width regardless of content. Handy when you want a perfectly balanced table (as all things should be).
        </P>
        <Code code='<Table fixed>...</Table>' />
      </DocSection>

      <DocSection title='API Reference'>
        <P>Each sub-component maps directly to its HTML counterpart and forwards all native props.</P>
        <PropsTable
          items={[
            {
              name: 'Table',
              type: 'Component',
              description: 'Wraps <table>. Gets the wobbly border-radius treatment.',
            },
            {
              name: 'fixed',
              type: 'boolean',
              default: 'false',
              description: 'Sets table-layout: fixed for equal-width columns.',
            },
            { name: 'THead', type: 'Component', description: 'Wraps <thead>. Gets a muted background.' },
            { name: 'TBody', type: 'Component', description: 'Wraps <tbody>. Rows highlight on hover.' },
            {
              name: 'TFoot',
              type: 'Component',
              description: 'Wraps <tfoot>. Gets a top border and subtle background.',
            },
            { name: 'Tr', type: 'Component', description: 'Wraps <tr>.' },
            { name: 'Th', type: 'Component', description: 'Wraps <th>. Bold text, border styling.' },
            { name: 'Td', type: 'Component', description: 'Wraps <td>.' },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
