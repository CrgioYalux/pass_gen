enum CHARS {
	ALPHA = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX',
	NUMBERS = '0123456789',
	SYMBOLS = '!@#$%^&*_-+=',
}

export const createPassword = (
	length: number,
	useNumbers: boolean,
	useSymbols: boolean,
) => {
	let chars: string = CHARS.ALPHA;
	useNumbers ? (chars += CHARS.NUMBERS) : '';
	useSymbols ? (chars += CHARS.SYMBOLS) : '';
	return generatePassword(length, chars);
};

const generatePassword = (length: number, chars: string) => {
	let password: string = '';
	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return password;
};
