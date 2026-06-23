import { Code } from '@/component/code/code';
import { Button } from '@/ui/button/button';
import { Icon, monitorSmartphone, moon, sun } from '@/ui/icon/icon';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function ThemeToggleDocs() {
  return (
    <DocPage
      title='Theme Toggle'
      description='A one-click button that cycles through light, dark, and system themes. Three modes, one button, zero drama.'
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add cartuni/theme-toggle' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          Drop it in your header and forget about it. The <Code code='ThemeToggle' inline /> component is a pre-wired{' '}
          <Code code='Button' inline /> that cycles through <Code code='light &rarr; dark &rarr; system' inline /> on
          each click. It persists the user's preference to <Code code='localStorage' inline /> and sets{' '}
          <Code code='data-theme' inline /> on the document root.
        </P>
        <ComponentPreview>
          <Button title='System Theme' variant='secondary' size='icon'>
            <Icon path={monitorSmartphone} />
          </Button>
          <Button title='Light Theme' variant='secondary' size='icon'>
            <Icon path={sun} />
          </Button>
          <Button title='Dark Theme' variant='secondary' size='icon'>
            <Icon path={moon} />
          </Button>
        </ComponentPreview>
        <Code
          code={`import { ThemeToggle } from '@/component/themeToggle';

// Just plop it somewhere - usually in the header
// ☀️ Light -> 🌙 Dark -> 💻 System (i.e., surrender)
<AppShell
  header="cartUnI"
  action={<ThemeToggle />}
  sidebar={[...]}
>
  ...
</AppShell>`}
        />
      </DocSection>

      <DocSection title='How It Works'>
        <P>
          Under the hood, <Code code='ThemeToggle' inline /> uses the <Code code='useTheme' inline /> hook. This hook
          reads the initial theme from <Code code='localStorage' inline /> (falling back to{' '}
          <Code code='"system"' inline />
          ), and on each change it either sets <Code code='data-theme="light"' inline /> /{' '}
          <Code code='data-theme="dark"' inline /> on the <Code code='<html>' inline /> element, or removes the
          attribute entirely for system mode. The global CSS uses <Code code='color-scheme: light dark' inline /> to
          handle the rest.
        </P>
      </DocSection>

      <DocSection title='useTheme Hook'>
        <P>
          If you want to build your own toggle (or just read the current theme), the <Code code='useTheme' inline />{' '}
          hook is your friend. It returns a standard <Code code='[theme, setTheme]' inline /> tuple - just like{' '}
          <Code code='useState' inline />, but it also syncs with <Code code='localStorage' inline /> and the DOM.
        </P>
        <PropsTable
          items={[
            {
              name: 'defaultTheme',
              type: "'system' | 'light' | 'dark'",
              default: "'system'",
              description: 'Initial theme if nothing is stored in localStorage.',
            },
            {
              name: 'storageKey',
              type: 'string',
              default: "'app-theme'",
              description: 'The localStorage key used to persist the theme.',
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
