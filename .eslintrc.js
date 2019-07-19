module.exports = {
  extends: [
    // 'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:cypress/recommended',
    'plugin:import/typescript',
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'json', 'jsx-a11y', 'react-hooks', 'cypress'],
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': { 'extensions': ['.jsx', '.tsx']},
    'react/prop-types': 'off',
    'linebreak-style': process.platform === 'win32' ? 'off' : ['error', 'unix'],
    '@typescript-eslint/indent': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': ['off', { 'devDependencies': ['/.storybook/**', '**/stories.jsx', '/src/testHelpers/**', '/dataValidator/**'] }],
  },
};
