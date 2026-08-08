import { Code } from '@/component/code/code';
import { Alert } from '@/ui/alert/alert';
import { check, Icon, triangleAlert } from '@/ui/icon/icon';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function AlertDocs() {
  return (
    <DocPage
      title='Alert'
      description='A little box that screams (or whispers) important info at your users. Comes in six flavors of urgency, from chill to OH NO.'
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add @cartuni/alert' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          Drop an <Code code='Alert' inline /> wherever you need to grab attention. It supports an optional{' '}
          <Code code='icon' inline />, <Code code='title' inline />, and body content. It defaults to the{' '}
          <Code code='secondary' inline /> variant because we're not trying to stress anyone out by default.
        </P>
        <ComponentPreview>
          <Alert title='Heads up, traveler!' icon={<Icon path={triangleAlert} />}>
            You are now entering the wobbly zone. Border-radii here are randomized. No two alerts look the same. Buckle
            up or something.
          </Alert>
        </ComponentPreview>
        <Code
          code={`import { Alert } from '@/ui/alert/alert';
import { Icon, triangleAlert } from '@/ui/icon/icon';

<Alert title="Heads up, traveler!" icon={<Icon path={triangleAlert} />}>
  You are now entering the wobbly zone.
</Alert>`}
        />
      </DocSection>

      <DocSection title='Variants'>
        <P>
          Alerts come in all the standard variant flavors. Each one shifts the background and text color to match the
          mood - from &ldquo;everything is fine&rdquo; to &ldquo;the server is on literal fire.&rdquo;
        </P>
        <ComponentPreview>
          <Alert title='Primary' icon={<Icon path={triangleAlert} />} variant='primary'>
            AGL just pushed an update. Something noteworthy occurred in the 3D graphics layer. We're monitoring the
            OpenGL pipeline.
          </Alert>
          <Alert title='Secondary' icon={<Icon path={triangleAlert} />} variant='secondary'>
            Just a casual FYI. No need to stand up. You can keep eating your snack.
          </Alert>
          <Alert title='Muted' variant='muted'>
            my-quotes synced all quotes from YourQuote. Quietly. In the background. You probably didn't notice.
          </Alert>
          <Alert title='Success' icon={<Icon path={check} />} variant='success'>
            prettier-plugin-sort-props published to npm! Your JSX props will never be unsorted again!
          </Alert>
          <Alert title='Warning' variant='warn'>
            Proceed with caution, friend. Someone's doing something sketchy nearby.
          </Alert>
          <Alert title='Error' variant='error'>
            Something went boom. Probably a missing semicolon. It's always a missing semicolon.
          </Alert>
        </ComponentPreview>
        <Code
          code={`<Alert variant="primary" title="Primary">Noteworthy!</Alert>
<Alert variant="muted" title="Muted">Barely an alert, tbh.</Alert>
<Alert variant="success" title="Success">IT WORKED!!</Alert>
<Alert variant="warn" title="Warning">Sketchy vibes ahead.</Alert>
<Alert variant="error" title="Error">Missing semicolon detected.</Alert>`}
        />
      </DocSection>

      <DocSection title='API Reference'>
        <PropsTable
          items={[
            { name: 'icon', type: 'ReactNode', description: 'Optional icon displayed on the left side.' },
            { name: 'title', type: 'ReactNode', description: 'Bold heading text for the alert.' },
            { name: 'children', type: 'ReactNode', description: 'Body content of the alert.' },
            { name: 'role', type: 'string', default: "'alert'", description: 'ARIA role for accessibility.' },
            { name: 'as', type: 'ElementType', default: "'div'", description: 'Polymorphic root element.' },
            {
              name: 'variant',
              type: 'Variant',
              default: "'secondary'",
              description: 'Controls the alert color scheme.',
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
