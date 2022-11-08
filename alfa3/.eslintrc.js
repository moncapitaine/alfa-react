module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // 'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': 'error',
    // 'unicorn/prevent-abbreviations': ['error', { allowList: { props: true, Props: true } }],
    // 'unicorn/filename-case': ['warn', { case: 'camelCase' }],
    'no-console': 'warn',
    'testing-library/prefer-user-event': 'error',
    'react/self-closing-comp': 'error',
    // 'unicorn/prefer-node-protocol': 'off',
  },
  overrides: [
    {
      files: ['.eslintrc.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],
}
