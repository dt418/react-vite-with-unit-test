import { pascalCase } from "change-case";
import { NodePlopAPI } from "plop";


export default function (plop : NodePlopAPI) {
  // Helper to convert text to PascalCase
  plop.setHelper("pascalCase", (text) => pascalCase(text));
  plop.setGenerator("component", {
    description: "Create a React component with TypeScript support",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx",
        templateFile: "plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.lazy.tsx",
        templateFile: "plop-templates/componentLazy.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.stories.tsx",
        templateFile: "plop-templates/storybook.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.test.tsx",
        templateFile: "plop-templates/test.hbs",
      },
    ],
  });
};
