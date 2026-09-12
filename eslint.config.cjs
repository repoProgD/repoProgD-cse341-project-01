const globals = require('globals');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
    {
        files: ['**/*.js'], // analyze all JavaScript files
        ignores: ['node_modules/**'],
        languageOptions: {
            // make ESLint aware of Node.js global variables and scoping, so it stops blaming them as undefined
            globals: {
                ...globals.node
            }
        },
        rules: {
            'no-unused-vars': 'warn', // warn about unused variables
            'no-undef': 'error', // error on undefined variables
            'no-console': 'off' // allow console statements (console.log())
        }
    },

    eslintConfigPrettier // disable ESLint rules that conflict with Prettier formatting
];
