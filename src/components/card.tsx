import { Code } from '@/component/code/code';
import { Button } from '@/ui/button/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card/card';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function CardDocs() {
  return (
    <DocPage
      title='Card'
      description='A chunky, bordered container for grouping related content. Think of it as a friendly box that gives your content a hug.'
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add @cartuni/card' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          Cards are composed of sub-components: <Code code='CardHeader' inline />, <Code code='CardTitle' inline />,{' '}
          <Code code='CardDescription' inline />, <Code code='CardContent' inline />, and{' '}
          <Code code='CardFooter' inline />. Mix and match as you please - there are no rules here (okay, maybe a few).
        </P>
        <ComponentPreview>
          <Card>
            <CardHeader>
              <CardTitle>Adopt a Component</CardTitle>
              <CardDescription>Give a lonely UI widget a loving home.</CardDescription>
            </CardHeader>
            <CardContent>
              These little components have been sitting in a GitHub repo for months. They just need someone to import
              them, give some nice content, and use them occasionally. Can you provide that?
            </CardContent>
            <CardFooter>
              <Button variant='secondary'>Maybe later</Button>
              <Button>Adopt Now!</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
        <Code
          code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/ui/card/card';

<Card>
  <CardHeader>
    <CardTitle>Adopt a Component</CardTitle>
    <CardDescription>Give a lonely UI widget a loving home.</CardDescription>
  </CardHeader>
  <CardContent>
    This little button just needs someone to click it occasionally.
  </CardContent>
  <CardFooter>
    <Button variant="secondary">Maybe later</Button>
    <Button>Adopt Now!</Button>
  </CardFooter>
</Card>`}
        />
      </DocSection>

      <DocSection title='With Patterns'>
        <P>Cards really shine with background patterns. Great for feature sections, callouts, or just showing off.</P>
        <ComponentPreview>
          <Card pattern='hachure'>
            <CardHeader>
              <CardTitle>Hachure</CardTitle>
            </CardHeader>
            <CardContent>Looks like someone sketched this on a napkin at 2am. Relatable.</CardContent>
          </Card>
          <Card pattern='dots'>
            <CardHeader>
              <CardTitle>Dots</CardTitle>
            </CardHeader>
            <CardContent>Polka dot energy. Very retro. Very chic. Very dots.</CardContent>
          </Card>
        </ComponentPreview>
      </DocSection>

      <DocSection title='API Reference'>
        <P>
          The <Code code='Card' inline /> component is the main container. The sub-components are layout helpers for
          consistent spacing.
        </P>
        <PropsTable
          items={[
            {
              name: 'as',
              type: 'ElementType',
              default: "'article'",
              description: 'Polymorphic root element for Card.',
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
