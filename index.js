#!/usr/bin/env node

const { createProjectByTemplate } = require('./tasks/createProjectByTemplate');
const { createSetups }            = require('./tasks/createSetups');

const projectName  = process.argv[2];

createProjectByTemplate(projectName);
createSetups(projectName);

runSetupCommands(projectName);
