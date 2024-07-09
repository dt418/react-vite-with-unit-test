import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
