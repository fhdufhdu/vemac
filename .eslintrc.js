module.exports = {
  env: {
    browser: true,
    es2021: true,
    webextensions: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // ignorePatterns: ["**/dist/**/*.js"],
  // eslintIgnore: ["webapck.config.js"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/prop-types": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
