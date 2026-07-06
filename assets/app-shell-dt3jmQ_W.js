import{F as e,I as t,T as n,Z as r,at as i,i as a,n as o,p as s,r as c}from"./doc-page-CcURZA57.js";import{t as l}from"./alert-CdPdPIA5.js";var u=i();function d(){return(0,u.jsxs)(o,{title:`App Shell`,description:`The big boss layout component - header, collapsible sidebar, and main content area, all wired up and ready to go. It's basically an entire app skeleton in one component.`,children:[(0,u.jsxs)(l,{title:`This component is opinionated`,icon:(0,u.jsx)(t,{path:r}),variant:`warn`,children:[`The sidebar navigation is hardcoded to use`,` `,(0,u.jsx)(s,{href:`https://github.com/molefrog/wouter`,rel:`noopener noreferrer`,target:`_blank`,children:`wouter`}),` `,`for routing (specifically `,(0,u.jsx)(e,{code:`Link`,inline:!0}),` and `,(0,u.jsx)(e,{code:`useLocation`,inline:!0}),`). If your project uses a different router (React Router, TanStack Router, Next.js, etc.), the nav links won't work out of the box. The recommended approach: treat this component as a reference implementation and build your own app shell around it. Or, since you have access to the source in`,` `,(0,u.jsx)(e,{code:`@/component/appShell/appShell.tsx`,inline:!0}),`, just swap out the wouter-specific bits for your router of choice - it's pretty self-contained.`]}),(0,u.jsx)(c,{title:`Installation`,children:(0,u.jsx)(e,{code:`npx shadcn@latest add cartuni/app-shell`})}),(0,u.jsxs)(c,{title:`Usage`,children:[(0,u.jsxs)(n,{children:[`The `,(0,u.jsx)(e,{code:`AppShell`,inline:!0}),` gives you a full-page layout with a sticky header, a toggleable sidebar with navigation, and a scrollable main content area. You're literally looking at it right now - this entire docs site is built with it! Meta, right?`]}),(0,u.jsx)(e,{code:`import { AppShell } from '@/component/appShell/appShell';
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
</AppShell>`})]}),(0,u.jsxs)(c,{title:`Header`,children:[(0,u.jsxs)(n,{children:[`The header bar stretches across the top and includes a hamburger button to toggle the sidebar, a title, and an optional `,(0,u.jsx)(e,{code:`action`,inline:!0}),` slot on the right side. Perfect for sticking a theme toggle or user avatar up there.`]}),(0,u.jsx)(e,{code:`<AppShell
  header="My App"
  action={<ThemeToggle />}
  sidebar={[...]}
>
  ...
</AppShell>`})]}),(0,u.jsxs)(c,{title:`Sidebar Navigation`,children:[(0,u.jsxs)(n,{children:[`The `,(0,u.jsx)(e,{code:`sidebar`,inline:!0}),` prop accepts an array of navigation items. There are two types: headers (section dividers with a label) and items (clickable links with an icon, label, and href). The active link gets highlighted automatically based on the current route - no extra config needed!`]}),(0,u.jsx)(e,{code:`// Two types of nav items:

// 1. Section header (optional icon too!)
{ type: 'header', label: 'Getting Started' }
{ type: 'header', iconPath: shapes, label: 'Components' }

// 2. Clickable link
{ iconPath: house, label: 'Home', href: '/' }`}),(0,u.jsx)(n,{children:`When the sidebar is collapsed, only the icons show. When it's expanded, you get the full labels. On mobile, it slides in as an overlay with a blurred backdrop. Fancy!`})]}),(0,u.jsxs)(c,{title:`Sidebar Footer`,children:[(0,u.jsxs)(n,{children:[`Need some links pinned at the bottom of the sidebar? The `,(0,u.jsx)(e,{code:`sidebarFooter`,inline:!0}),` prop works the same way as `,(0,u.jsx)(e,{code:`sidebar`,inline:!0}),` - pass it an array of nav items and they'll stick to the bottom. Great for external links, settings, or passive-aggressive “Star this repo” buttons.`]}),(0,u.jsx)(e,{code:`<AppShell
  header="cartUnI"
  sidebar={[...]}
  sidebarFooter={[
    { iconPath: externalLink, label: 'Handwriter', href: 'https://github.com/sherlockdoyle/Handwriter' },
    { iconPath: externalLink, label: 'GitHub', href: 'https://github.com/sherlockdoyle/cartUnI', target: '_blank' }, // opens in new tab
  ]}
>
  ...
</AppShell>`})]}),(0,u.jsxs)(c,{title:`Custom Sidebar Width`,children:[(0,u.jsxs)(n,{children:[`Don't like the default sidebar width? Change it with the `,(0,u.jsx)(e,{code:`sidebarWidth`,inline:!0}),` prop. It accepts any valid CSS width value.`]}),(0,u.jsx)(e,{code:`<AppShell
  header="My App"
  sidebar={[...]}
  sidebarWidth="20rem"
>
  ...
</AppShell>`})]}),(0,u.jsxs)(c,{title:`Wide Main Content`,children:[(0,u.jsxs)(n,{children:[`By default, the main content area wraps its children in a max-width container (`,(0,u.jsx)(e,{code:`64rem`,inline:!0}),`) for comfortable reading. If you need edge-to-edge content - dashboards, data tables, maps - slap on`,` `,(0,u.jsx)(e,{code:`wideMain`,inline:!0}),` and the content stretches the full width.`]}),(0,u.jsx)(e,{code:`<AppShell
  header="My App"
  sidebar={[...]}
  wideMain
>
  <FullWidthDashboard />
</AppShell>`})]}),(0,u.jsxs)(c,{title:`Custom Sidebar Content`,children:[(0,u.jsxs)(n,{children:[`The `,(0,u.jsx)(e,{code:`sidebar`,inline:!0}),`, `,(0,u.jsx)(e,{code:`sidebarHeader`,inline:!0}),`, and`,` `,(0,u.jsx)(e,{code:`sidebarFooter`,inline:!0}),` props can also accept plain `,(0,u.jsx)(e,{code:`ReactNode`,inline:!0}),` content instead of a nav array. So if you want to throw in a search bar, a user profile card, or a dancing banana GIF - go right ahead. I don't judge.`]}),(0,u.jsx)(e,{code:`<AppShell
  header="cartUnI"
  sidebarHeader="Navigation"
  sidebar={<MyCustomSidebarContent />}
  sidebarFooter={<p>Made with code and questionable decisions</p>}
>
  ...
</AppShell>`})]}),(0,u.jsx)(c,{title:`API Reference`,children:(0,u.jsx)(a,{items:[{name:`header`,type:`string`,description:`Text displayed in the header bar.`},{name:`action`,type:`ReactNode`,description:`Optional content rendered on the right side of the header (e.g., theme toggle).`},{name:`sidebar`,type:`Nav[] | ReactNode`,description:`Main sidebar content. Pass a nav array for auto-generated links, or ReactNode for custom content.`},{name:`sidebarHeader`,type:`string`,description:`Optional header text above the sidebar navigation.`},{name:`sidebarFooter`,type:`Nav[] | ReactNode`,description:`Content pinned to the bottom of the sidebar.`},{name:`sidebarWidth`,type:`CSSProperties["width"]`,default:`'16rem'`,description:`Width of the sidebar when expanded.`},{name:`wideMain`,type:`boolean`,default:`false`,description:`When true, main content fills the full available width. When false, it is capped at 64rem and centred. Great for dashboards vs. document-style pages.`},{name:`children`,type:`ReactNode`,description:`Main content area.`},{name:`...props`,type:`HTMLDivElement`,description:`All native div props are forwarded to the root element.`}]})})]})}export{d as default};