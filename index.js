#!/usr/bin/env node

const program = require('commander');

const { generateProject } = require('./tasks/generateProject');
const { generateElement } = require('./tasks/generators/generateElement');

// The project structure generator
program
  .command('new [projectName]')
  .description('Generate a new project')
  .action((projectName) => {
    generateProject(projectName);
  });

// The project elements generator
program
  .command('generate [elementType] [elementName]')
  .option('--ui', 'Generate a UI component')
  .option('--layout', 'Generate a layout component')
  .option('--page', 'Generate a page component')
  .description('Generate an element: component/container/model')
  .action((elementType, elementName, { ui, layout, page }) => {
    generateElement(elementType, elementName, { ui, layout, page });
  });

program.parse(process.argv);
