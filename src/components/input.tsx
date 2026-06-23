import { Code } from '@/component/code/code';
import { Checkbox, Input, Label, Radio, Select, Slider, Switch, Textarea } from '@/ui/input/input';
import { P } from '@/ui/typography/typography';
import { ComponentPreview, DocPage, DocSection, PropsTable } from '../doc-page';

export default function InputDocs() {
  return (
    <DocPage
      title='Input'
      description='A whole family of form controls - text inputs, textareas, selects, checkboxes, radios, switches, and sliders. Everything you need to collect data from your users (with style).'
    >
      <DocSection title='Installation'>
        <Code code='npx shadcn@latest add cartuni/input' />
      </DocSection>

      <DocSection title='Text Input'>
        <P>The classic text input. It gets a focus border color shift and the usual wobbly radius treatment.</P>
        <ComponentPreview>
          <Label>
            Your best project name
            <Input type='text' placeholder='e.g. Handwriter, antonemo, cStDf...' />
          </Label>
          <Label>
            Not accepting suggestions right now
            <Input placeholder="Nope, can't touch this" disabled />
          </Label>
        </ComponentPreview>
        <Code
          code={`import { Input, Label } from '@/ui/input/input';

<Label>
  Your best project name
  <Input type="text" placeholder="e.g. LameLM, my-quotes..." />
</Label>`}
        />
      </DocSection>

      <DocSection title='Textarea'>
        <P>For when a single line just won't cut it. Resizable vertically - grab that bottom edge and go wild.</P>
        <ComponentPreview>
          <Label>
            Explain your project in one sentence (we dare you)
            <Textarea placeholder="It's basically just... look, it's complicated." />
          </Label>
        </ComponentPreview>
        <Code
          code={`import { Textarea } from '@/ui/input/input';

<Textarea placeholder="It's basically just... look, it's complicated." />`}
        />
      </DocSection>

      <DocSection title='Select'>
        <P>
          A styled dropdown select with a custom arrow indicator. Uses the native <Code code='<select>' inline />{' '}
          element under the hood for maximum accessibility.
        </P>
        <ComponentPreview>
          <Label>
            Favorite project type
            <Select defaultValue=''>
              <option value='' disabled>
                Pick a genre...
              </option>
              <option value='game'>Overengineered game AI</option>
              <option value='writing'>Python writing tool</option>
              <option value='ctf'>CTF puzzle collection</option>
              <option value='other'>Something worse, probably</option>
            </Select>
          </Label>
        </ComponentPreview>
        <Code
          code={`import { Select } from '@/ui/input/input';

<Select>
  <option value="llm">Silly text completion</option>
  <option value="steno">Serious steganography</option>
  <option value="dating">Vibe-coded dating app</option>
</Select>`}
        />
      </DocSection>

      <DocSection title='Checkbox'>
        <P>
          A chunky checkbox that shows a big "X" when checked. No wishy-washy checkmarks here - just a bold,
          unapologetic X.
        </P>
        <ComponentPreview>
          <Label inline>
            <Checkbox />I have read the terms (I skimmed them and the font was too small)
          </Label>
        </ComponentPreview>
        <Code
          code={`import { Checkbox, Label } from '@/ui/input/input';

<Label>
  <Checkbox /> I accept the terms (I didn't read them)
</Label>`}
        />
      </DocSection>

      <DocSection title='Radio'>
        <P>
          Radio buttons with a filled dot indicator. Group them with a shared <Code code='name' inline /> prop to make
          them mutually exclusive.
        </P>
        <ComponentPreview>
          <fieldset style={{ border: 'none', width: '100%' }}>
            <Label inline>
              <Radio name='debug' defaultChecked />
              console.log everything
            </Label>
            <Label inline>
              <Radio name='debug' />
              Actually use a debugger
            </Label>
            <Label inline>
              <Radio name='debug' />
              Use multi-field-sort to sort my bugs by importance
            </Label>
            <Label inline>
              <Radio name='debug' />
              Pray and refresh
            </Label>
          </fieldset>
        </ComponentPreview>
        <Code
          code={`import { Radio, Label } from '@/ui/input/input';

<Label>
  <Radio name="debug" /> console.log everything
</Label>
<Label>
  <Radio name="debug" /> Actually use a debugger
</Label>
`}
        />
      </DocSection>

      <DocSection title='Switch'>
        <P>
          A toggle switch with a sliding thumb. It's a checkbox under the hood with <Code code='role="switch"' inline />
          , so screen readers know what's up.
        </P>
        <ComponentPreview>
          <Label inline>
            <Switch />
            Deadiction mode (for when you're not done but kind of are)
          </Label>
        </ComponentPreview>
        <Code
          code={`import { Switch, Label } from '@/ui/input/input';

<Label>
  <Switch />
  Vibe-coding mode
</Label>`}
        />
      </DocSection>

      <DocSection title='Slider'>
        <P>A range slider with a chunky, shadow-casting thumb. Drag it around - it's oddly satisfying.</P>
        <ComponentPreview>
          <Label>
            How often do you actually finish a side project? (0 = never, 100 = mineder)
            <Slider defaultValue={42} />
          </Label>
        </ComponentPreview>
        <Code
          code={`import { Slider } from '@/ui/input/input';

// 0 = "I'll finish it tomorrow", 100 = actually shipped
<Slider defaultValue={50} />`}
        />
      </DocSection>

      <DocSection title='Disabled'>
        <P>
          Every input component supports the native <Code code='disabled' inline /> attribute. Disabled inputs are
          translucent - a universal "nope, not right now" across the entire family.
        </P>
        <ComponentPreview>
          <Label>
            Feature locked (upgrade to Pro™ to unlock)
            <Input placeholder='$$$' disabled />
          </Label>
          <Label>
            Choices are an illusion
            <Select disabled>
              <option>There is only one option</option>
            </Select>
          </Label>
          <Label inline>
            <Checkbox disabled />
            Checkbox is on vacation
          </Label>
          <Label inline>
            <Switch disabled />
            Switch is napping
          </Label>
          <Label>
            Frozen in time (like my side projects)
            <Slider defaultValue={50} disabled />
          </Label>
        </ComponentPreview>
        <Code
          code={`<Input placeholder="$$$" disabled />
<Select disabled>...</Select>
<Checkbox disabled />
<Switch disabled />
<Slider defaultValue={50} disabled />`}
        />
      </DocSection>

      <DocSection title='API Reference'>
        <P>All input components forward native HTML attributes to their underlying elements.</P>
        <PropsTable
          items={[
            { name: 'Input', type: 'Component', description: 'Text input. Renders <input>. Height: 3rem.' },
            {
              name: 'Textarea',
              type: 'Component',
              description: 'Multi-line text input. Renders <textarea>. Min-height: 100px.',
            },
            {
              name: 'Select',
              type: 'Component',
              description: 'Dropdown select. Renders <select> inside a styled wrapper.',
            },
            { name: 'Checkbox', type: 'Component', description: 'Checkbox input. Renders <input type="checkbox">.' },
            { name: 'Radio', type: 'Component', description: 'Radio button. Renders <input type="radio">.' },
            {
              name: 'Switch',
              type: 'Component',
              description: 'Toggle switch. Renders <input type="checkbox" role="switch">.',
            },
            { name: 'Slider', type: 'Component', description: 'Range slider. Renders <input type="range">.' },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'Native disabled attribute. Works on all input components. Half-opacity, cursor blocked.',
            },
            { name: 'Label', type: 'Component', description: 'Form label. Renders <label>.' },
            {
              name: 'inline',
              type: 'boolean',
              default: 'false',
              description:
                'Makes the label lay out horizontally with its content (on Label). Perfect for checkboxes, radios, and switches.',
            },
          ]}
        />
      </DocSection>
    </DocPage>
  );
}
