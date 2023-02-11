#!/usr/bin/env node

import { program } from 'commander';
import * as fs from 'node:fs';
import compare from './index.js';

program
.version('0.0.1')
.description('Compares two configuration files and shows a difference.');

//Function
program
.argument('<filepath1>')
.argument('<filepath2>')
.action((filepath1, filepath2) => {       
    const obj1 = JSON.parse(fs.readFileSync(filepath1));
    const obj2 = JSON.parse(fs.readFileSync(filepath2));
    const obj3 = compare(obj1, obj2);
    console.log(obj3);  
  });

// Options
program
.option('-f, --format <type>', 'output format')

program.parse(process.argv);

 