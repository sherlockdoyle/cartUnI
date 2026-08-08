import { Code } from '@/component/code/code';
import { Progress } from '@/ui/progress/progress';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function ProgressDocs() {
  return (
    <DocPage
      title='Progress'
      description="A progress bar that shows how far along a task is. Uses the native <progress> element, so it's accessible and semantic right out of the box."
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add @cartuni/progress' />
      </DocSection>

      <DocSection title='Usage'>
        <P>
          Pass a <Code code='value' inline /> and <Code code='max' inline /> to show determinate progress. The fill bar
          uses the success color and gets a wobbly border-radius because everything in cartUnI is wobbly.
        </P>
        <ComponentPreview>
          <Progress value={0.3} />
          <Progress value={100} max={100} />
        </ComponentPreview>
        <Code
          code={`import { Progress } from '@/ui/progress/progress';

// 30% of the way through writing docs
<Progress value={0.3} />

// Finally done (it never feels like this)
<Progress value={100} max={100} />`}
        />
      </DocSection>

      <DocSection title='Indeterminate'>
        <P>
          Omit the <Code code='value' inline /> prop to get an indeterminate progress bar - perfect for when you have no
          idea how long something will take (npm install, AI inference, building IKEA furniture...). It shows a striped
          candy-cane pattern that screams &ldquo;I'm working on it, I promise!&rdquo;
        </P>
        <ComponentPreview>
          <Progress />
        </ComponentPreview>
        <Code
          code={`// "It's almost done" (it's not almost done)
<Progress />`}
        />
      </DocSection>

      <DocSection title='API Reference'>
        <PropsTable
          items={[
            { name: 'value', type: 'number', description: 'Current progress value. Omit for indeterminate state.' },
            { name: 'max', type: 'number', description: 'Maximum progress value.' },
            {
              name: '...props',
              type: 'ProgressHTMLAttributes',
              description: 'All native <progress> props are forwarded.',
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
