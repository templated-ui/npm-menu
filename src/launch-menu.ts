import * as inquirer from 'inquirer';
import * as fs from 'fs';
 
export interface IMenu {
  description: string;
  [entry: string]:string;
}
export async function promptMenu(menu: IMenu ): Promise<string> {
  const choices = Object.entries(menu).filter(([name, value]) => name !== 'description' && Object.keys(value).length !== 0).map(([name, value]) => name);

  if (choices.length === 0) throw new Error('No menu entries available.');

  const answer = await inquirer.prompt<{ value: string }>([
    {
      type: 'list',
      name: 'value',
      message: 'Select' + (menu.description ? ' ' + menu.description : '') + ':',
      choices
    },
  ]);
  return answer && answer.value;
 
 
}
 
 
