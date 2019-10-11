module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "globalReturn": false,
            "impliedStrict": true,
            "jsx": true
        },
        "requireConfigFile": false,
        "allowImportExportEverywhere": false
    },
    "extends": [
        './rules/possible-errors.js',
        './rules/best-practices.js',
        './rules/strict-mode.js',
        './rules/variables.js',
        './rules/node.js',
        './rules/stylistic.js',
        './rules/es6.js'
    ]
};