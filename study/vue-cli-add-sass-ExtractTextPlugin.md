# vue-cil add sass & ExtractTextPlugin

* 安装环境支持

```javascript
npm i node-sass --save-dev
npm i sass-loader --save-dev
```

---

* webapck.base.conf.js


```javascript
// 只展示变更部分
// add ExtractTextPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 添加plugins
plugins: [
    new ExtractTextPlugin({ // 配置提取出的样式文件
        filename: '[name].[hash].css',
    }),
],

```
---

* vue-loader.conf.js


```javascript
// 找到utils.cssLoaders
// 将extract改为true，测试和发布环境都提取公共样式

```


* utils.js

```javascript
// 找到exports.cssLoaders =

// 修改cssLoader配置
const cssLoader = {
    loader: 'css-loader',
    options: {
        minimize: true,
        sourceMap: options.sourceMap,
    },
};

// 添加sassLoader配置
const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: options.sourceMap
    },
};

// 找到const loaders = options.usePostCSS
// 修改为
const loaders = options.usePostCSS ?
    [cssLoader, sassLoader, postcssLoader] : [cssLoader, sassLoader]
```

* npm run dev



<go-back/>