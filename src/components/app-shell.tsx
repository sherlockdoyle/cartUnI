import { Code } from '@/component/code/code';
import { Alert } from '@/ui/alert/alert';
import { Icon, triangleAlert } from '@/ui/icon/icon';
import { A, P } from '@/ui/typography/typography';
import { DocPage, DocSection, PropsTable } from '../doc-page';

export default function AppShellDocs() {
  return (
    <DocPage
      title='App Shell'
      description="The big boss layout component - header, collapsible sidebar, and main content area, all wired up and ready to go. It's basically an entire app skeleton in one component."
    >
      <Alert title='This component is opinionated' icon={<Icon path={triangleAlert} />} variant='warn'>
        The sidebar navigation is hardcoded to use{' '}
        <A href='https://github.com/molefrog/wouter' rel='noopener noreferrer' target='_blank'>
          wouter
        </A>{' '}
        for routing (specifically <Code code='Link' inline /> and <Code code='useLocation' inline />
        ). If your project uses a different router (React Router, TanStack Router, Next.js, etc.), the nav links won't
        work out of the box. The recommended approach: treat this component as a reference implementation and build your
        own app shell around it. Or, since you have access to the source in{' '}
        <Code code='@/component/appShell/appShell.tsx' inline />, just swap out the wouter-specific bits for your router
        of choice - it's pretty self-contained.
      </Alert>
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add cartuni/app-shell' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          The <Code code='AppShell' inline /> gives you a full-page layout with a sticky header, a toggleable sidebar
          with navigation, and a scrollable main content area. You're literally looking at it right now - this entire
          docs site is built with it! Meta, right?
        </P>
        <Code
          code={`import { AppShell } from '@/component/appShell/appShell';
import { house, shapes } from '@/ui/icon/icon';

<AppShell
  header="cartUnI"
  sidebar={[
    { iconPath: house, label: 'Home', href: '/' },
    { type: 'header', label: 'Components' },
    { iconPath: shapes, label: 'Button', href: '/components/button' },
  ]}
>
  <p>Your main content goes here. Make it weird!</p>
</AppShell>`}
        />
      </DocSection>

      <DocSection title='Header'>
        <P>
          The header bar stretches across the top and includes a hamburger button to toggle the sidebar, a title, and an
          optional <Code code='action' inline /> slot on the right side. Perfect for sticking a theme toggle or user
          avatar up there.
        </P>
        <Code
          code={`<AppShell
  header="My App"
  action={<ThemeToggle />}
  sidebar={[...]}
>
  ...
</AppShell>`}
        />
      </DocSection>

      <DocSection title='Sidebar Navigation'>
        <P>
          The <Code code='sidebar' inline /> prop accepts an array of navigation items. There are two types: headers
          (section dividers with a label) and items (clickable links with an icon, label, and href). The active link
          gets highlighted automatically based on the current route - no extra config needed!
        </P>
        <Code
          code={`// Two types of nav items:

// 1. Section header (optional icon too!)
{ type: 'header', label: 'Getting Started' }
{ type: 'header', iconPath: shapes, label: 'Components' }

// 2. Clickable link
{ iconPath: house, label: 'Home', href: '/' }`}
        />
        <P>
          When the sidebar is collapsed, only the icons show. When it's expanded, you get the full labels. On mobile, it
          slides in as an overlay with a blurred backdrop. Fancy!
        </P>
      </DocSection>

      <DocSection title='Sidebar Footer'>
        <P>
          Need some links pinned at the bottom of the sidebar? The <Code code='sidebarFooter' inline /> prop works the
          same way as <Code code='sidebar' inline /> - pass it an array of nav items and they'll stick to the bottom.
          Great for external links, settings, or passive-aggressive &ldquo;Star this repo&rdquo; buttons.
        </P>
        <Code
          code={`<AppShell
  header="cartUnI"
  sidebar={[...]}
  sidebarFooter={[
    { iconPath: externalLink, label: 'Handwriter', href: 'https://github.com/sherlockdoyle/Handwriter' },
    { iconPath: externalLink, label: 'GitHub', href: 'https://github.com/sherlockdoyle/cartUnI', target: '_blank' }, // opens in new tab
  ]}
>
  ...
</AppShell>`}
        />
      </DocSection>

      <DocSection title='Custom Sidebar Width'>
        <P>
          Don't like the default sidebar width? Change it with the <Code code='sidebarWidth' inline /> prop. It accepts
          any valid CSS width value.
        </P>
        <Code
          code={`<AppShell
  header="My App"
  sidebar={[...]}
  sidebarWidth="20rem"
>
  ...
</AppShell>`}
        />
      </DocSection>

      <DocSection title='Wide Main Content'>
        <P>
          By default, the main content area wraps its children in a max-width container (<Code code='64rem' inline />)
          for comfortable reading. If you need edge-to-edge content - dashboards, data tables, maps - slap on{' '}
          <Code code='wideMain' inline /> and the content stretches the full width.
        </P>
        <Code
          code={`<AppShell
  header="My App"
  sidebar={[...]}
  wideMain
>
  <FullWidthDashboard />
</AppShell>`}
        />
      </DocSection>

      <DocSection title='Custom Sidebar Content'>
        <P>
          The <Code code='sidebar' inline />, <Code code='sidebarHeader' inline />, and{' '}
          <Code code='sidebarFooter' inline /> props can also accept plain <Code code='ReactNode' inline /> content
          instead of a nav array. So if you want to throw in a search bar, a user profile card, or a dancing banana GIF
          - go right ahead. We don't judge.
        </P>
        <Code
          code={`<AppShell
  header="cartUnI"
  sidebarHeader="Navigation"
  sidebar={<MyCustomSidebarContent />}
  sidebarFooter={<p>Made with code and questionable decisions</p>}
>
  ...
</AppShell>`}
        />
      </DocSection>

      <DocSection title='API Reference'>
        <PropsTable
          items={[
            { name: 'header', type: 'string', description: 'Text displayed in the header bar.' },
            {
              name: 'action',
              type: 'ReactNode',
              description: 'Optional content rendered on the right side of the header (e.g., theme toggle).',
            },
            {
              name: 'sidebar',
              type: 'Nav[] | ReactNode',
              description:
                'Main sidebar content. Pass a nav array for auto-generated links, or ReactNode for custom content.',
            },
            {
              name: 'sidebarHeader',
              type: 'string',
              description: 'Optional header text above the sidebar navigation.',
            },
            {
              name: 'sidebarFooter',
              type: 'Nav[] | ReactNode',
              description: 'Content pinned to the bottom of the sidebar.',
            },
            {
              name: 'sidebarWidth',
              type: 'CSSProperties["width"]',
              default: "'16rem'",
              description: 'Width of the sidebar when expanded.',
            },
            {
              name: 'wideMain',
              type: 'boolean',
              default: 'false',
              description:
                'When true, main content fills the full available width. When false, it is capped at 64rem and centred. Great for dashboards vs. document-style pages.',
            },
            { name: 'children', type: 'ReactNode', description: 'Main content area.' },
            {
              name: '...props',
              type: 'HTMLDivElement',
              description: 'All native div props are forwarded to the root element.',
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
