import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          floatPrecision: 2,
        },
        icon: true,
        svgProps: {
          role: 'img',
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: [...configDefaults.include],
    exclude: [...configDefaults.exclude],
    setupFiles: ['./tests/vitest.setup.ts'],
    coverage: {
      reportsDirectory: './coverage',
    },
  },
});
