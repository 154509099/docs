---
title: 前端自动化测试
---

# 前端自动化测试框架比较 

> <small>选择合适单元测试和集成测试框架 开发者要做的第一件事是选择合适的框架，找到与之配合的各种库。如果框架官网上有推荐使用的库，建议开发者直接采用官方的建议，除非有特殊需求。之后要在测试框架上增减都不难。</small>

#### 下面列出了一些常见的测试工具以及它们的特性： 
* Mocha 应该是目前使用最广泛的库。和 Jasmine 不同的是，它需要和第三方库配合（通常是 Enzyme 和 Chai）才能有断言、mocks、spies 的功能。 这也意味着，Mocha 的学习曲线相对较陡，但这也说明了它可以提供更好的灵活性和可扩展性。
* Jest 是 Facebook 推荐使用的测试框架，它基于等下就会谈到的 Jasmine。Facebook 重写了大部分的功能，还加上了很多新特性。
* Jest 基于 Jasmine，那为什么不直接用 Jest 呢？ 首先 Jasmine 历史悠久，背后有一个很成熟的社区支持。另外 Angular 更推荐 Jasmine，虽然 Jest 也完美支持 Angular，而且很多开发者确实是用 Jest 来测试他们的 Angular 代码的。

1. Facebook 使用 Jest 来测试其 React 代码。 
2. Angular 2 中使用Karma作为测试框架 Jasmine 断言库。 
3. Vue 他们推荐使用 Karma。

iview、vue和element等使用的是Karma作为测试框架结合Jasmine或Mocha作为断言库。 
<br>
具体各个测试框架比较请参考下面提供的资料

前端测试框架对比(js单元测试框架对比)： https://www.cnblogs.com/lihuanqing/p/8533552.html 
<br>
展望2018年JavaScript Testing： https://zhuanlan.zhihu.com/p/32702421


# Karma自动化测试搭建

#### 安装Karma

```bash
npm install karma --save-dev
```

#### 安装使用的插件

```bash
npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev
```

#### 使用Karma初始化配置文件

```bash
karma init karma.unit.config.js
```

*  <small>按照提示操作生成默认的配置文件，需要安装Karma的webpack插件和项目环境集成。</small>
*  <small>配置文件生成在当前位置，需要把它移到单元测试的目录，在这里是 test/unit/目录下。</small>

#### 使用 Karma 集成 webpack 需要解决模块化问题
```bash
npm i -D karma-webpack
```

#### 安装Source Maps
```bash
npm i -D karma-sourcemap-loader
```

参考 https://github.com/vuejs/vue/blob/dev/test/unit/karma.base.config.js
<br>
把webpack相关配置放到karma.unit.config.js配置文件中

#### 安装karma-jasmine-matchers比较器插件
```bash
npm install karma-jasmine-matchers --save-dev
```

#### 在 package.json 文件中，自定义 test 命令
```javascript
"scripts": {
  "test": "karma start test/unit/karma.unit.config.js"
},
```

#### 可以直接使用 npm test 来执行测试：
```bash
npm test
```

Karma安装:https://karma-runner.github.io/latest/intro/installation.html
<br>
Karma配置:https://karma-runner.github.io/latest/intro/configuration.html
<br>
karma-webpack安装:https://github.com/webpack-contrib/karma-webpack
<br>
karma-jasmine-matchers安装:https://www.npmjs.com/package/jasmine-expect#asymmetric-matchers