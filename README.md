# <img src="public/favicon.svg" alt="cartUnI Icon" width="32" height="32" valign="bottom"> cartUnI

**Cartoonish UI components for serious React apps**

*AI generated content follows. [Read the docs](https://sherlockdoyle.github.io/cartUnI/) for a more handcrafted version.*

cartUnI is a zero-dependency component library designed to inject a playful, sketched-on-paper vibe into your React projects. It seamlessly integrates with the `shadcn/ui` ecosystem but swaps the corporate minimalism for deliberate imperfection.

## Why?

Honestly, I built this because I needed a sketchy, hand-drawn UI for a future personal project of mine. But once it started coming together, it felt too fun to keep to myself. So, here it is-published for anyone who wants to add some deliberate imperfection to their own apps!

## The Secret Sauce

cartUnI isn't just about static styles; it's an entire design system built around dynamic personality. For a deep dive into these concepts, check out the [Common Styles](https://sherlockdoyle.github.io/cartUnI/#/docs/common-styles) and [Icons](https://sherlockdoyle.github.io/cartUnI/#/docs/icons) documentation.

* **Organic Shapes**: Using a custom React hook, every single component instance generates its own slightly skewed border radius and rotation. Your UI will look naturally uneven-no two buttons are perfectly alike.
* **Rich Textures**: Every element supports pure CSS background patterns (like `dots` or `hachure`) and an optional SVG displacement map (via the `noise` prop) for a gritty, tactile feel.
* **Micro-Interactions**: A suite of custom animations (`boop`, `shiver`, `wobble`) are available as utility classes, ready to be applied permanently or triggered on hover.
* **Minimalist Icons**: I ditched complex icon fonts and sprite sheets. Hand-drawn, Lucide-inspired icons are just raw SVG path strings that drop straight into a lightweight `<Icon>` wrapper.
* **Flexible Elements**: Many components accept an `as` prop, allowing you to easily swap the underlying HTML tag (e.g., rendering a Card as a `<section>`) without losing semantic meaning or type safety.

## Installation Quick Start

For detailed instructions please refer to the full [Installation Guide](https://sherlockdoyle.github.io/cartUnI/#/docs/installation).

1. **Setup shadcn**: Initialize the shadcn CLI (`npx shadcn@latest init`) and configure your `components.json` to include the cartUnI registry:

   ```json
   {
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
   }
   ```

2. **Add Global Styles**: Pull in the base styling tokens, theme variables, and animation keyframes:

   ```bash
   npx shadcn@latest add cartuni/globalStyles
   ```

   **You must explicitly declare CSS layers in your `index.html` to prevent production minification bugs. See the docs!**

   ```html
   <style>
     @layer theme, animations, base, patterns, components, utilities;
   </style>
   ```

3. **Use Components**: Use the CLI to grab whatever you need!

   ```bash
   npx shadcn@latest add cartuni/button cartuni/card
   ```

Go forth and make things beautifully sketchy!
