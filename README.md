# babel-preset-oldbrowser

> Babel preset for old browsers.

## Install

```sh
$ npm install --save-dev babel-preset-oldbrowser
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["oldbrowser"]
}
```

### Via CLI

```sh
$ babel script.js --presets oldbrowser 
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["oldbrowser"]
});
```
