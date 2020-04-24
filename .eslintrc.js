module.exports = {
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "jest", "prettier", "react-hooks"],
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  rules: {
    "react/prop-types": 0,
    "import/prefer-default-export": 0,
    "comma-dangle": 0,
    "prettier/prettier": ["warn", { singleQuote: true }],
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "react/no-unescaped-entities": 0,
    "import/no-cycle": 0,
    "no-shadow": 0,
    "react/jsx-key": 0,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": 0, // Checks effect dependencies
    "no-underscore-dangle": 0,
    "import/namespace": 0,
    "import/named": 0,
  },
  root: true,
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".tsx", ".ts", ".svg"],
      },
    },
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  ignorePatterns: ["**/functions", "**/lambda"],
};
