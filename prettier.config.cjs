/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(react-dom/(.*)$)|^(react-dom$)',
    '<THIRD_PARTY_MODULES>',
    '^@/*/(.*)$',
    '<TYPES>^(react/(.*)$)|^(react$)',
    '<TYPES>',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};
