import { globSync } from 'node:fs';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import pkg from './package.json' with { type: 'json' };

const external = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies)
].map(name => new RegExp(`^${name}(/|$)`));

// Every module is a public entry (`react-materialize/lib/<Name>`), so each one
// gets its own file and CommonJS interop marker.
const entries = Object.fromEntries(
  globSync('src/**/*.{js,jsx}').map(file => [
    file.replace(/^src\//, '').replace(/\.jsx?$/, ''),
    file
  ])
);

// Ship the hand-written declarations next to each module: `.d.ts` for the
// CommonJS build and `.d.mts` (with `.mjs` specifiers) for the ESM build.
const handWrittenTypes = (from, to) => ({
  name: 'hand-written-types',
  apply: 'build',
  async closeBundle() {
    await mkdir(to, { recursive: true });
    for (const file of await readdir(from)) {
      if (!file.endsWith('.d.ts')) continue;
      const source = await readFile(`${from}/${file}`, 'utf8');
      await writeFile(`${to}/${file}`, source);
      await writeFile(
        `${to}/${file.replace(/\.d\.ts$/, '.d.mts')}`,
        source.replace(/(from\s+['"])(\.{1,2}\/[^'"]+)(['"])/g, '$1$2.mjs$3')
      );
    }
  }
});

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'classic' }),
    handWrittenTypes('types/components', 'lib')
  ],
  build: {
    outDir: 'lib',
    target: 'es2019',
    minify: false,
    lib: {
      entry: entries,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        `${entryName}.${format === 'es' ? 'mjs' : 'js'}`
    },
    rolldownOptions: {
      external,
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
        // Match Babel's CJS interop: bundlers map `import X from '.../lib/X'` to exports.default.
        esModule: true
      }
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['test/**/*.spec.{js,jsx}'],
    setupFiles: ['./test/setup.js']
  }
});
