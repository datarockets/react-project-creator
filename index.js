#!/usr/bin/env node

const program = require('commander');

const projectName = process.argv[2];

require('./tasks/generateProject').generateProject(projectName);
