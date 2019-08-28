# eslint-config-scimall

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the SciMall JavaScript style guide

## Installation

```
$ npm install --save-dev eslint eslint-config-scimall
```

## Usage

Our default export contains all of our ESLint rules. once the `eslint-config-scimall` package is installed, you can use it by specifying [`scimall`](https://www.scimall.org.cn) in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "eslint-config-scimall",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Reference

* [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
* [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)


## License
MIT
