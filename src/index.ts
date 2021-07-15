import { program } from 'commander';
import clipboardy from 'clipboardy';
import chalk from 'chalk';
import { createPassword } from './utils/createPassword';
import { savePassword } from './utils/savePassword';

const { log } = console;

program.version('1.0.0').description('A Simple Password Generator');

program
	.option('-L, --length <number>', 'length of the password', '10')
	.option('-S, --save', "save the generated password in a 'passwords.txt' file")
	.option('-NN, --no-numbers', 'generate the password without numbers')
	.option('-NS, --no-symbols', 'generate the password without symbols')
	.parse();

const {
	length,
	save,
	numbers: useNumbers,
	symbols: useSymbols,
}: {
	length: number;
	save: boolean;
	numbers: boolean;
	symbols: boolean;
} = program.opts();

const generatedPassword = createPassword(length, useNumbers, useSymbols);
clipboardy.writeSync(generatedPassword);

log(chalk.greenBright('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.yellowBright('Copied to clipboard!'));
save && savePassword(generatedPassword);
