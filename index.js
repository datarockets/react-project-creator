#!/usr/bin/env node

const projectName = process.argv[2];

require('./tasks/generate').generate(projectName);
