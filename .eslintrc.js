module.exports = {
    root: true,
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "mocha": true
    },
    "plugins": [
        "react"
      ],
    "extends": [
        'airbnb-base',
        'plugin:react/all'
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 7,
        sourceType: "module"
    },
    rules: {
        'react/forbid-component-props': 'off',
        'react/jsx-max-depth': 'off',
        'react/prop-types': [2, {
            ignore: [
                'classes',
            ],
        }],
        'class-methods-use-this': 'off',
    },
}