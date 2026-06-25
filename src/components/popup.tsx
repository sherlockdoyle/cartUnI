import { Code } from '@/component/code/code';
import { Button } from '@/ui/button/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/ui/card/card';
import { Dialog, Popover, Tooltip } from '@/ui/popup/popup';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function PopupDocs() {
  return (
    <DocPage
      title='Popup'
      description='Three flavors of overlay - Dialog (big and modal), Popover (anchored and floaty), and Tooltip (smol and informational). All built on native browser APIs!'
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add cartuni/popup' />
      </DocSection>

      <DocSection title='Dialog'>
        <P>
          A modal dialog built on the native <Code code='<dialog>' inline /> element with{' '}
          <Code code='showModal()' inline />. It uses the new <Code code='command' inline /> /{' '}
          <Code code='commandfor' inline /> attributes for triggering - no JavaScript state needed! Comes with a
          built-in close button and backdrop blur.
        </P>
        <P>
          <Code code='Dialog' inline /> is deliberately minimal - it only provides the popup skeleton (positioning,
          backdrop, close button). For the actual content UI, bring your own components. A <Code code='Card' inline />{' '}
          works perfectly, as you can see in the demo below.
        </P>
        <ComponentPreview>
          <Dialog trigger={<Button>Open Dialog</Button>}>
            <Card>
              <CardHeader>
                <CardTitle>Deploy to Production??</CardTitle>
              </CardHeader>
              <CardContent>
                You're about to ship your <em>masterpiece</em> to the world. All those 3am commits, the tabs you never
                closed, the console.log statements you definitely removed (you did, right?) - it all comes down to this.
                Are you ready, champ?
              </CardContent>
              <CardFooter>
                <Button variant='secondary'>Actually... maybe not</Button>
                <Button variant='error'>YOLO, ship it!</Button>
              </CardFooter>
            </Card>
          </Dialog>
        </ComponentPreview>
        <Code
          code={`import { Dialog } from '@/ui/popup/popup';

<Dialog trigger={<Button>Open Dialog</Button>}>
<Card>
  <CardHeader>
    <CardTitle>Are you absolutely sure?</CardTitle>
  </CardHeader>
  <CardContent>
    This action cannot be undone. Once you click that button, there's no going back. Well, actually you can
    just close this dialog. But dramatic, right?
  </CardContent>
  <CardFooter>
    <Button variant='secondary'>Nah, nevermind</Button>
    <Button variant='error'>Do the thing</Button>
  </CardFooter>
</Card>
</Dialog>`}
        />
        <PropsTable
          items={[
            { name: 'trigger', type: 'ReactNode', description: 'The element that opens the dialog when clicked.' },
            { name: 'children', type: 'ReactNode', description: 'Content rendered inside the dialog.' },
          ]}
        />
      </DocSection>

      <DocSection title='Popover'>
        <P>
          A floating panel anchored to a trigger element. Uses the native <Code code='popover' inline /> API with CSS
          anchor positioning. It auto-flips when there's not enough space. Fancy!
        </P>
        <P>
          Like <Code code='Dialog' inline />, <Code code='Popover' inline /> is just the skeleton - it handles the
          positioning and visibility, not the look. Wrap your content in a <Code code='Card' inline /> or whatever
          component fits your design to give it actual UI.
        </P>
        <ComponentPreview>
          <Popover trigger={<Button variant='secondary'>What's antonemo?</Button>}>
            <Card style={{ width: '16rem', maxWidth: '75vw' }}>
              <CardContent>
                It's a game of opposites! You make a word and get its antonym. Simple concept, surprisingly addictive.
                Like this popover - small, unexpected, kind of hard to dismiss.
              </CardContent>
            </Card>
          </Popover>
        </ComponentPreview>
        <Code
          code={`import { Popover } from '@/ui/popup/popup';

<Popover trigger={<Button>What's cStDf?</Button>}>
  <Card>
    <CardContent>
      A collection of my CTF ideas. You might need to stop.
    </CardContent>
  </Card>
</Popover>`}
        />
        <PropsTable
          items={[
            { name: 'trigger', type: 'ReactNode', description: 'Element that toggles the popover.' },
            {
              name: 'positionArea',
              type: 'PositionArea',
              default: "'top'",
              description: 'CSS anchor position area (e.g., "top", "bottom", "left", "right").',
            },
            { name: 'as', type: 'ElementType', default: "'div'", description: 'Polymorphic root element.' },
          ]}
        />
      </DocSection>

      <DocSection title='Tooltip'>
        <P>
          A tiny hint that appears on hover/focus. No JavaScript timers, no portals - just CSS positioning and opacity
          transitions. Keeps it simple, keeps it snappy.
        </P>
        <ComponentPreview>
          <Tooltip content='Hover detected. You are very curious. I like that.'>
            <Button variant='secondary'>Hover me, I dare you</Button>
          </Tooltip>
        </ComponentPreview>
        <Code
          code={`import { Tooltip } from '@/ui/popup/popup';

<Tooltip content="Pure CSS. No timers. No portals. Just vibes.">
  <Button>Hover me</Button>
</Tooltip>`}
        />
        <PropsTable
          items={[
            { name: 'content', type: 'ReactNode', description: 'Text or element displayed in the tooltip.' },
            { name: 'children', type: 'ReactNode', description: 'The element the tooltip is attached to.' },
            {
              name: 'as',
              type: 'ElementType',
              default: "'div'",
              description: 'Polymorphic tooltip container element.',
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
