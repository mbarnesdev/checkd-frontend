const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['.eslintrc.cjs', 'postcss.config.js', '*.config.cjs'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/jsx-key': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: './tailwind.config.cjs',
    },
  },
};

module.exports = config;
