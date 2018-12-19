---
title: vue-cli2增加typescript支持
---

### vue-cli2增加typescript支持

> * <small>静态类型系统(static type system)可以辅助防止许多潜在的运行时错误，特别是随着应用程序的增长。</small>
> * <small>同时增加静态类型系统也可以增加代码的可阅读和可维护性，下面做简单介绍</small>

* <b>简单介绍[typescript](https://www.typescriptlang.org/docs/handbook/basic-types.html)语法</b>

    ```javascript
    // 1. npm i -g typescript
    // 2. create a ts file
    interface Shape {
        name: string;
        width: number;
        height: number;
        color?: string;
    }
     
    function area(shape : Shape) {
        var area = shape.width * shape.height;
        return "I'm " + shape.name + " with area " + area + " cm squared";
    }
    
    console.log( area( {name: "rectangle", width: 30} ) ); // 报错
    console.log( area( {name: "rectangle", width: '30', height: 15} ) ); // 报错
    console.log( area( {name: "rectangle", width: 30, height: 15} ) );
    console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );
    
    // 3. tsc [filename].ts
    ```
    
    <small><b>语法说明：</b></small>
    
    <small>以上定义了一个接口Shape，其中定义了几个字段</small>
    
    <small>其中color表示可以忽略不传的字段</small>
    
    <small>其中第1行console报错，是因为height为必传字段</small>
    
    <small>其中第2行console报错，是因为width为number类型</small>

* <b>准备工作</b>

    <small>1. 安装/更新至最新的webpack</small>

    ```bash
    npm i -g webpack
    ```


    <small>2. 安装vue-cli</small>

    ```bash
    npm i -g vue-cli
    ```

    <small>3. 初始化vue项目</small>

    
    ###### TIPS: 暂时不要npm install

    ```bash
    vue init webpack 【yourprojectname】
    ```
    
    <small>4. 修改package.json，增加环境依赖包</small>
    
    ```json
    // 以下标记了增加&修改部分
    // webpack 请不要使用4&4以上版本，会报错（暂时没有解决）
    {
      "dependencies": {
        "iview": "^2.14.2",
        "vuex": "^3.0.1",
        "vuex-class": "^0.3.1",
        "vue-class-component": "^6.2.0",
        "vue-property-decorator": "^6.1.0"
      },
      "devDependencies": {
        "babel-plugin-transform-decorators-legacy": "^1.3.5",
        "ts-loader": "^3.5.0",
        "tslint": "^5.10.0",
        "tslint-loader": "^3.6.0",
        "typescript": "^2.9.1",
        "node-sass": "^4.9.0",
        "sass-loader": "^7.0.3",
        "webpack": "^3.11.0",
      },
    }
    ```
    
    <small>5. 添加[tslint.json](https://palantir.github.io/tslint/rules/)</small>
    
    ```json
    // 详细规则参照：https://palantir.github.io/tslint/rules/
    {
        "extends": "tslint:recommended", // 暂时是比较标准的
        "globals": {
            "require": true
        },
        "rules": {
            "no-var-keyword": true, // 不允许使用var
            "no-consecutive-blank-lines": false, // 关闭连续空行限制
            "quotemark": [true, "single"] // script部分使用单引号规则
            "member-access": [true, "no-public"],
            "ordered-imports": false, // 关闭import按字母排序
            "no-console": false // 关闭console警告
        }
    }
    ```
    
    <small>6. [tsconfig.json](https://www.typescriptlang.org/docs/handbook/compiler-options.html)</small>
    
    ```json
    // 具体参数涵义请参考文档
    // https://www.typescriptlang.org/docs/handbook/compiler-options.html
    {
    	"compilerOptions": {
            "strict": true,
    		"allowSyntheticDefaultImports": true,
    		"lib": [
    			"dom",
    			"es5",
    			"es2015.promise"
    		],
    		"target": "es5",
    		"module": "es2015",
    		"moduleResolution": "node",
    		"isolatedModules": false,
    		"noUnusedLocals": true,
    		"allowJs": true,
    		"experimentalDecorators": true,
        	"suppressImplicitAnyIndexErrors": true
    	},
    	"include": [
    		"./src/**/*.ts"
    	]
    }
    ```
    
    <small>7. 修改.editorconfig</small>
    
    ```bash
    // 只展示修改部分（4个空格为一个缩进）
    indent_size = 4
    ```
    
    <small>9. 修改.babelrc</small>
    
    ```json
    // 只展示修改部分（添加transform-decorators-legacy）
    {
       "plugins": [
            "transform-decorators-legacy"
        ]
    }

    ```
    
    <small>8. [配置scss以及样式提取](./vue-cli-add-sass-ExtractTextPlugin.md)</small>
    
    
* <b>重要修改</b>
    
    <small>1. 修改webpack.base.conf.js</small>
    
    ```javascript
    // 修改main.js
    entry: {
        app: './src/main.ts'
    },
    
    // 修改extensions，增加.ts
    extensions: ['.js', '.vue', '.json', '.ts'],
    
    // 增加rules
    module: {
        rules: [
            ...,
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
             }
        ]
    }
    ```
    
    <small>2. src目录下增加vue-shim.d.ts文件</small>
    
    ```javascript
    declare module "*.vue" {
      import Vue from "vue";
      export default Vue;
    }
    ```
    
    <small>3. 修改src部分文件</small>
    
    ```javascript
    // src/main.js -> src/main.ts
    // src/router/index.js -> src/router/index.ts
    ```
    
* <b>vue文件调整</b>
    
    [vue-class-component说明](https://github.com/vuejs/vue-class-component)
    
    [vue-property-decorator说明](https://alligator.io/vuejs/typescript-class-components/)
    
     <small>1. App.vue</small>
    
    ```html
    <template>
        <div id="app">
            <img src="./assets/logo.png">
            <router-view/>
        </div>
    </template>
    
    <script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    
    @Component
    export default class MyComponent extends Vue {}
    </script>
    
    <style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    </style>

    ```
     <small>2. HellWorld.vue</small>
    
    ```html
    <template>
        <div>
            <input v-model="message">
            <p>msg: {{ message }}</p>
            <p>computed msg: {{ computedMsg }}</p>
            <button @click="greet">Greet</button>
        </div>
    </template>
    
    <script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    
    @Component
    export default class MyComponent extends Vue {
        // 初始数据可以直接声明为实例的属性
        message: string = 'Hello!';
    
        // computed
        get computedMsg() {
            return `computed ${this.message}`;
        }
    
        // 组件方法也可以直接声明为实例的方法
        greet(): void {
            window.alert(this.message);
        }
    }
    </script>
    ```
 
* <b>见证奇迹</b>
 
 
    ```bash
    npm install & npm run dev
    ```

* <b>关于[vuex typescipt](https://codeburst.io/vuex-and-typescript-3427ba78cfa8)</b>

* <b>示例项目</b>

```bash
git clone https://github.com/jerrywu001/vue-typescript-demo.git
```

