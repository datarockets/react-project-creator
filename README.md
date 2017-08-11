# react-project-creator

## Description
A simple project generator with an ability to generate components and to set up basic libraries

## How to setup
To setup this project generator globally use the following commands

```bash

git clone https://github.com/datarockets/react-project-creator.git
cd react-project-creator
npm install -g

```

## How to use
To generate the basic project structure use the following command

```bash

react-up new <project-name>

```

## Element generator

To generate a `component`, `container`, or `model` use the following command

```bash

react-up generate [component|container|model] <element-name>

```

To generate a `ui`, `layout`, or `page` component use the following flags

```bash

react-up generate component <element-name> [--ui|--layout|--page]

```

## Project structure

```
<project-name>
  config
  public
  resources
  src
    components
      layouts
      pages
      ui
    containers
    routes
    models
    utils
    redux
      actions
      reducers
      sagas
      thunk

```
