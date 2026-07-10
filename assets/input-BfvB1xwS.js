import{F as e,M as t,i as n,n as r,ot as i,r as a,t as o}from"./doc-page-DrpX4VML.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./input-DFv2MYpd.js";var h=i();function g(){return(0,h.jsxs)(r,{title:`Input`,description:`A whole family of form controls - text inputs, textareas, selects, checkboxes, radios, switches, and sliders. Everything you need to collect data from your users (with style).`,children:[(0,h.jsx)(a,{title:`Installation`,children:(0,h.jsx)(e,{code:`npx shadcn@latest add cartuni/input`})}),(0,h.jsxs)(a,{title:`Text Input`,children:[(0,h.jsx)(t,{children:`The classic text input. It gets a focus border color shift and the usual wobbly radius treatment.`}),(0,h.jsxs)(o,{children:[(0,h.jsxs)(f,{children:[`Your best project name`,(0,h.jsx)(u,{type:`text`,placeholder:`e.g. Handwriter, antonemo, cStDf...`})]}),(0,h.jsxs)(f,{children:[`Not accepting suggestions right now`,(0,h.jsx)(u,{placeholder:`Nope, can't touch this`,disabled:!0})]})]}),(0,h.jsx)(e,{code:`import { Input, Label } from '@/ui/input/input';

<Label>
  Your best project name
  <Input type="text" placeholder="e.g. LameLM, my-quotes..." />
</Label>`})]}),(0,h.jsxs)(a,{title:`Textarea`,children:[(0,h.jsx)(t,{children:`For when a single line just won't cut it. Resizable vertically - grab that bottom edge and go wild.`}),(0,h.jsx)(o,{children:(0,h.jsxs)(f,{children:[`Explain your project in one sentence (I dare you)`,(0,h.jsx)(c,{placeholder:`It's basically just... look, it's complicated.`})]})}),(0,h.jsx)(e,{code:`import { Textarea } from '@/ui/input/input';

<Textarea placeholder="It's basically just... look, it's complicated." />`})]}),(0,h.jsxs)(a,{title:`Select`,children:[(0,h.jsxs)(t,{children:[`A styled dropdown select with a custom arrow indicator. Uses the native `,(0,h.jsx)(e,{code:`<select>`,inline:!0}),` `,`element under the hood for maximum accessibility.`]}),(0,h.jsx)(o,{children:(0,h.jsxs)(f,{children:[`Favorite project type`,(0,h.jsxs)(s,{defaultValue:``,children:[(0,h.jsx)(`option`,{value:``,disabled:!0,children:`Pick a genre...`}),(0,h.jsx)(`option`,{value:`game`,children:`Overengineered game AI`}),(0,h.jsx)(`option`,{value:`writing`,children:`Python writing tool`}),(0,h.jsx)(`option`,{value:`ctf`,children:`CTF puzzle collection`}),(0,h.jsx)(`option`,{value:`other`,children:`Something worse, probably`})]})]})}),(0,h.jsx)(e,{code:`import { Select } from '@/ui/input/input';

<Select>
  <option value="llm">Silly text completion</option>
  <option value="steno">Serious steganography</option>
  <option value="dating">Vibe-coded dating app</option>
</Select>`})]}),(0,h.jsxs)(a,{title:`Checkbox`,children:[(0,h.jsx)(t,{children:`A chunky checkbox that shows a big "X" when checked. No wishy-washy checkmarks here - just a bold, unapologetic X.`}),(0,h.jsx)(o,{children:(0,h.jsxs)(f,{inline:!0,children:[(0,h.jsx)(m,{}),`I have read the terms (I skimmed them and the font was too small)`]})}),(0,h.jsx)(e,{code:`import { Checkbox, Label } from '@/ui/input/input';

<Label inline>
  <Checkbox />
  I accept the terms (I didn't read them)
</Label>`})]}),(0,h.jsxs)(a,{title:`Radio`,children:[(0,h.jsxs)(t,{children:[`Radio buttons with a filled dot indicator. Group them with a shared `,(0,h.jsx)(e,{code:`name`,inline:!0}),` prop to make them mutually exclusive.`]}),(0,h.jsx)(o,{children:(0,h.jsxs)(`fieldset`,{style:{border:`none`,width:`100%`},children:[(0,h.jsxs)(f,{inline:!0,children:[(0,h.jsx)(l,{name:`debug`,defaultChecked:!0}),`console.log everything`]}),(0,h.jsxs)(f,{inline:!0,children:[(0,h.jsx)(l,{name:`debug`}),`Actually use a debugger`]}),(0,h.jsxs)(f,{inline:!0,children:[(0,h.jsx)(l,{name:`debug`}),`Use multi-field-sort to sort my bugs by importance`]}),(0,h.jsxs)(f,{inline:!0,children:[(0,h.jsx)(l,{name:`debug`}),`Pray and refresh`]})]})}),(0,h.jsx)(e,{code:`import { Radio, Label } from '@/ui/input/input';

<Label inline>
  <Radio name="debug" />
  console.log everything
</Label>
<Label inline>
  <Radio name="debug" />
  Actually use a debugger
</Label>
`})]}),(0,h.jsxs)(a,{title:`Switch`,children:[(0,h.jsxs)(t,{children:[`A toggle switch with a sliding thumb. It's a checkbox under the hood with `,(0,h.jsx)(e,{code:`role="switch"`,inline:!0}),`, so screen readers know what's up.`]}),(0,h.jsx)(o,{children:(0,h.jsxs)(f,{inline:!0,children:[(0,h.jsx)(p,{}),`Deadiction mode (for when you're not done but kind of are)`]})}),(0,h.jsx)(e,{code:`import { Switch, Label } from '@/ui/input/input';

<Label inline>
  <Switch />
  Vibe-coding mode
</Label>`})]}),(0,h.jsxs)(a,{title:`Slider`,children:[(0,h.jsx)(t,{children:`A range slider with a chunky, shadow-casting thumb. Drag it around - it's oddly satisfying.`}),(0,h.jsx)(o,{children:(0,h.jsxs)(f,{children:[`How often do you actually finish a side project? (0 = never, 100 = mineder)`,(0,h.jsx)(d,{defaultValue:42})]})}),(0,h.jsx)(e,{code:`import { Slider } from '@/ui/input/input';

// 0 = "I'll finish it tomorrow", 100 = actually shipped
<Slider defaultValue={50} />`})]}),(0,h.jsxs)(a,{title:`Disabled`,children:[(0,h.jsxs)(t,{children:[`Every input component supports the native `,(0,h.jsx)(e,{code:`disabled`,inline:!0}),` attribute. Disabled inputs are translucent - a universal "nope, not right now" across the entire family.`]}),(0,h.jsxs)(o,{children:[(0,h.jsxs)(f,{children:[`Feature locked (upgrade to Pro™ to unlock)`,(0,h.jsx)(u,{placeholder:`$$$`,disabled:!0})]}),(0,h.jsxs)(f,{children:[`Choices are an illusion`,(0,h.jsx)(s,{disabled:!0,children:(0,h.jsx)(`option`,{children:`There is only one option`})})]}),(0,h.jsxs)(f,{inline:!0,children:[(0,h.jsx)(m,{disabled:!0}),`Checkbox is on vacation`]}),(0,h.jsxs)(f,{inline:!0,children:[(0,h.jsx)(p,{disabled:!0}),`Switch is napping`]}),(0,h.jsxs)(f,{children:[`Frozen in time (like my side projects)`,(0,h.jsx)(d,{defaultValue:50,disabled:!0})]})]}),(0,h.jsx)(e,{code:`<Input placeholder="$$$" disabled />
<Select disabled>...</Select>
<Checkbox disabled />
<Switch disabled />
<Slider defaultValue={50} disabled />`})]}),(0,h.jsxs)(a,{title:`API Reference`,children:[(0,h.jsx)(t,{children:`All input components forward native HTML attributes to their underlying elements.`}),(0,h.jsx)(n,{items:[{name:`Input`,type:`Component`,description:`Text input. Renders <input>. Height: 3rem.`},{name:`Textarea`,type:`Component`,description:`Multi-line text input. Renders <textarea>. Min-height: 100px.`},{name:`Select`,type:`Component`,description:`Dropdown select. Renders <select> inside a styled wrapper.`},{name:`Checkbox`,type:`Component`,description:`Checkbox input. Renders <input type="checkbox">.`},{name:`Radio`,type:`Component`,description:`Radio button. Renders <input type="radio">.`},{name:`Switch`,type:`Component`,description:`Toggle switch. Renders <input type="checkbox" role="switch">.`},{name:`Slider`,type:`Component`,description:`Range slider. Renders <input type="range">.`},{name:`disabled`,type:`boolean`,description:`Native disabled attribute. Works on all input components. Half-opacity, cursor blocked.`},{name:`Label`,type:`Component`,description:`Form label. Renders <label>.`},{name:`inline`,type:`boolean`,default:`false`,description:`Makes the label lay out horizontally with its content (on Label). Perfect for checkboxes, radios, and switches.`}]})]})]})}export{g as default};