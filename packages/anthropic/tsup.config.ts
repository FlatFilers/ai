import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: {
      resolve: true, // Resolve and inline external type dependencies
    },
    sourcemap: true,
    // Bundle @ai-sdk/provider and @ai-sdk/provider-utils instead of treating them as external
    noExternal: ['@ai-sdk/provider', '@ai-sdk/provider-utils'],
    // Exclude optional peer dependencies from provider-utils to avoid bundling Effect.js, ArkType, Valibot
    external: ['effect', 'arktype', 'valibot', '@valibot/to-json-schema'],
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
    dts: {
      resolve: true, // Resolve and inline external type dependencies
    },
    sourcemap: true,
    // Bundle @ai-sdk/provider and @ai-sdk/provider-utils instead of treating them as external
    noExternal: ['@ai-sdk/provider', '@ai-sdk/provider-utils'],
    // Exclude optional peer dependencies from provider-utils to avoid bundling Effect.js, ArkType, Valibot
    external: ['effect', 'arktype', 'valibot', '@valibot/to-json-schema'],
    define: {
      __PACKAGE_VERSION__: JSON.stringify(
        (await import('./package.json', { with: { type: 'json' } })).default
          .version,
      ),
    },
  },
]);
