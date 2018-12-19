---
title: 指南
---

#### This repository contains the specifications.

- [VUE编码规范](specification/vue-style-guide.md)
- [Javascript编码规范](specification/javascript-style-guide.md) <span class="std-rec">[1.3]</span>
- [Javascript编码规范 - ESNext补充篇](specification/es-next-style-guide.md) <span class="std-rec">[draft]</span>
- [Javascript编码规范 - Airbnb篇](specification/Airbnb-JavaScript-Style-Guide.md) <span class="std-rec">[official]</span>
- [HTML编码规范](specification/html-style-guide.md) <span class="std-rec">[1.2]</span>
- [CSS编码规范](specification/css-style-guide.md) <span class="std-rec">[1.2]</span>
- [Less编码规范](specification/less-code-style.md) <span class="std-rec">[1.1]</span>
- [E-JSON数据传输标准](specification/e-json.md) <span class="std-rec">[1.0]</span>
- [包结构规范](specification/package.md) <span class="std-rec">[1.1]</span>


Lint and fix tool：[FECS](http://fecs.baidu.com/)

---


文档库部署方法

```bash
npm i forever -g
npm i vuepress -g
```

start server

```bash
1. vuepress build
2. forever start server.js
```


stop server

```bash
forever stop server.js
```

文档库本地编写服务

```bash
vuepress dev
```

---

目录结构配置文件

<small><b>新增文档后，按规范添加到对应目录，然后重新vuepress build</b></small>

[.vuepress/config.js](.vuepress/config.js)

---
附：ubuntu 16 node环境安装

```bash
wget https://nodejs.org/dist/v8.11.3/node-v8.11.3-linux-x64.tar.xz
tar -xvf node-v8.11.3-linux-x64.tar.xz
[sudo] mv node-v8.11.3-linux-x64 /usr/local
[sudo] ln -s /usr/local/node-v8.11.3-linux-x64/bin/node /usr/local/bin/node 
[sudo] ln -s /usr/local/node-v8.11.3-linux-x64/bin/npm /usr/local/bin/npm 
```
