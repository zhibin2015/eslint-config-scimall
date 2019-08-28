/**
 * Node.js and CommonJS
 */
module.exports = {
    "rules": {
        // 强制返回callback函数
        "callback-return": "off",
        // 强制在模块顶部调用 require()
        "global-require": "off",
        // 强制回调错误处理
        "handle-callback-err": "error",
        // 禁用 Buffer() 构造函数
        "no-buffer-constructor": "error",
        // 禁止 require 调用与普通变量声明混合使用
        "no-mixed-requires": "off",
        // 禁止调用 require 时使用 new 操作符
        "no-new-require": "error",
        // 禁止对 __dirname 和 __filename 进行字符串连接
        "no-path-concat": "off",
        // 禁用 process.env
        "no-process-env": "off",
        // 禁用 process.exit()
        "no-process-exit": "off",
        // 禁用通过 require 加载的指定模块,用于限制指定模块不能使用
        "no-restricted-modules": "off",
        // 禁止使用同步方法
        "no-sync": "off"
    }
};