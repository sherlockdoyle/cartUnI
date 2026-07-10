import { Code } from '@/component/code/code';
import { AccordionItem } from '@/ui/accordion/accordion';
import { Alert } from '@/ui/alert/alert';
import { Icon, info } from '@/ui/icon/icon';
import { Label, Switch } from '@/ui/input/input';
import { A, Li, P, Ul } from '@/ui/typography/typography';
import { useState } from 'react';
import { DocPage, DocSection } from '../doc-page';

export default function Installation() {
  const [isJs, setIsJs] = useState(false);
  const e = isJs ? 'j' : 't';

  return (
    <DocPage
      title='Installation'
      description="Let's get this party started! Here's how to install cartUnI and make your UI look like a cartoon masterpiece."
    >
      <P>
        cartUnI works with both TypeScript and JavaScript! Toggle the switch below to flip the instructions. The
        components, styles, and CLI commands are identical either way - the only things that change are a config flag
        and a couple of file extensions. Choose your weapon:
      </P>
      <Label inline>
        <Switch checked={isJs} onChange={e => setIsJs(e.target.checked)} />
        I'm using JavaScript
      </Label>
      {isJs && (
        <Alert title='JavaScript mode activated' icon={<Icon path={info} />} variant='primary'>
          You're a brave soul. The CLI will generate <Code code='.jsx' inline /> files and use a{' '}
          <Code code='jsconfig.json' inline /> for path aliases. Everything else is the same. I pinky promise.
        </Alert>
      )}

      <DocSection title='1. Configure Path Aliases'>
        <P>
          cartUnI rides on top of the shadcn/ui component system, but we don't use Tailwind - so we need to set up the{' '}
          <Code code='@' inline /> path alias manually.{' '}
          {isJs ? (
            <>
              Create a <Code code='jsconfig.json' inline /> in your project root
            </>
          ) : (
            <>
              Tell TypeScript where <Code code='@/' inline /> actually points
            </>
          )}
          :
        </P>
        <Code
          code={`// ${isJs ? 'j' : 'tsconfig.app.json or t'}sconfig.json
{
  "compilerOptions": {${
    isJs
      ? `
    "baseUrl": ".",`
      : ''
  }
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
        />
        <P>Then configure your Vite project so shadcn can resolve imports without having an existential crisis:</P>
        <Code
          code={`// vite.config.${e}s
export default defineConfig({
  resolve: {
    ${
      isJs
        ? `alias: {
      '@': path.resolve(__dirname, './src'),
    }`
        : 'tsconfigPaths: true'
    },
  },
})`}
        />
      </DocSection>

      <DocSection title='2. Create components.json'>
        <P>
          We bypass <Code code='shadcn init' inline /> entirely since cartUnI doesn't use Tailwind (we're too cool for
          that). Instead, create a <Code code='components.json' inline /> file in your project root with the following
          config. Yes, the empty Tailwind fields are there just to keep the CLI from throwing a tantrum:
        </P>
        <Code
          code={`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": ${!isJs},
  "tailwind": {
    "config": "",
    "css": "",
    "baseColor": "",
    "cssVariables": false
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  },
  "registries": {
    "@cartuni": "https://sherlockdoyle.github.io/cartUnI/registry/{name}.json"
  }
}`}
        />
        {isJs && (
          <P>
            The <Code code='"tsx": false' inline /> flag is the magic switch - the non-component kind. It tells the
            shadcn CLI to generate <Code code='.jsx' inline /> files instead of <Code code='.tsx' inline />. Forget to
            flip it and you'll get TypeScript files in a JavaScript project, which will probably still work, but will
            also silently judge you.
          </P>
        )}
      </DocSection>

      <DocSection title='3. Add the Base Styles'>
        <P>
          Add cartUnI's global stylesheet to your project. This brings in all the wobbly, cartoonish design tokens - the
          colors, the hand-drawn borders, and the bouncy animations.
        </P>
        <Code code='npx shadcn@latest add @cartuni/globalStyles' />
        <P>Import it at the top of your entry file:</P>
        <Code
          code={`// main.${e}sx or index.${e}sx
import '@/style/global.css';`}
        />
        <P>
          The global stylesheet sets up the entire theme system including light/dark mode via{' '}
          <Code code='color-scheme: light dark' inline />, the color palette, the Comic Sans font stack (yes, really),
          and all the fun animation keyframes.
        </P>
      </DocSection>

      <DocSection title='4. The Vite Minifier Shenanigans'>
        <P>
          Vite's production build has a habit of scrambling CSS declarations during chunking and minification. It's a
          known party-crasher that ruins our carefully stacked styles!
        </P>
        <P>
          To stop Vite from going rogue, you have to add the layer order right in the <Code code='<head>' inline /> of
          your <Code code='index.html' inline /> before anything else loads:
        </P>
        <Code
          code={`<!doctype html>
<html lang="en">
  <head>
    <title>cartuni</title>
    <style>  /* ADD THIS */
      @layer theme, animations, base, patterns, components, utilities;
    </style>
  </head>
</html>`}
        />
        <P>This hardcodes the hierarchy so the styles are applied in the correct order. Take that, chunking bugs!</P>
        <AccordionItem title="If you're into build-tool drama, you can read the extensive lore here">
          <Ul randomListStyle>
            <Li>
              <A href='https://github.com/vitejs/vite/issues/22705' rel='noreferrer' target='_blank'>
                vitejs/vite #22705: CSS `@layer` order declaration is dropped by minification
              </A>
            </Li>
            <Li>
              <A href='https://github.com/vitejs/vite/discussions/17337' rel='noreferrer' target='_blank'>
                vitejs/vite #17337: CSS layer order of precedence changes after vite build
              </A>
            </Li>
            <Li>
              <A href='https://github.com/vitejs/vite/issues/21903' rel='noreferrer' target='_blank'>
                vitejs/vite #21903: CSS cascade order differs between dev and production when using auto-imported
                component styles
              </A>
            </Li>
            <Li>
              <A href='https://github.com/vuetifyjs/vuetify/issues/22752' rel='noreferrer' target='_blank'>
                vuetifyjs/vuetify #22752: Vite 8 Build create wrong CSS Layering
              </A>
            </Li>
            <Li>
              <A href='https://github.com/vitejs/vite/issues/22301' rel='noreferrer' target='_blank'>
                vitejs/vite #22301: CSS bundle order is incorrect
              </A>
            </Li>
            <Li>
              <A href='https://github.com/vitejs/vite/issues/22597' rel='noreferrer' target='_blank'>
                vitejs/vite #22597: CSS cascade order differs between dev and production with lib build
              </A>
            </Li>
            <Li>
              <A href='https://github.com/vitejs/vite/issues/4890' rel='noreferrer' target='_blank'>
                vitejs/vite #4890: The order of <Code code='<style>' inline /> and{' '}
                <Code code='<link rel="stylesheet">' inline /> changes after build
              </A>
            </Li>
          </Ul>
        </AccordionItem>
      </DocSection>

      <DocSection title='5. Add the Noise Filter' badge='Optional'>
        <P>
          cartUnI uses an SVG noise filter to give components that hand-drawn, slightly crinkly look. If you plan to use
          the <Code code='noise' inline /> prop on any component, first add the filter to your project:
        </P>
        <Code code='npx shadcn@latest add @cartuni/filter' />
        <P>
          Then, render the <Code code='Filter' inline /> component once at the root of your app:
        </P>
        <Code
          code={`// main.${e}sx
import Filter from '@/ui/filter/filter';

createRoot(document.getElementById('root')${isJs ? '' : '!'}).render(
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

      <DocSection title='6. Yoink Some Components'>
        <P>
          Now grab the components you need! Use the standard shadcn CLI and they'll land right in your project, ready to
          wobble.
        </P>
        <Code code='npx shadcn@latest add @cartuni/button @cartuni/card @cartuni/input' />
        <P>That's it! You're all set. Go forth and make things beautifully wonky.</P>
      </DocSection>
    </DocPage>
  );
}
