/* eslint-env node */

require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: "latest",
		project: ["./tsconfig.app.json"],
		tsconfigRootDir: __dirname
	},
	plugins: ['@typescript-eslint'],
	extends: [
		"plugin:vue/vue3-essential",
		"plugin:vue/vue3-strongly-recommended",
		"plugin:vue/vue3-recommended",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"@vue/eslint-config-typescript",
		"@vue/eslint-config-prettier/skip-formatting"
	],
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'vue/html-indent': ['error', 'tab'],
		'class-methods-use-this': 0,
		'no-plusplus': 0,
		"max-len": [
			"error",
			{
				code: 130,
				tabWidth: 4,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreComments: true,
				ignoreRegExpLiterals: true,
				ignoreTrailingComments: true,
				ignorePattern: 'd="([\\s\\S]*?)"'
			},
		],
		'no-param-reassign': 0,
		'no-console': 'off',
		'no-await-in-loop': 'off',
		'max-classes-per-file': 'off',
		'no-underscore-dangle': 'off',
		'no-continue': 'off',
		'comma-dangle': ['error', 'never'],
		'no-multi-assign': 'off',
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'no-extend-native': 'off',
		'no-restricted-syntax': 'off',
		'no-unused-vars': 'off',
		'no-nested-ternary': 'off',
		'no-pro`m`ise-executor-return': 'off',
		'no-cycle': 'off',
		'no-bitwise': 'off',
		semi: ['error', 'always'],
		'comma-spacing': ['error', { before: false, after: true }],
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-single'],
		'vue/html-quotes': ['error', 'single'],
		'quote-props': ['error', 'as-needed'],
		'vue/comma-dangle': ['error', 'never'],
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				argsIgnorePattern: "^_+$",
			},
		],
		"@typescript-eslint/no-unsafe-assignment": "warn",
		"@typescript-eslint/no-unsafe-member-access": "warn",
		"@typescript-eslint/no-unsafe-call": "warn",
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn'
	},
	env: {
		node: true,
		browser: true
	},
	ignorePatterns: ["/*", "!/src"],
};
