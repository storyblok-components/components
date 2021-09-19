module.exports = {
  extends: [],
  plugins: [],
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  rules: {},
  root: true,
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.tsx', '.ts', '.svg'],
      },
    },
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  ignorePatterns: ['**/functions', '**/lambda'],
};
