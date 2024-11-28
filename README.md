# React + TypeScript + Vite + Storybook + Testing

This template provides a modern React setup with TypeScript, Vite, Storybook, and comprehensive testing capabilities. It includes hot module replacement (HMR), Biome setup, and various development tools for an optimal development experience.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 📝 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 📚 [Storybook](https://storybook.js.org/) - UI component development environment
- 🧪 [Vitest](https://vitest.dev/) - Unit testing framework
- 💅 [Biome](https://biomejs.dev/) - Code formatting, linting
- 🪝 [Lefthook](https://github.com/evilmartians/lefthook) - Git hooks manager
- 📱 PWA Support
- 🏗️ [Plop](https://plopjs.com/) - Code generator to generate component with test and storybook

## Development Tools

### Vite Plugins

Two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### VS Code Extensions

Install these VS Code extensions for the best development experience:
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## Configuration

### Biome Configuration

The project uses Biome for code formatting and linting. Configuration is in `biome.json`:

See [biome.json](./biome.json) for the configuration.

You can run Biome formatting and linting using:
```bash
bun biome check .
bun biome format .
```

### VS Code Settings

Add these settings to `.vscode/settings.json`:

```json
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "quickFix.biome": "explicit",
        "source.fixAll.biome": "explicit",
        "source.organizeImports.biome": "explicit",
        "source.removeUnusedImports": "explicit"
    },
    "[javascript,javascriptreact,typescript,typescriptreact]": {
        "editor.defaultFormatter": "biomejs.biome"
    }
}
```

### Testing Configuration

The project uses Vitest for testing. Configuration is in `vitest.config.ts`:

```ts
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
    setupFiles: ['./test/vitest.setup.ts'],
  },
});
```

Make sure to include test setup files in `tsconfig.app.json`:

```json
{
  "include": [
    // existing includes
    "tests/vitest.setup.ts"
  ]
}
```

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Start the development server:
```bash
bun dev
```

3. Run tests:
```bash
bun test
```

4. Start Storybook:
```bash
bun storybook
```

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `test` - Run tests
- `storybook` - Start Storybook
- `build-storybook` - Build Storybook
- `lint` - Lint code
- `format` - Format code
- `generate` - Run plop generators

## License

MIT
