// import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import mkcert from 'vite-plugin-mkcert';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
const _plugins = [
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
  ViteImageOptimizer({
    test: /\.(jpe?g|png|gif|svg)$/i,
    include: ['src/images', 'src/assets', 'public'],
    exclude: 'node_modules/**',
    png: {
      quality: 85,
    },
    jpeg: {
      quality: 85,
    },
    svg: {
      multipass: true,
    },
    webp: {
      quality: 85,
    },
  }),
  VitePWA({
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    scope: '/',
    includeAssets: [
      'favicon.svg',
      'favicon.ico',
      'robots.txt',
      'apple-touch-icon.png',
    ],
    manifest: {
      name: 'TailAdmin',
      short_name: 'TailAdmin',
      description: 'TailAdmin - Tailwind CSS Admin Dashboard Template',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  }),
  mkcert(),
];
// _plugins.unshift(MillionLint.vite());
export default defineConfig({
  plugins: _plugins,
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
