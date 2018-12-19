### 关于webpack tree-shaking

> <small>tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。</small>
> <small>使用规范请参考：[https://webpack.docschina.org/guides/tree-shaking/](https://webpack.docschina.org/guides/tree-shaking/)</small>

* 关于lodash使用tree-shaking不生效的解决方案
- <small>项目中有时会发现引入lodash后webpack并不能做到tree-shaking，打包文件体积<b>并不能相应减少</b></small>

错误引用方式：

```javascript
import _ from 'lodash';
console.log(_.chunk([1, 2, 3, 4, 5, 6], 2));
```

```javascript
import { chunk } from 'lodash';
console.log(chunk([1, 2, 3, 4, 5, 6], 2));
```

解决方案：

 - <small>方案1</small>

```javascript
import chunk from 'lodash/chunk';
console.log(chunk([1, 2, 3, 4, 5, 6], 2));
```

- <small>方案2</small>

```javascript
// step1:
npm i babel-plugin-lodash --save-dev

// step2:
// open .babelrc，add "lodash"
// "plugins": ["lodash"]

// step3:
// 任意一种引入方式都可以tree-shaking

```

进一步优化：

```javascript
// install package
npm i lodash-webpack-plugin --save-dev

// webpack.base.conf.js
// add something
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

plugins: [
    new LodashModuleReplacementPlugin(),
],
```






