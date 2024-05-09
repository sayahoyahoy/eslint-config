# Eslint Config

> Opinionated but flexible ESlint config, based on @antfu/eslint-config with AHOYAHOY preferences

## 🛠️ Setup

### Installation

```bash
pnpm i -D eslint @sayahoyahoy/eslint-config
```

#### Basic use

Using the default config without arguments uses the following `@antfu/eslint-config` options as defaults:

- autodetects Vue
- autodetects Typescript
- enables ESlint Stylistic

```js
// eslint.config.js
import ahConfig from '@sayahoyahoy/eslint-config'

export default ahConfig()
```

#### Setting options and using custom rules

It is possible to add custom rules with the following configuration.

- The first item must contain options to be passed to `@antfu/eslint-config` (read more on [its docs](https://github.com/antfu/eslint-config) for possible options). **It must always be present even if left empty.**
- From the second item going on, you can add as many custom ESlint flat config objects as you need.

```js
// eslint.config.js
import ahConfig from '@sayahoyahoy/eslint-config'

export default ahConfig(
    // @antfu/eslint-config options, must be the first argument
    {
        stylistic: false,
    },
    // Addtionals flat configs start from here
    {
        rules: {
            curly: 'off',
        },
    },
)
```
