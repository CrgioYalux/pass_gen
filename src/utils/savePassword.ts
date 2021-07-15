import fs from 'fs';
import os from 'os';
import path from 'path';
import chalk from 'chalk';

const { log } = console;

export const savePassword = (password: string) => {
	fs.open(path.join('passwords.txt'), 'a', (e, id) => {
		fs.write(id, password + os.EOL, null, 'utf-8', () => {
			fs.close(id, () => {
				log(chalk.redBright("Saved in file 'passwords.txt'"));
			});
		});
	});
};
