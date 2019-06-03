#!./node_modules/.bin/lan --skip-project
 
import { promptMenu } from './launch-menu';
import * as fs from 'fs';
import * as path from 'path';
 
import { exec } from 'child_process';

 
 
 

 
 

async function main(): Promise<void> {


  const currentPackageJsonFilePath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(currentPackageJsonFilePath))
    throw `missing file ${currentPackageJsonFilePath}`;
  const currentPackge = require(currentPackageJsonFilePath);

  if (!currentPackge.scripts) throw `missing scripts in ${currentPackageJsonFilePath}`;
  const scripts = Object.assign({ description: 'script' }, ...Object.keys(currentPackge.scripts).map(key => ({ [key]: key })));




  //if (process.platform === 'win32') (Colors as any).Dim = '\x1b[90m';




  const selectedScript = await promptMenu(scripts as any);

  const cp = exec(`npm run ${selectedScript}`);
  cp.stdout.pipe(process.stdout);
  cp.stderr.pipe(process.stderr);
  process.stdin.pipe(cp.stdin);
  cp.on('close', exitCode => process.exit(exitCode));
}

main().then(console.log,console.error);
