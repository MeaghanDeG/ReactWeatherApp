module.exports = {
  root: true, // Ensures ESLint doesn't search parent directories for config files
  env: { browser: true, es2020: true }, // Defines global environment: browser and ECMAScript 2020
  extends: [
    'eslint:recommended', 
    'plugin:react/recommended', 
    'plugin:react/jsx-runtime', // React 17+
    'plugin:react-hooks/recommended', // Adds Hooks rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Ignores specified directories/files
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }, // Parses modern ECMAScript modules
  settings: { react: { version: '18.2' } }, 
  plugins: ['react-refresh'], // plugin for fast refresh support
  rules: {
    'react/jsx-no-target-blank': 'off', // Disables warnings for target="_blank" in links
    'react-refresh/only-export-components': [
      'warn', 
      { allowConstantExport: true } // Warns if exports aren't pure components, allows constants
    ],
  },
}
