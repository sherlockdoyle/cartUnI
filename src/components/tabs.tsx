import { Code } from '@/component/code/code';
import { Badge } from '@/ui/badge/badge';
import { Tabs } from '@/ui/tabs/tabs';
import { Li, P, Ul } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function TabsDocs() {
  return (
    <DocPage
      title='Tabs'
      description="Organize content into switchable panels. Click a tab, see its content. Revolutionary stuff. Uses proper ARIA roles and keyboard navigation, because we're classy like that."
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add cartuni/tabs' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          The <Code code='Tabs' inline /> component takes an array of tab definitions - each with a{' '}
          <Code code='label' inline />, <Code code='value' inline />, and <Code code='children' inline />. Set{' '}
          <Code code='defaultValue' inline /> to control which tab starts active.
        </P>
        <ComponentPreview>
          <Tabs
            defaultValue='tic-tac-fish'
            tabs={[
              {
                label: 'Tic-Tac-Fish',
                value: 'tic-tac-fish',
                children: (
                  <>
                    <strong>Stockfish. For Tic Tac Toe.</strong>
                    <P>
                      Yes, someone built an engine that can solve the most complex game known to humanity (X's and O's)
                      and called it Tic-Tac-Fish. It's unbeatable, which is technically impressive and completely
                      pointless. 10/10, would overthink again.
                    </P>
                  </>
                ),
              },
              {
                label: 'Mineder',
                value: 'mineder',
                children: (
                  <>
                    <strong>Vibe coded Tinder clone (almost!)</strong>
                    <P>
                      What do you get when you vibe-code a dating app? Mineder! It has cards, it has swiping, it's
                      almost Tinder. The &ldquo;almost&rdquo; is doing a lot of heavy lifting in that description. But
                      hey, it vibed.
                    </P>
                  </>
                ),
              },
              {
                label: 'cStDf',
                value: 'cstdf',
                children: (
                  <>
                    <strong>CTF-type puzzles for the curious hacker</strong>
                    <P>
                      A collection of Capture The Flag puzzles. Built in Vue, because apparently solving one puzzle
                      wasn't enough - the whole framework had to be a challenge too. Good luck, you'll need it.
                    </P>
                  </>
                ),
              },
            ]}
          />
        </ComponentPreview>
        <Code
          code={`import { Tabs } from '@/ui/tabs/tabs';

<Tabs
  defaultValue="simple-ocr"
  tabs={[
    {
      label: 'SimpleOCR',
      value: 'simple-ocr',
      children: 'Best OCR ever! Actually, it's a lie. Why? Simply...'
    },
    {
      label: 'LameLM',
      value: 'lame-lm',
      children: 'I am a lame language model.'
    },
  ]}
/>`}
        />
      </DocSection>

      <DocSection title='Disabled Tabs'>
        <P>
          Individual tabs can be disabled by adding <Code code='disabled: true' inline /> to the tab definition. A
          disabled tab can't be clicked or focused - it's just there for moral support.
        </P>
        <ComponentPreview>
          <Tabs
            defaultValue='active'
            tabs={[
              { label: 'I Work!', value: 'active', children: 'Look at me go! Fully functional. Living the dream.' },
              {
                label: 'Under Construction',
                value: 'disabled',
                disabled: true,
                children: "If you're reading this, you've hacked the matrix.",
              },
              {
                label: 'Also Works!',
                value: 'also',
                children: "Two out of three tabs ain't bad. We're in a great state.",
              },
            ]}
          />
        </ComponentPreview>
        <Code
          code={`<Tabs
  defaultValue="active"
  tabs={[
    { label: 'I Work!', value: 'active', children: '...' },
    { label: 'Under Construction', value: 'wip', disabled: true, children: '...' },
  ]}
/>`}
        />
      </DocSection>

      <DocSection title='Keyboard Navigation'>
        <P>The tab list supports full keyboard navigation out of the box:</P>
        <Ul randomListStyle>
          <Li>
            <Badge>&larr;</Badge> <Badge>&rarr;</Badge> Navigate between tabs
          </Li>
          <Li>
            <Badge>Home</Badge> Jump to first tab (teleportation, but for tabs)
          </Li>
          <Li>
            <Badge>End</Badge> Jump to last tab (also teleportation, but in the other direction)
          </Li>
        </Ul>
      </DocSection>

      <DocSection title='API Reference'>
        <PropsTable
          items={[
            {
              name: 'tabs',
              type: '{ label: string; value: string; disabled?: boolean; children: ReactNode }[]',
              description:
                'Array of tab definitions. Each needs a label, value, and children. Set disabled to lock a tab out.',
            },
            { name: 'defaultValue', type: 'string', description: 'The value of the initially active tab.' },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
