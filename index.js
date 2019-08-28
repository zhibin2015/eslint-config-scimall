module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
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