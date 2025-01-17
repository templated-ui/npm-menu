[![npm version](https://badge.fury.io/js/npm-run-menu.svg)](https://www.npmjs.com/package/npm-run-menu)
[![GitHub last commit](https://img.shields.io/github/last-commit/templated-ui/npm-run-menu.svg?maxAge=2400)](#)
[![downloads-image](https://img.shields.io/npm/dm/npm-run-menu.svg)](https://www.npmjs.com/package/npm-run-menu)
[![Dependency Status](https://david-dm.org/templated-ui/npm-run-menu.svg)](https://david-dm.org/templated-ui/npm-run-menu) 
[![devDependency Status](https://david-dm.org/templated-ui/npm-run-menu/dev-status.svg)](https://david-dm.org/templated-ui/npm-run-menu?type=dev) 

[![NPM](https://nodei.co/npm/npm-run-menu.png?compact=false)](https://www.npmjs.com/package/npm-run-menu)

[![License](https://img.shields.io/npm/l/npm-run-menu.svg)](/LICENSE) 

[![GitHub forks](https://img.shields.io/github/forks/templated-ui/npm-run-menu.svg?style=social&label=Fork)](https://github.com/templated-ui/npm-run-menu/fork)
[![GitHub stars](https://img.shields.io/github/stars/templated-ui/npm-run-menu.svg?style=social&label=Star)](https://github.com/templated-ui/npm-run-menu) 

# ![Logo](docs/readme-logo.png) Script Launcher

### Tools
* [node](https://nodejs.org/en/) - JavaScript runtime
* [nvm](https://github.com/creationix/nvm) - node version manager
* [tsc](https://www.typescriptlang.org/) - TypeScript
* [launch](https://www.npmjs.com/package/npm-run-menu) - Script Launcher

### Basic setup
``` bash
git clone git@github.com:templated-ui/npm-run-menu.git
cd npm-run-menu

npm install
npm start
```

### Build & Publish
```
npm start build
cd dist
npm login
npm whoami
npm publish
```

### Resources
* [NPM Developer Guide](https://docs.npmjs.com/misc/developers#before-publishing-make-sure-your-package-installs-and-works)

### Dependencies 
* [cross-spawn](https://www.npmjs.com/package/cross-spawn) - A cross platform solution to node's spawn and spawnSync.            
* [deepmerge](https://www.npmjs.com/package/deepmerge) - Merges the enumerable attributes of two or more objects deeply.     
* [glob](https://www.npmjs.com/package/glob) - Match files using the patterns the shell uses, like stars and stuff.
* [Inquirer.js](https://www.npmjs.com/package/inquirer) - A collection of common interactive command line user interfaces.    
* [pretty-time](https://www.npmjs.com/package/pretty-time) - Easily format the time from node.js process.hrtime.
* [string-argv](https://www.npmjs.com/package/string-argv) - Parses a string into an argument array to mimic process.argv.       
