export default {
	'*.{js,ts}': 'eslint',
	'*.{css,scss}': 'stylelint **/*.{css,scss}',
	'**/*': 'prettier --write .',
};
