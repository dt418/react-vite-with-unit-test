import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: { chunkSizeWarningLimit: 1600 },
  optimizeDeps: {
    exclude: ['src/stories', '*.stories.tsx', '@storybook/addon-docs'],
    include: ['@storybook/addon-themes', '@storybook/blocks'],
  },
});
