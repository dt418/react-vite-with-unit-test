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

  plop.setGenerator('component', {
    description: 'Create a React component with TypeScript support',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.lazy.tsx',
        templateFile: 'plop-templates/componentLazy.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.stories.tsx',
        templateFile: 'plop-templates/storybook.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.test.tsx',
        templateFile: 'plop-templates/test.hbs',
      },
    ],
  });
}
