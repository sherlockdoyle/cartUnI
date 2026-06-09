/// <reference types="node" />

import { writeFileSync } from 'node:fs';

const baseColors = {
  red: 'oklch(0.715 0.130  22)',
  pink: 'oklch(0.725 0.120 355)',
  purple: 'oklch(0.670 0.105 310)',
  'deep-purple': 'oklch(0.635 0.110 295)',
  indigo: 'oklch(0.660 0.100 275)',
  blue: 'oklch(0.700 0.100 245)',
  'light-blue': 'oklch(0.755 0.090 225)',
  cyan: 'oklch(0.770 0.090 205)',
  teal: 'oklch(0.720 0.085 185)',
  green: 'oklch(0.740 0.100 155)',
  'light-green': 'oklch(0.775 0.110 140)',
  lime: 'oklch(0.820 0.115 120)',
  yellow: 'oklch(0.880 0.120  98)',
  amber: 'oklch(0.830 0.120  78)',
  orange: 'oklch(0.780 0.120  55)',
  'deep-orange': 'oklch(0.740 0.130  40)',
  brown: 'oklch(0.620 0.060  50)',
  grey: 'oklch(0.700 0.000   0)',
  'blue-grey': 'oklch(0.660 0.030 240)',
};

const COLORS_CSS_PATH = 'registry/style/colors.css';

let css = `:root{\n`;
for (const [key, value] of Object.entries(baseColors))
  // base
  css += `  --c-${key}-500: ${value};\n`;
for (const color in baseColors) {
  css += '\n';

  // Light shades - absolute target lightness, scaled chroma
  css += `  --c-${color}-50  : oklch(from var(--c-${color}-500) 0.975 calc(c * 0.08) h);\n`;
  css += `  --c-${color}-100 : oklch(from var(--c-${color}-500) 0.950 calc(c * 0.18) h);\n`;
  css += `  --c-${color}-200 : oklch(from var(--c-${color}-500) 0.900 calc(c * 0.38) h);\n`;
  css += `  --c-${color}-300 : oklch(from var(--c-${color}-500) 0.840 calc(c * 0.60) h);\n`;
  css += `  --c-${color}-400 : oklch(from var(--c-${color}-500) 0.775 calc(c * 0.82) h);\n`;

  // Dark shades - relative lightness offset from base
  css += `  --c-${color}-600 : oklch(from var(--c-${color}-500) calc(l - 0.07) calc(c * 1.02) h);\n`;
  css += `  --c-${color}-700 : oklch(from var(--c-${color}-500) calc(l - 0.15) calc(c * 0.95) h);\n`;
  css += `  --c-${color}-800 : oklch(from var(--c-${color}-500) calc(l - 0.24) calc(c * 0.82) h);\n`;
  css += `  --c-${color}-900 : oklch(from var(--c-${color}-500) calc(l - 0.35) calc(c * 0.65) h);\n`;

  // Accent shades - boosted chroma, fixed lightness
  css += `  --c-${color}-a100: oklch(from var(--c-${color}-500) 0.920 calc(c * 0.80) h);\n`;
  css += `  --c-${color}-a200: oklch(from var(--c-${color}-500) 0.850 calc(c * 1.00) h);\n`;
  css += `  --c-${color}-a400: oklch(from var(--c-${color}-500) 0.760 calc(c * 1.20) h);\n`;
  css += `  --c-${color}-a700: oklch(from var(--c-${color}-500) 0.690 calc(c * 1.30) h);\n`;
}
css += '}';

writeFileSync(COLORS_CSS_PATH, css);
