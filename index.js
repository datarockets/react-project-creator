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
  .description('Generate an element: component/container/model')
  .action((elementType, elementName) => {
    generateElement(elementType, elementName);
  });

program.parse(process.argv);
