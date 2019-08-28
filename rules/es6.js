/**
 * ECMAScript 6
 */
module.exports = {
    "rules": {
        // 箭头函数体使用大括号
        "arrow-body-style": "off",
        // 箭头函数的参数使用圆括号
        "arrow-parens": "off",
        // 箭头函数的箭头之前或之后有空格
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        // 验证构造函数中 super() 的调用
        "constructor-super": "error",
        // 强制 generator 函数中 * 号周围有空格
        "generator-star-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        // 不允许修改类声明的变量
        "no-class-assign": "error",
        // 禁止在可能与比较操作符相混淆的地方使用箭头函数
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],
        // 不允许改变用const声明的变量
        "no-const-assign": "error",
        // 不允许类成员中有重复的名称
        "no-dupe-class-members": "error",
        // 禁止重复导入模块
        "no-duplicate-imports": [
            "error",
            {
                "includeExports": true
            }
        ],
        // 禁止使用 new Symbol
        "no-new-symbol": "error",
        // 禁用特定的 import
        "no-restricted-imports": "off",
        // 在构造函数中禁止在调用super()之前使用this或super
        "no-this-before-super": "error",
        // 禁止在对象中使用不必要的计算属性
        "no-useless-computed-key": "error",
        // 禁用不必要的构造函数
        "no-useless-constructor": "error",
        // 禁止解构时出现同样名字的的重命名
        "no-useless-rename": "error",
        // 要求使用 let 或 const 而不是 var
        "no-var": "off",
        // 要求对象字面量简写语法
        "object-shorthand": "off",
        // 必须使用箭头函数作为回调
        "prefer-arrow-callback": "off",
        // 建议使用const
        "prefer-const": "off",
        // 优先使用数组和对象解构
        "prefer-destructuring": "off",
        // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
        "prefer-numeric-literals": "off",
        // 必须使用 ...args 而不是 arguments
        "prefer-rest-params": "off",
        // 建议使用扩展语法而非.apply()
        "prefer-spread": "off",
        // 建议使用模板字面量而非字符串连接
        "prefer-template": "off",
        // 禁用函数内有没有yield的 generator 函数
        "require-yield": "error",
        // 强制剩余和扩展运算符及其表达式之间有空格
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        // import 排序
        "sort-imports": "off",
        // 要求 symbol 描述
        "symbol-description": "error",
        // 强制模板字符串中空格的使用 (
        "template-curly-spacing": [
            "error",
            "never"
        ],
        // 强制在 yield* 表达式中 * 周围使用空格
        "yield-star-spacing": [
            "error",
            "after"
        ]
    }
};