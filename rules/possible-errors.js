/**
 * Possible Errors
 */
module.exports = {
    "rules": {
        // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
        "for-direction": "error",
        // 强制 getter 必须有返回值，并且值不能为空
        "getter-return": [
            "error",
            {
                "allowImplicit": false
            }
        ],
        // 禁止使用异步函数作为 Promise executor
        "no-async-promise-executor": "error",
        // 禁止在循环中出现 await
        "no-await-in-loop": "off",
        // 禁止与 -0 进行比较
        "no-compare-neg-zero": "error",
        // 禁止条件表达式中出现赋值操作符,除非是圆括号包起来
        "no-cond-assign": [
            "error",
            "except-parens"
        ],
        // 禁用 console
        "no-console": "off",
        // 禁止在条件中使用常量表达式,但允许在循环中使用常量表达式
        "no-constant-condition": [
            "error",
            {
                "checkLoops": false
            }
        ],
        // 禁止在正则表达式中使用控制字符
        "no-control-regex": "off",
        // 禁用 debugger
        "no-debugger": "error",
        // 禁止在 function 定义中出现重名参数
        "no-dupe-args": "error",
        // 禁止在对象字面量中出现重复的键
        "no-dupe-keys": "error",
        // 禁止在 switch 中，出现重复 case 标签
        "no-duplicate-case": "error",
        // 禁止空块语句，但允许 catch 为空代码块
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        // 禁止在正则表达式中出现空字符集
        "no-empty-character-class": "error",
        // 禁止对 catch 子句中的异常重新赋值
        "no-ex-assign": "error",
        // 禁止不必要的布尔类型转换
        "no-extra-boolean-cast": "error",
        // 禁止表达式中冗余的括号
        "no-extra-parens": [
            "error",
            "functions"
        ],
        // 禁止出现不必要的分号
        "no-extra-semi": "error",
        // 禁止对 function 声明重新赋值
        "no-func-assign": "error",
        // 禁止在嵌套的语句块中出现变量或 function 声明
        "no-inner-declarations": [
            "error",
            "both"
        ],
        // 禁止在 RegExp 构造函数中出现无效的正则表达式
        "no-invalid-regexp": "error",
        // 禁止不规则的空白(例如全角),除非是字符串、注释、正则表达式或模版字符串中
        "no-irregular-whitespace": [
            "error",
            {
                "skipStrings": true,
                "skipComments": false,
                "skipRegExps": true,
                "skipTemplates": true
            }
        ],
        // 不允许在字符类语法中出现由多个代码点组成的字符,某些字符串很难看出差异
        "no-misleading-character-class": "error",
        // 禁止将全局对象当作函数进行调用
        "no-obj-calls": "error",
        // 禁止直接使用 Object.prototypes 的内置属性, 弊端待观察
        "no-prototype-builtins": "off",
        // 禁止正则表达式字面量中出现多个连续空格，可以使用 /foo {3}bar/代替
        "no-regex-spaces": "error",
        // 禁用稀疏数组
        "no-sparse-arrays": "error",
        // 禁止在常规字符串中出现模板字面量占位符语法
        "no-template-curly-in-string": "error",
        // 禁止使用令人困惑的多行表达式
        "no-unexpected-multiline": "error",
        // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
        "no-unreachable": "error",
        // 禁止在 finally 语句块中出现控制流语句
        "no-unsafe-finally": "error",
        // 禁止对关系运算符的左操作数使用否定操作符, 如把 !(key in object) 错写成 !key in object
        "no-unsafe-negation": "error",
        // 禁止由于 await 或 yield 的使用而可能导致出现竞态条件的赋值
        "require-atomic-updates": "error",
        // 强制使用 isNaN()检查 NaN
        "use-isnan": "error",
        // 强制 typeof 表达式与有效的字符串进行比较
        "valid-typeof": "error"
    }
};