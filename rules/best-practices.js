/**
 * Best Practices
 */
module.exports = {
    "rules": {
        // 强制 getter/setter 成对出现在对象中
        "accessor-pairs": [
            "error",
            {
                "setWithoutGet": true,
                "getWithoutSet": false
            }
        ],
        // 强制数组方法的回调函数中有return语句, forEach 除外
        "array-callback-return": "error",
        // 把 var 语句看作是在块级作用域范围之内,禁止在块外使用
        "block-scoped-var": "error",
        // 强制类方法使用 this
        "class-methods-use-this": "off",
        // 限制循环复杂度为20
        "complexity": [
            "error",
            {
                "max": 20
            }
        ],
        // 要求使用一致的 return 语句
        "consistent-return": "off",
        // if 需要遵循一致的大括号约定，除非是单行 if
        "curly": [
            "error",
            "multi-line",
            "consistent"
        ],
        // 要求 Switch 语句中有 Default
        "default-case": "off",
        // 链式调用，强制在点号之前换行
        "dot-location": [
            "error",
            "property"
        ],
        // 要求使用点号
        "dot-notation": "off",
        // 要求使用 === 和 !==
        "eqeqeq": "off",
        // for in 内部必须有 hasOwnProperty
        "guard-for-in": "error",
        // 限制单个文件中类的数量
        "max-classes-per-file": [
            "error",
            2
        ],
        // 禁用 Alert
        "no-alert": "off",
        // 禁用 caller 或 callee
        "no-caller": "error",
        // 禁止在 case 或 default 子句中出现词法声明
        "no-case-declarations": "error",
        // 禁止使用看起来像除法的正则表达式,例：/=foo/
        "no-div-regex": "error",
        // 禁止在 else 前有 return
        "no-else-return": "off",
        // 禁止出现空函数
        "no-empty-function": "off",
        // 禁止使用空解构模式
        "no-empty-pattern": "error",
        // 禁止与 null 进行比较
        "no-eq-null": "off",
        // 禁用 eval()
        "no-eval": "error",
        // 禁止扩展原生对象
        "no-extend-native": "off",
        // 禁止不必要的 .bind() 调用
        "no-extra-bind": "error",
        // 禁用不必要的标签
        "no-extra-label": "error",
        // switch 的 case 内必须有 break, return 或 throw
        "no-fallthrough": "error",
        // 浮点小数禁止省略 0，例 .5
        "no-floating-decimal": "error",
        // 禁止对原生对象或只读的全局对象进行赋值
        "no-global-assign": "error",
        // 禁止使用短符号进行类型转换,但使用 !!
        "no-implicit-coercion": [
            "error",
            {
                "allow": ["!!"]
            }
        ],
        // 禁止在全局范围使用变量和函数声明 TODO 待商议
        "no-implicit-globals": "off",
        // 禁用隐式的eval(), 例：setTimeout()、setInterval() 或 execScript()
        "no-implied-eval": "error",
        // 禁止 this 关键字在类或类对象之外出现 TODO 待商议
        "no-invalid-this": "off",
        // 禁止使用 __iterator__
        "no-iterator": "error",
        // 禁用标签语句
        "no-labels": "error",
        // 禁用不必要的嵌套块
        "no-lone-blocks": "error",
        // 禁止在循环内的函数中出现循环体条件语句中定义的变量
        "no-loop-func": "error",
        // 禁止使用魔术数字
        "no-magic-numbers": "off",
        // 禁止出现连续的多个空格，除非是注释前或对齐对象的属性、变量定义、导入等
        "no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true,
                "exceptions": {
                    "Property": true,
                    "BinaryExpression": false,
                    "VariableDeclarator": true,
                    "ImportDeclaration": true
                }
            }
        ],
        // 禁止使用 \ 来换行字符串
        "no-multi-str": "error",
        // 禁止直接 new 构造函数，而不赋值
        "no-new": "off",
        // 禁止对 Function 对象使用 new 操作符
        "no-new-func": "error",
        // 禁止对 String，Number 和 Boolean 使用 new 操作符
        "no-new-wrappers": "error",
        // 禁止使用 0 开头的数字表示八进制数
        "no-octal": "error",
        // 禁止字符串文字中的八进制转义
        "no-octal-escape": "error",
        // 禁止对函数参数再赋值
        "no-param-reassign": "error",
        // 禁用 __proto__ 属性
        "no-proto": "error",
        // 禁止重新声明变量
        "no-redeclare": "error",
        // 禁止使用指定的对象属性
        "no-restricted-properties": "off",
        // 禁止在 return 语句中赋值
        "no-return-assign": [
            "error",
            "always"
        ],
        // 禁用不必要的 return await
        "no-return-await": "error",
        // 禁用 Script URL
        "no-script-url": "off",
        // 禁止自身赋值给自己
        "no-self-assign": "error",
        // 禁止自身比较
        "no-self-compare": "error",
        // 禁用逗号操作符
        "no-sequences": "off",
        // 禁止抛出异常字面量
        "no-throw-literal": "error",
        // 循环内必须对循环条件的变量有修改
        "no-unmodified-loop-condition": "error",
        // 禁止无用的表达式
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true,
                "allowTaggedTemplates": true
            }
        ],
        // 禁止出现没用的 label
        "no-unused-labels": "error",
        // 禁用不必要的 .call() 和 .apply()
        "no-useless-call": "error",
        // 禁止不必要的 catch 子句
        "no-useless-catch": "error",
        // 禁止没有必要的字符拼接
        "no-useless-concat": "error",
        // 禁用不必要的转义字符
        "no-useless-escape": "off",
        // 禁止多余的 return 语句
        "no-useless-return": "off",
        // 禁止使用void操作符
        "no-void": "error",
        // 禁用警告注释
        "no-warning-comments": "off",
        // 禁用 with 语句
        "no-with": "error",
        // 建议在正则表达式中使用命名捕获组
        "prefer-named-capture-group": "off",
        // 要求使用 Error 对象作为 Promise 拒绝的原因
        "prefer-promise-reject-errors": "error",
        // parseInt 要求必须有基数
        "radix": "off",
        // 禁止使用不带 await 表达式的 async 函数
        "require-await": "off",
        // 强制在 RegExp 上使用 u 标志
        "require-unicode-regexp": "off",
        // 要求将变量声明放在它们作用域的顶部
        "vars-on-top": "off",
        // 需要把立即执行的函数包裹起来
        "wrap-iife": [
            "error",
            "any",
            {
                "functionPrototypeMethods": true
            }
        ],
        // 要求或者禁止Yoda条件
        "yoda": "off"
    }
};