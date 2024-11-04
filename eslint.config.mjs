import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    files: ['*.ts', '*.tsx'],
  },
  {
    ignores: [
      '**/dist',
      '**/.eslintrc.cjs',
      '**/node_modules',
      '**/dist',
      '**/build',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:storybook/recommended',
      'plugin:tailwindcss/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier',
    ),
  ),
  {
    plugins: {
      'react-refresh': reactRefresh,
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      'simple-import-sort': simpleImportSort,
      prettier,
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      'unused-imports': unusedImports,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
    },

    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'cva', 'tw', 'cn'],
        config: 'tailwind.config.ts',
        cssFiles: [
          '**/*.css',
          '!**/node_modules',
          '!**/.*',
          '!**/dist',
          '!**/build',
        ],
        cssFilesRefreshRate: 5000,
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: ['flatpickr-input'],
        tags: [],
        classRegex: '^class(Name)?$',
      },
    },

    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],

      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'prettier/prettier': ['error'],

      'tailwindcss/no-custom-classname': [
        'error',
        {
          whitelist: [
            'modal',
            'modal-container',
            '',
            'error',
            'form-datepicker',
          ],
        },
      ],
    },
  },
];
