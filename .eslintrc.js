module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:sonarjs/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'sonarjs', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/quotes': 0,
    'react/react-in-jsx-scope': 0,
    'comma-dangle': 0,
    '@typescript-eslint/comma-dangle': 0,
    'multiline-ternary': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/strict-boolean-expressions': [
      1,
      {
        allowString: true,
      },
    ],
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-misused-promises': 0,
		'@typescript-eslint/no-floating-promises': 0,
		'@typescript-eslint/prefer-nullish-coalescing': 0,
		"@typescript-eslint/consistent-type-assertions": 0,
		"react/display-name": 0,
		"@typescript-eslint/no-confusing-void-expression": 0
  },
}
