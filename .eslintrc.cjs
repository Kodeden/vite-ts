const { resolve } = require("node:path");
const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard-with-typescript",
    "prettier",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: ["node_modules/"],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["eslint-comments", "react", "use-encapsulation"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "eslint-comments/require-description": "error",
    "no-console": [
      "warn",
      {
        allow: ["error", "info", "table", "warn"],
      },
    ],
    "use-encapsulation/prefer-custom-hooks": ["error", { allow: ["useMemo"] }],
  },
};
