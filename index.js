module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "globals": {},
    "env": {
        "jasmine": true,
        "browser": true,
        "node": true
    },
    "rules": {
        // 4 spaces indentation
        "indent": ["error", 4, { "SwitchCase": 1, "VariableDeclarator": 1 }],
        // return should be without assign action,
        // but it's not good in cases like the following one:
        // setProperty = (newValue) => property = newValue;
        "no-return-assign": 0,
        // Max line lingth
        "max-len": ["error", 120],
        // Allowing overrriding variables.
        // For example in: tests (using `done`), object destructuring
        "no-shadow": 0,
        // You can use "fat arrow" without parenthesis for variables:
        // someArray.filter(item => item.done);
        "arrow-body-style": 0,
        // I use spaces whe importing variables from modules
        // import { loadProjects } from './projects';
        "object-curly-spacing": 0,
        // No reassigning function parameters
        "no-param-reassign": ["error", { "props": false }],
        // Do not declare unused exprssions
        "no-unused-expressions": ["error", { "allowShortCircuit": true }],
        // You can use `swith` without `default`
        "default-case": 0,
        // Empty string in object decalration
        // There is no need in such rule
        "padded-blocks": 0,
        // Don't use quotes in objects properties names. only when you should use it
        "quote-props": ["error", "as-needed", {
            "keywords": true
        }],
        // Consistency in what function is returnig
        "consistent-return": ["warn"],
        // You can't use variables before definition.
        // Functions are exception in his rule, case of hoisting
        "no-use-before-define": ["error", { "functions": false }],
        // In some cases "fat arrow" looks like comparison operator (>, <, <=, and >=)
        // But I don't see how it's a problem
        "no-confusing-arrow": 0,
        // Write IIFE with parenthesis and not some wired shit
        "wrap-iife": ["error", "inside"],
        // Disallowing some language features:
        // Do not leave command `debugger` in your code
        // Do not use `with`
        "no-restricted-syntax": [
            "error",
            "DebuggerStatement",
            "WithStatement"
        ],
        "func-names": 0,
        // No space before function parenthesis
        "space-before-function-paren": ["error", "never"],
        // After key operators (if, else, for, etc) should be at least one space
        "keyword-spacing": ["error", {"overrides": {
            "catch": { "after": true }
        }}],
        "no-case-declarations": 0,
        "no-console": ["error", { "allow": ["warn", "error"] }],

        // You're not obligated to declare variables in the beginning of the function
        "vars-on-top": 0,
        // Use underscore to mark "private" methods
        "no-underscore-dangle": 0,
        // Don't use spaces before or after unary operators: !, !!, ++, --, ~
        "space-unary-ops": ["error"],
        // Operator should be used before new line
        "operator-linebreak": ["error", "after"],
        // You have 2 optionsl names for context variables: "that", "self"
        "consistent-this": ["error", "that", "self"],
        // We are not checking for first capital letter on object properties
        // Otherwise $.Deferred(); will be an error
        "new-cap": ["error", {
            "properties": false
        }],
        // require can be used not oly in the beginning of the file
        "global-require": 0,
        // It's not required to move each chain element to new line
        "newline-per-chained-call": 0,
        // Only warn if there is no check for hasOwnProperty inside `for in`
        "guard-for-in": ["warn"],
        // Warning if there is empty block
        "no-empty": ["warn"],
        "no-prototype-builtins": 0,
        // I don't feel like disallowing `++` is what will "save the day"
        "no-plusplus": 0,
        // In generators we may use infinite loops like `while(true) {}`
        "no-constant-condition": 0,
        // Some methods of react components can be used without `this`
        // For example:
        // * I just want to manipulate values that they use.
        // * Method is rendering part of DOM of the component
        // * render() returning `null` in case I don't want component to have visual part (Controllers)
        "class-methods-use-this": 0,
        // Dangle comma in functions cause error in some versions of node.js
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore"
        }],
        // Usage of `Math.pow` will not emit error (** operator is not available in es6)
        "no-restricted-properties": [
            "warn",
        ],
        // We're allowing multiple spaces before comments.
        // This way you can align comment in one column
        // For example:
        // const foo = 1;          // explanation
        // const someLongName = 2; // some additional explanation
        "no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true
            }
        ],
        // Arguments could be passed to the function in multiple lines.
        // For example:
        // foo(
        //    bar,
        //    baz,
        //    qux
        // );
        "function-paren-newline": ["error", "consistent"],
        // Some global variables should be restricted
        // Global variable "event" should not be used
        // "fdescribe" is part of testing framework
        // "fit" is part of testing framework as well
        "no-restricted-globals": [
            "error",
            {
                "name": "event",
                "message": "Use local parameter instead."
            },
            {
                "name": "fdescribe",
                "message": "Do not commit 'fdescribe'. Use describe instead."
            },
            {
                "name": "fit",
                "message": "Do not commit 'fit'. Use describe instead."
            }
        ],
        // Objects can be created in one line
        "object-curly-newline": ["error", { "consistent": true }],

        /*---# PLUGINS ---*/

        // You can import devDependencies, as well as dependencies, there is no problems with it
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        "import/no-extraneous-dependencies": 0,
        // Requiring of images and styles
        "import/no-unresolved": 0,
        // I don't like default export to be mandatory by defaut
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        "import/prefer-default-export": "warn"
    }
};
