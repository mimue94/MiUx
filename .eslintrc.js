module.exports = {
	root: true,

	env: {
		node: true,
		browser: true,
		es2021: true,
		'vue/setup-compiler-macros': true,
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},

	extends: ['plugin:vue/vue3-recommended', '@vue/airbnb'],

	plugins: ['vue', '@typescript-eslint'],

	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars':
			process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'vue/html-indent': ['error', 'tab'],
		'vue/multiline-html-element-content-newline': [
			'error',
			{
				ignoreWhenEmpty: true,
				ignores: ['pre', 'textarea'],
			},
		],
		'max-len': 0,
		'no-param-reassign': ['error', { props: false }],
		'no-underscore-dangle': 0,
		'vue/block-spacing': 'error',
		'vue/camelcase': ['error', { allow: ['alpha_spaces'] }],
		'vue/component-name-in-template-casing': 'error',
		'vue/match-component-file-name': 'error',
		'vue/require-component-is': 0,
		'no-plusplus': 0,
		'import/prefer-default-export': 0,
		'lines-between-class-members': [
			'warn',
			'always',
			{ exceptAfterSingleLine: true },
		],
		'func-style': ['error', 'expression'],
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/*.test.js',
					'**/*.test.ts',
					'**/*.spec.js',
					'**/*.spec.ts',
				],
			},
		],
		'no-undef': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'func-call-spacing': 'off',
		'no-spaced-func': 'off',
		'@typescript-eslint/func-call-spacing': ['error'],
		'import/no-unresolved': [
			'error',
			{
				ignore: ['.svg'],
			},
		],
		'vuejs-accessibility/form-control-has-label': 'off',
		'vuejs-accessibility/tabindex-no-positive': 'off',
		'vuejs-accessibility/label-has-for': 'off',
	},

	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},

	settings: {
		'import/resolver': {
			typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
		},
	},
};
