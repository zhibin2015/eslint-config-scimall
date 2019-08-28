/**
 * Stylistic Issues
 */
module.exports = {
    "rules": {
        // 在数组开括号后和闭括号前强制换行
        "array-bracket-newline": "off",
        // 禁止或强制在括号内使用空格
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        // 强制数组元素间出现换行
        "array-element-newline": "off",
        // 禁止或强制在代码块中开括号前和闭括号后有空格
        "block-spacing": [
            "error",
            "always"
        ],
        // 强制在代码块中使用一致的大括号风格
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        // 要求使用骆驼拼写法
        "camelcase": "off",
        // 强制或禁止对注释的第一个字母大写
        "capitalized-comments": "off",
        // 要求或禁止末尾逗号
        "comma-dangle": "off",
        // 强制在逗号前后使用一致的空格
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        // 逗号风格
        "comma-style": [
            "error",
            "last",
        ],
        // 禁止或强制在计算属性中使用空格
        "computed-property-spacing": [
            "error",
            "never"
        ],
        // 当获取当前执行环境的上下文时，强制使用一致的命名
        "consistent-this": "off",
        // 要求或禁止文件末尾保留一行空行
        "eol-last": [
            "error",
            "never"
        ],
        // 禁止在函数标识符和其调用之间有空格
        "func-call-spacing": [
            "error",
            "never"
        ],
        // 要求函数名与赋值给它们的变量名或属性名相匹配
        "func-name-matching": [
            "error",
            "always",
            {
                "includeCommonJSModuleExports": true
            }
        ],
        // 要求或禁止使用命名的 function 表达式
        "func-names": "off",
        // 强制一致地使用 function 声明或表达式
        "func-style": "off",
        // 在函数调用的参数之间强制换行
        "function-call-argument-newline": "off",
        // 强制在函数括号内使用一致的换行
        "function-paren-newline": [
            "error",
            "multiline"
        ],
        // 禁止使用指定的标识符
        "id-blacklist": [
            "error",
            "_"
        ],
        // 强制标识符的最大和最小长度
        "id-length": [
            "error",
            {
                "min": 1,
                "max": 100
            }
        ],
        // 要求标识符匹配特定的正则表达式
        "id-match": "off",
        // 强制隐式返回的箭头函数体的位置
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
        // 强制使用一致的缩进
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "flatTernaryExpressions": true
            }
        ],
        // 强制在 JSX 属性中使用一致的单引号或双引号
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true,
                "mode": "strict"
            }
        ],
        // 强制关键字周围空格的一致
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        // 强制行注释的位置
        "line-comment-position": "off",
        // 强制使用一致的换行符风格
        "linebreak-style": [
            "error",
            "unix"
        ],
        // 强制注释周围有空行
        "lines-around-comment": "off",
        // 禁止在类成员之间出现空行
        "lines-between-class-members": "off",
        // 强制块语句的最大可嵌套深度
        "max-depth": [
            "error",
            8
        ],
        // 限制行的最大长度
        "max-len": "off",
        // 限制最大行数
        "max-lines": "off",
        // 限制函数最大行数
        "max-lines-per-function": "off",
        // 限制回调函数最大嵌套深度,可用 async await 代替
        "max-nested-callbacks": [
            "error",
            5
        ],
        // 限制函数定义中最多允许的参数数量
        "max-params": [
            "error",
            8
        ],
        // 限制函数块中的语句的最大数量
        "max-statements": "off",
        // 限制每一行中所允许的最大语句数量
        "max-statements-per-line": "off",
        // 强制对多行注释使用特定风格
        "multiline-comment-style": "off",
        // 禁止在三元操作数中间换行
        "multiline-ternary": "off",
        // 要求构造函数首字母大写
        "new-cap": [
            "error",
            {
                "newIsCap": true,
                "capIsNew": false,
                "properties": true
            }
        ],
        // 强制调用无参构造函数时带括号
        "new-parens": "error",
        // 链式调用中每个调用都有一个换行符
        "newline-per-chained-call": "off",
        // 禁止使用 Array 构造函数
        "no-array-constructor": "error",
        // 禁止使用按位操作符
        "no-bitwise": "off",
        // 禁用 continue
        "no-continue": "off",
        // 禁止使用内联注释
        "no-inline-comments": "off",
        // 禁止 if 语句作为唯一语句出现在 else 语句块中
        "no-lonely-if": "off",
        // 禁止混合使用不同的操作符
        "no-mixed-operators": "off",
        // 禁止使用 空格 和 tab 混合缩进
        "no-mixed-spaces-and-tabs": "error",
        // 禁止连续赋值
        "no-multi-assign": "error",
        // 不允许多个空行
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 3,
                "maxEOF": 1,
                "maxBOF": 1
            }
        ],
        // 禁用否定表达式
        "no-negated-condition": "off",
        // 禁止使用嵌套的三元表达式
        "no-nested-ternary": "off",
        // 禁止使用 Object 构造函数
        "no-new-object": "error",
        // 禁止使用一元操作符 ++ 和 --
        "no-plusplus": "off",
        // 禁止使用特定的语法
        "no-restricted-syntax": "off",
        // 禁用 tab
        "no-tabs": "error",
        // 禁止使用三元操作符
        "no-ternary": "off",
        // 禁止行尾空白
        "no-trailing-spaces": "error",
        // 禁止标识符中有悬空下划线
        "no-underscore-dangle": "off",
        // 禁止可以表达为更简单结构的三元操作符
        "no-unneeded-ternary": "off",
        // 禁止属性前有空白
        "no-whitespace-before-property": "error",
        // 强制单个语句的位置
        "nonblock-statement-body-position": [
            "error",
            "beside",
            {
                "overrides": {
                    "while": "below"
                }
            }
        ],
        // 强制在花括号内使用一致的换行符
        "object-curly-newline": [
            "error",
            {
                "multiline": true,
                "consistent": true
            }
        ],
        // 强制在大括号中使用一致的空格
        "object-curly-spacing": "off",
        // 强制将对象的属性放在不同的行上
        "object-property-newline": "off",
        // 强制函数中的变量在一起声明或分开声明
        "one-var": "off",
        // 要求或禁止在变量声明周围换行
        "one-var-declaration-per-line": [
            "error",
            "always"
        ],
        // 要求或禁止尽可能地简化赋值操作
        "operator-assignment": "off",
        // 强制操作符使用一致的换行符风格
        "operator-linebreak": "off",
        // 代码块首尾必须要空行
        "padded-blocks": "off",
        // 禁止在语句间填充空行
        "padding-line-between-statements": "off",
        // 使用对象扩展 ... 而不是 Object.assign
        "prefer-object-spread": "error",
        // 对象字面量属性名称使用引号
        "quote-props": "off",
        // 强制使用一致的反勾号、双引号或单引号
        "quotes": "off",
        // 结尾必须有分号
        "semi": [
            "error",
            "always",
            {
                "omitLastInOneLineBlock": true
            }
        ],
        // 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        // 分号必须写在行尾，禁止在行首出现
        "semi-style": [
            "error",
            "last"
        ],
        // 对象属性按序排列
        "sort-keys": "off",
        // 变量排序
        "sort-vars": "off",
        // 语句块之前必须有空格
        "space-before-blocks": [
            "error",
            "always"
        ],
        // 强制在 function 的左括号之前使用一致的空格
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "ignore",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        // 圆括号内的首尾禁止有空格
        "space-in-parens": [
            "error",
            "never"
        ],
        // 操作符左右必须有空格
        "space-infix-ops": [
            "error",
            {
                "int32Hint": true
            }
        ],
        // new, typeof 等后面必须有空格，++, -- 等禁止有空格
        "space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false
            }
        ],
        // 注释的斜线或 * 后必须有空格
        "spaced-comment": [
            "error",
            "always",
            {
                "line": {
                    "markers": ["/"],
                    "exceptions": ["-", "+"]
                },
                "block": {
                    "markers": ["!"],
                    "exceptions": ["*"],
                    "balanced": true
                }
            }
        ],
        // 强制在 switch 的冒号右有空格
        "switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        // 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
        "template-tag-spacing": [
            "error",
            "never"
        ],
        // 文件开头禁止有 BOM
        "unicode-bom": [
            "error",
            "never"
        ],
        // 正则表达式必须有括号包起来
        "wrap-regex": "off"
    }
};