import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    noExternal: ['@ai-sdk/provider', '@ai-sdk/provider-utils'],
    define: {
      __PACKAGE_VERSION__: JSON.stringify(
        (await import('./package.json', { with: { type: 'json' } })).default
          .version,
      ),
    },
  },
  {
    entry: ['src/internal/index.ts'],
    outDir: 'dist/internal',
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    noExternal: ['@ai-sdk/provider', '@ai-sdk/provider-utils'],
    define: {
      __PACKAGE_VERSION__: JSON.stringify(
        (await import('./package.json', { with: { type: 'json' } })).default
          .version,
      ),
    },
  },
]);
