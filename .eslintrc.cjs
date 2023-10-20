module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'prettier', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': ['error'],
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
      'pathGroups': [{
        'pattern': '@/**/**',
        'group': 'parent',
        'position': 'before'
      }],
      'alphabetize': {
        'order': 'asc'
      }
    }],
    'no-restricted-imports': ['error', {
      'patterns': ['../']
    }]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: true,
      node: true
    }
  }
};