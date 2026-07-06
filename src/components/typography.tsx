import { Code } from '@/component/code/code';
import { Alert } from '@/ui/alert/alert';
import { Icon, info } from '@/ui/icon/icon';
import { A, Blockquote, H1, H2, H3, H4, H5, H6, Hr, Li, Mark, Ol, P, Small, Ul } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function TypographyDocs() {
  return (
    <DocPage
      title='Typography'
      description='All your favorite HTML text elements - headings, paragraphs, links, lists, blockquotes, and more - styled with the cartoonish cartUnI flair. No more boring default browser typography!'
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add cartuni/typography' />
      </DocSection>

      <DocSection title='Headings'>
        <P>
          Six levels of headings, from the big booming <Code code='H1' inline /> down to the quiet little{' '}
          <Code code='H6' inline />. Each one has tight letter-spacing and chunky font weights - because subtlety is
          overrated.
        </P>
        <ComponentPreview>
          <H1>H1 - The Big Boss</H1>
          <H2>H2 - Second in Command</H2>
          <H3>H3 - Middle Management</H3>
          <H4>H4 - Team Lead</H4>
          <H5>H5 - Senior Intern</H5>
          <H6>H6 - The Whisper</H6>
        </ComponentPreview>
        <Code
          code={`import { H1, H2, H3, H4, H5, H6 } from '@/ui/typography/typography';

<H1>The Big Boss</H1>
<H2>Second in Command</H2>
<H3>Middle Management</H3>
<H4>Team Lead</H4>
<H5>Senior Intern</H5>
<H6>The Whisper</H6>`}
        />
      </DocSection>

      <DocSection title='Bordered Headings'>
        <P>
          Slap a <Code code='b' inline /> prop on any heading to give it a wobbly bottom border. Great for section
          titles that want a little extra oomph without being too dramatic about it.
        </P>
        <ComponentPreview>
          <H3 b>I've got a border and I'm proud of it!</H3>
          <H5 b>Me too, but I'm smaller about it.</H5>
        </ComponentPreview>
        <Code
          code={`<H3 b>I've got a border!</H3>
<H5 b>Me too, but smaller!</H5>`}
        />
      </DocSection>

      <DocSection title='Paragraph & Small'>
        <P>
          <Code code='P' inline /> gives you a paragraph with proper bottom margin that collapses on the last child.{' '}
          <Code code='Small' inline /> makes text a bit smaller - great for captions, fine print, or things you don't
          want people to read too carefully.
        </P>
        <ComponentPreview>
          <div>
            <P>
              This is a paragraph. It has proper spacing and everything. Your text will look organized and intentional,
              even if your code isn't.
            </P>
            <P>
              <Small>This is small text. Shhh, it's a secret.</Small>
            </P>
          </div>
        </ComponentPreview>
        <Code
          code={`import { P, Small } from '@/ui/typography/typography';

<P>This is a paragraph.</P>
<P><Small>This is small text.</Small></P>`}
        />
      </DocSection>

      <DocSection title='Links'>
        <P>
          The <Code code='A' inline /> component gives you an underlined link with a color that shifts on hover/focus.
        </P>
        <ComponentPreview>
          <P>
            Check out{' '}
            <A href='https://github.com/sherlockdoyle/cartUnI' target='_blank'>
              cartUnI on GitHub
            </A>{' '}
            (and maybe leave a star, if the sketchy borders spoke to you).
          </P>
        </ComponentPreview>
        <Code
          code={`import { A } from '@/ui/typography/typography';

<A href="https://github.com/sherlockdoyle/cartUnI" target="_blank">
  cartUnI on GitHub
</A>`}
        />
      </DocSection>

      <DocSection title='Blockquote'>
        <P>
          A chunky left-bordered quote block with italic text and a subtle background. Perfect for callouts, wise
          sayings, or pretending to be philosophical.
        </P>
        <ComponentPreview>
          <Blockquote>&ldquo;In a world of sharp corners, be a sketcy border.&rdquo; - cartUnI, probably</Blockquote>
        </ComponentPreview>
        <Code
          code={`import { Blockquote } from '@/ui/typography/typography';

<Blockquote>
  "Any sufficiently advanced cartoonish UI is indistinguishable from magic."
</Blockquote>`}
        />
      </DocSection>

      <DocSection title='Mark'>
        <P>
          Highlight text with <Code code='Mark' inline /> - it uses a semi-transparent warning color background - like a
          highlighter, but wonkier.
        </P>
        <ComponentPreview>
          <P>
            This sentence has <Mark>some very important words</Mark> in it.
          </P>
        </ComponentPreview>
        <Code
          code={`import { Mark } from '@/ui/typography/typography';

<P>"Call me <Mark>Mark</Mark>" - Mark.</P>`}
        />
      </DocSection>

      <DocSection title='Lists'>
        <P>
          Ordered (<Code code='Ol' inline />) and unordered (<Code code='Ul' inline />) lists with proper spacing. The{' '}
          <Code code='Ul' inline /> component supports a <Code code='randomListStyle' inline /> prop that replaces
          standard bullets with little wobbly blobs - each list item gets its own randomized border-radius on the
          bullet. Adorable.
        </P>
        <Alert
          title={
            <>
              A quick note on <Code code='Li' inline /> vs plain <Code code='li' inline />
            </>
          }
          icon={<Icon path={info} />}
          variant='primary'
        >
          <Code code='Li' inline /> wires up extra styles for the wobbly randomized bullet - specifically, it generates
          a unique border-radius and applies a CSS variable so the blob renders correctly. That overhead is{' '}
          <em>only</em> useful inside a <Code code='<Ul randomListStyle />' inline />. If you're just listing things the
          normal way (inside a plain <Code code='Ul' inline /> or <Code code='Ol' inline />
          ), a bare <Code code='<li />' inline /> works perfectly fine and skips the extra style calculation entirely.
          Use <Code code='Li' inline /> only when you need the blobs. Use <Code code='li' inline /> when you don't.
        </Alert>
        <ComponentPreview>
          <div style={{ display: 'flex', gap: '1rem 3rem', flexWrap: 'wrap' }}>
            <div>
              <strong>How to ship a project</strong>
              <Ol>
                <li>Have a great idea</li>
                <li>Code it in a weekend (ARRANGE did this in 2017)</li>
                <li>Get distracted by cartUnI</li>
                <li>...</li>
                <li>Ship anyway!</li>
              </Ol>
            </div>
            <div>
              <strong>Things cartUnI hates</strong>
              <Ul>
                <li>Sharp corners</li>
                <li>Boring palettes</li>
                <li>npm audit vulnerabilities</li>
              </Ul>
            </div>
            <div>
              <strong>cartUnI loves</strong>
              <Ul randomListStyle>
                <Li>Python-Codes algorithms</Li>
                <Li>Bouncy animations</Li>
                <Li>You, the developer</Li>
              </Ul>
            </div>
          </div>
        </ComponentPreview>
        <Code
          code={`import { Ol, Ul, Li } from '@/ui/typography/typography';

<Ol>
  <li>Have a great idea</li>
  <li>Get distracted by cartUnI</li>
  <li>Ship anyway!</li>
</Ol>

<Ul randomListStyle>
  <Li>Wobbly bullet!</Li>
</Ul>`}
        />
      </DocSection>

      <DocSection title='Horizontal Rule'>
        <P>
          The <Code code='Hr' inline /> component renders a slightly rotated, wobbly divider line. Because even
          separators deserve to have fun.
        </P>
        <ComponentPreview>
          <div style={{ width: '100%' }}>
            <P>Something above the line. Probably important.</P>
            <Hr />
            <P>Something below the line. Also probably important. Who can say.</P>
          </div>
        </ComponentPreview>
        <Code
          code={`import { Hr } from '@/ui/typography/typography';

<Hr />`}
        />
      </DocSection>

      <DocSection title='API Reference'>
        <P>All typography components forward their native HTML element props.</P>
        <PropsTable
          items={[
            { name: 'H1-H6', type: 'Component', description: 'Heading elements. Render <h1> through <h6>.' },
            {
              name: 'b',
              type: 'boolean',
              default: 'false',
              description: 'Adds a wobbly bottom border to any heading. Works on H1-H6.',
            },
            { name: 'P', type: 'Component', description: 'Paragraph. Renders <p> with bottom margin.' },
            { name: 'Small', type: 'Component', description: 'Small text. Renders <small>.' },
            {
              name: 'A',
              type: 'Component',
              description: 'Link with wobbly underline. Renders <a>.',
            },
            {
              name: 'Blockquote',
              type: 'Component',
              description: 'Styled quote block. Renders <blockquote>.',
            },
            {
              name: 'Mark',
              type: 'Component',
              description: 'Highlighted text. Renders <mark>.',
            },
            { name: 'Ol', type: 'Component', description: 'Ordered list. Renders <ol>.' },
            { name: 'Ul', type: 'Component', description: 'Unordered list. Renders <ul>.' },
            {
              name: 'randomListStyle',
              type: 'boolean',
              default: 'false',
              description: 'Replaces standard bullets with wobbly blobs (on Ul).',
            },
            {
              name: 'Li',
              type: 'Component',
              description: 'List item. Renders <li>.',
            },
            { name: 'Hr', type: 'Component', description: 'Horizontal rule. Renders <hr> with a slight rotation.' },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
