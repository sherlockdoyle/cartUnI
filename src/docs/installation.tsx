import { Code } from '@/component/code/code';
import { P } from '@/ui/typography/typography';
import { DocPage, DocSection } from '../doc-page';

export default function Installation() {
  return (
    <DocPage
      title='Installation'
      description="Let's get this party started! Here's how to install cartUnI and make your UI look like a cartoon masterpiece."
    >
      <DocSection title='1. Initialize shadcn'>
        <P>
          cartUnI rides on top of the shadcn/ui component system. First, fire up the shadcn CLI in your project to get
          the basic plumbing in place. Don't worry, we'll make it fun soon.
        </P>
        <Code code='npx shadcn@latest init' />
      </DocSection>

      <DocSection title='2. Slap in the CSS Variables'>
        <P>
          Add cartUnI's global stylesheet to your project. This brings in all the wobbly, cartoonish design tokens - the
          colors, the hand-drawn borders, and the bouncy animations. Import it at the top of your entry file:
        </P>
        <Code
          code={`// main.tsx or index.tsx
import '@/style/global.css';`}
        />
        <P>
          The global stylesheet sets up the entire theme system including light/dark mode via{' '}
          <Code code='color-scheme: light dark' inline />, the color palette, the Comic Sans font stack (yes, really),
          and all the fun animation keyframes.
        </P>
      </DocSection>

      <DocSection title='3. Add the Noise Filter' badge='Optional'>
        <P>
          cartUnI uses an SVG noise filter to give components that hand-drawn, slightly crinkly look. If you plan to use
          the <Code code='noise' inline /> prop on any component, render the <Code code='Filter' inline /> component
          once at the root of your app:
        </P>
        <Code
          code={`// main.tsx
import Filter from '@/ui/filter/filter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Filter />
    <App />
  </StrictMode>,
);`}
        />
        <P>
          If you don't need the <Code code='noise' inline /> prop anywhere, you can skip this step entirely - the{' '}
          <Code code='Filter' inline /> component has no effect on anything else.
        </P>
      </DocSection>

      <DocSection title='4. Configure the Registry'>
        <P>
          Point your <Code code='components.json' inline /> to the cartUnI registry so you can pull components with the
          shadcn CLI. Add the <Code code='registry' inline /> field:
        </P>
        <Code
          code={`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  },
  "registries": {
    "cartuni": {
      "url": "https://sherlockdoyle.github.io/cartUnI/registry"
    }
  }
}`}
        />
      </DocSection>

      <DocSection title='5. Yoink Some Components'>
        <P>
          Now grab the components you need! Use the standard shadcn CLI and they'll land right in your project, ready to
          wobble.
        </P>
        <Code code='npx shadcn@latest add cartuni/button cartuni/card cartuni/input' />
        <P>That's it! You're all set. Go forth and make things beautifully wonky.</P>
      </DocSection>
    </DocPage>
  );
}
