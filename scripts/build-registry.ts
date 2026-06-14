/// <reference types="node" />

import fs from 'node:fs/promises';
import path from 'node:path';

const REGISTRY_DIR = 'registry';
const PUBLIC_REGISTRY_DIR = 'public/registry';

const IMPORT_RE = /'@(?:\/(\w+(?:\.module\.css)?))+'/g;
async function parseDependencies(path: string): Promise<string[]> {
  const content = await fs.readFile(path, 'utf-8');
  const matches = content.matchAll(IMPORT_RE);
  return Array.from(matches).map(match => (match[1] === 'common.module.css' ? 'commonClasses' : match[1]));
}

type RegistryType = `registry:${string}`;
interface Component {
  name: string;
  type: RegistryType;
  dependencies?: string[];
  registryDependencies?: string[];
  files: string[];
}
// basic components
const components: Component[] = [
  {
    name: 'globalStyles',
    type: 'registry:base',
    files: ['registry/style/colors.css', 'registry/style/global.css'],
  },
  {
    name: 'commonClasses',
    type: 'registry:style',
    files: ['registry/style/common.module.css'],
  },
  {
    name: 'utils',
    type: 'registry:lib',
    registryDependencies: ['commonClasses'],
    files: ['registry/lib/utils.ts'],
  },
  {
    name: 'useTheme',
    type: 'registry:hook',
    files: ['registry/hook/useTheme.ts'],
  },
  {
    name: 'useCachedStyles',
    type: 'registry:hook',
    files: ['registry/hook/useCachedStyles.ts'],
  },
];

async function walkUiDir(dir: string) {
  const type: RegistryType = `registry:${path.basename(dir)}`;
  for (const file of await fs.readdir(dir)) {
    const filePath = path.join(dir, file);
    if ((await fs.stat(filePath)).isDirectory()) {
      const name = path.basename(file);
      const files = (await fs.readdir(filePath)).map(f => path.join(filePath, f));

      const dependencies = new Set<string>();
      for (const file of files) (await parseDependencies(file)).forEach(dep => dependencies.add(dep));

      components.push({ name, type, registryDependencies: Array.from(dependencies), files });
    } else {
      const name = path.basename(file, path.extname(file));

      components.push({ name, type, registryDependencies: await parseDependencies(filePath), files: [filePath] });
    }
  }
}

async function buildRegistry() {
  await fs.mkdir(PUBLIC_REGISTRY_DIR, { recursive: true });

  for (const comp of components) {
    const filesData = [];
    for (const file of comp.files) {
      try {
        const content = await fs.readFile(file, 'utf-8');
        filesData.push({ path: file, content, type: file.endsWith('.css') ? 'registry:style' : comp.type });
      } catch (err) {
        console.warn(`Warning: Could not read ${file}`);
      }
    }
    const registryJson = {
      $schema: 'https://ui.shadcn.com/schema/registry-item.json',
      ...comp,
      files: filesData,
    };

    const outPath = path.join(PUBLIC_REGISTRY_DIR, `${comp.name}.json`);
    await fs.writeFile(outPath, JSON.stringify(registryJson, null, 2));
    console.log(`Built registry item: ${comp.name}`);
  }

  const indexPath = path.join(PUBLIC_REGISTRY_DIR, 'index.json');
  await fs.writeFile(indexPath, JSON.stringify(components, null, 2));
  console.log(`Built registry index: index.json`);
}

await walkUiDir(path.join(REGISTRY_DIR, 'ui'));
await walkUiDir(path.join(REGISTRY_DIR, 'component'));

// special case
components.find(c => c.name === 'code')!.dependencies = ['sugar-high'];
components.find(c => c.name === 'appShell')!.dependencies = ['wouter'];

await buildRegistry();
