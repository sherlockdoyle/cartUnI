import { Code } from '@/component/code/code';
import { Button } from '@/ui/button/button';
import * as icons from '@/ui/icon/icon';
import { Icon } from '@/ui/icon/icon';
import { A, P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';
import classes from '../docs.module.css';

const iconEntries = Object.entries(icons).filter(
  ([name, value]) => name !== 'default' && typeof value === 'string',
) as [string, string][];

export default function Icons() {
  return (
    <DocPage
      title='Icons'
      description='cartUnI uses a dead-simple SVG icon system - just a path string and an <svg> wrapper. No icon font, no sprite sheet, no drama.'
    >
      <DocSection title='How It Works'>
        <P>
          Every icon is just an exported string containing an SVG path's <Code code='d' inline /> attribute. The{' '}
          <Code code='Icon' inline /> component wraps it in an <Code code='<svg>' inline /> with a 24x24 viewBox. That's
          it. It's comically simple.
        </P>
        <P>
          The icon set was inspired by{' '}
          <A href='https://lucide.dev' rel='noopener noreferrer' target='_blank'>
            Lucide Icons
          </A>{' '}
          - same visual style, same 24x24 grid, same general vibe. The key difference: these were all hand-drawn by me
          and simplified to keep path data lean. So they look like Lucide icons, but they're not Lucide icons. Think of
          them as Lucide's slightly wobbly, hand-crafted cousins.
        </P>
        <Code
          code={`import { Icon, house } from '@/ui/icon/icon';

// Just pass the path string
<Icon path={house} />`}
        />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          The <Code code='Icon' inline /> component automatically sizes based on the parent's font size. It also accepts
          all standard SVG props, so you can resize, recolor, and restyle to your heart's content.
        </P>
        <Code
          code={`// Custom size
<Icon path={house} width={32} height={32} />

// Custom color via style
<Icon path={house} style={{ color: 'var(--c-primary)' }} />

// Inside a button
<Button size="icon">
  <Icon path={search} />
</Button>`}
        />
        <PropsTable
          items={[
            { name: 'path', type: 'string', description: "The SVG path's d attribute. Import from @/ui/icon/icon." },
            { name: '...props', type: 'SVGProps', description: 'All standard <svg> element props are forwarded.' },
          ]}
        />
      </DocSection>

      <DocSection title='Available Icons'>
        <P>
          Here are all the icons currently available. Each one is hand-drawn to match the cartoonish vibe. Click to copy
          the name!
        </P>
        <ComponentPreview>
          {iconEntries.map(([name, path]) => (
            <Button
              key={name}
              className={classes.iconButton}
              variant='secondary'
              onClick={() => navigator.clipboard.writeText(path)}
            >
              <Icon className={classes.icon} path={path} />
              {name}
            </Button>
          ))}
        </ComponentPreview>
      </DocSection>

      <DocSection title='Adding Your Own'>
        <P>
          Want more icons? Just export a new path string from <Code code='icon.tsx' inline />. The paths use lucide-icon
          style coordinates (24x24 viewBox). You can convert any SVG to a path string, or draw your own wonky ones by
          hand!
        </P>
        <Code
          code={`// In @/ui/icon/icon.tsx
export const myIcon = 'M10 5c1 5 0 9 0 15M15 5c0 3 0 7 0 15m-5-7c2 0 3 0 5 0M12 6C8 3 0 1 2 10c1 3 1 3 3 6 2 2 4 4 6 5 1 2 2 2 3 0 2-3 4-5 5-6s3-3 3-7c0-5-7-5-10-2';`}
        />
      </DocSection>
    </DocPage>
  );
}
