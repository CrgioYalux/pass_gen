import { program } from 'commander';

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
} = program.opts();

log(save, useNumbers);
