module.exports = {
    root: true,
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "mocha": true
    },
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
    }
}