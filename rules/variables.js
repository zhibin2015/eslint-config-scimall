/**
 * Variables
 */
module.exports = {
    "rules": {
        // 强制或禁止变量声明语句中初始化
        "init-declarations": "off",
        // 禁止删除变量
        "no-delete-var": "error",
        // 不允许标签与变量同名
        "no-label-var": "error",
        // 禁用特定的全局变量
        "no-restricted-globals": "off",
        // 禁止变量声明覆盖外层作用域的变量
        "no-shadow": "off",
        // 禁止使用保留字作为变量名
        "no-shadow-restricted-names": "error",
        // 禁用未声明的变量
        // "no-undef": [
        //     "error",
        //     {
        //         "typeof": false
        //     }
        // ],
        "no-undef": "off",
        // 不允许初始化变量值为 undefined
        "no-undef-init": "error",
        // 不允许使用 undefined 变量
        "no-undefined": "error",
        // 禁止定义的变量不使用
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none",
                "ignoreRestSiblings": true,
                "caughtErrors": "none"
            }
        ],
        // 禁止变量定义前使用
        "no-use-before-define": "error"
    }
};