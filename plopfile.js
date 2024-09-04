import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  kebabCase,
  noCase,
  pascalCase,
  pascalSnakeCase,
  pathCase,
  sentenceCase,
  snakeCase,
  trainCase,
} from 'change-case';

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  // Helper to convert text to PascalCase
  plop.setHelper('pascalCase', (text) => pascalCase(text));
  plop.setHelper('camelCase', (text) => camelCase(text));
  plop.setHelper('capitalCase', (text) => capitalCase(text));
  plop.setHelper('constantCase', (text) => constantCase(text));
  plop.setHelper('dotCase', (text) => dotCase(text));
  plop.setHelper('kebabCase', (text) => kebabCase(text));
  plop.setHelper('noCase', (text) => noCase(text));
  plop.setHelper('pascalSnakeCase', (text) => pascalSnakeCase(text));
  plop.setHelper('pathCase', (text) => pathCase(text));
  plop.setHelper('sentenceCase', (text) => sentenceCase(text));
  plop.setHelper('snakeCase', (text) => snakeCase(text));
  plop.setHelper('trainCase', (text) => trainCase(text));
  // Custom helper to convert path to PascalCase
  plop.setHelper('pascalPath', (text) => {
    return text
      .split('/')
      .map((segment) => pascalCase(segment))
      .join('/');
  });

  plop.setGenerator('component', {
    description: 'Create a React component with TypeScript support',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name:',
        validate: (input) => {
          if (input.trim() === '') {
            return 'Component name cannot be empty';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'subfolder',
        message: 'Subfolder (optional, e.g., common or common/buttons):',
        default: '', // Default to an empty string if no subfolder is provided
      },
    ],
    actions: (data) => {
      const pathPrefix = data.subfolder
        ? `src/components/${pascalCase(pathCase(data.subfolder))}/`
        : 'src/components/';
      return [
        {
          type: 'add',
          path: `${pathPrefix}{{pascalCase componentName}}/{{pascalCase componentName}}.tsx`,
          templateFile: 'plop-templates/component.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${pathPrefix}{{pascalCase componentName}}/{{pascalCase componentName}}.lazy.tsx`,
          templateFile: 'plop-templates/componentLazy.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${pathPrefix}{{pascalCase componentName}}/{{pascalCase componentName}}.stories.tsx`,
          templateFile: 'plop-templates/storybook.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${pathPrefix}{{pascalCase componentName}}/{{pascalCase componentName}}.test.tsx`,
          templateFile: 'plop-templates/test.hbs',
          skipIfExists: true,
        },
      ];
    },
  });
}
