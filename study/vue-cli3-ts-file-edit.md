### vue文件分别抽取html、css、script

> * <small>项目中经常会出现.vue文件行数过多，这样的情况会造成阅读障碍，怎么解决？</small>

* <b>方法一</b>

```html
<!-- 将单文件组件修改成如下结构 -->
<template src="../path/filename.html"></template>
<script src="../path/filename.js"></script>
<style src="../path/filename.scss"></style>
```


* <b>方法二(需要ts支持)：(<small>抛弃.vue, 用.ts文件替换</small>)</b>

  1. 抽取出template部分，比如抽出至"./path/hello.hml"
  2. 抽取style部分，比如抽出至"./path/hello.scss"
  3. 抽取script部分(此时需要删除原来的hello.vue), 比如文件路径"./path/hello.ts"
  4. hello.ts说明如下：

```js
import { Component, Prop, Vue } from 'vue-property-decorator';
import './path/hello.scss'; // style 引入
declare const require: any;

@Component({
    template: require('./path/hello.html'), // 模板引入
})
export default class Hello extends Vue {
    paramName: string; //变量定义
    @Prop({
        default: '',
        type: String,
    })
    propName: string; //属性定义

    /**
     * 当前tab，选中全部
     * @param {IFileTab} tab tab数据
     * @param {MouseEvent} e MouseEvent
     */
    funcName(varName: string): void {
        console.log(varName);
    }
}

```

* <b>方法二中使用vue-cli3的时候，需要注意的点</b>
  
  1. 添加vue.config.js，添加环境支持

    ```js
    module.exports = {
        baseUrl:
            process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
        devServer: {
            port: 9000, // 项目本地服务端口
        },
        chainWebpack: (config) => { // 添加语法支持loader
            config.module
                .rule('html')
                .test(/\.html$/)
                .use('vue-html-loader')
                .loader('vue-html-loader')
                .end();
        },
        configureWebpack: { // 添加语法运行环境支持
            resolve: {
                extensions: ['*', '.js', '.jsx', 'ts', 'tsx', '.vue', '.json'],
                alias: {
                    vue$: 'vue/dist/vue.js',
                },
            },
        },
    };
    ```

    2. 可以添加.editorconfig，修改编辑器语法(比如缩进格式，charset类型)

    ```js
    root = true

    [*]
    charset = utf-8
    indent_style = space
    indent_size = 4
    end_of_line = lf
    insert_final_newline = true
    trim_trailing_whitespace = true
    ```