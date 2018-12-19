# 关于代码重构的总结

#### 1. 单纯变量的初始化，可以放在created阶段进行.
#### 2. 变量的重复多次引用，可以先用一个变量保存.


```javascript
ajax.dataManager.intersectModelEntity().then((response) => {
    if (response.data.success) {
        const data = response.data;
        for (let i = 0; i < data.result.length; i++) {
            const obj = {
                label: data.result[i].moduleName + ' - ' + data.result[i].entityName,
                cid: data.result[i].entityType,
                moduleId: data.result[i].moduleId,
                properties: data.result[i].properties
            };
            this.dataSource.push(obj);
        }
    } else {
        this.$message({
            type: 'error',
            message: response.data.message
        })
    }
});
```



> 以上涉及到几点建议

- 字典变量的重复引用，例如“data.result”，可以先缓存到变量（scss文件也可以这样调整）
- for循环的改造，将长度缓存
- 不应该直接循环data.result，循环之前最好判断是否为null以及长度是否 > 0
- 直接push数据即可，没必要先保存到变量obj中

#### 建议修改成

```javascript
ajax.dataManager.intersectModelEntity().then((response) => {
    let data = response.data;
    if (data.success) {
        const result = data.result;
        if (result && result.length) {
            let item = null;
            for (let i = 0, len = result.length; i < len; i++) {
                item = result[i];
                this.dataSource.push({
                    label: item.moduleName + ' - ' + item.entityName,
                    cid: item.entityType,
                    moduleId: item.moduleId,
                    properties: item.properties
                });
            } 
        }                
    } else {
        this.$message({
            type: 'error',
            message: data.message
        });
    }
});
```

---

```javascript
handleCheckAllChange(event) {
    this.checkedCities = event.target.checked ? this.cities : [];
},

//类似这样的代码，建议加非空判断
handleCheckAllChange(event) {
    this.checkedCities = event && event.target.checked ? this.cities : [];
},
```

---

```javascript
if (getStepData[2].station === 'disactive') {} else {...}
//建议修改成
if (getStepData[2].station !== 'disactive') {...}
```

---

```javascript
len = citiesAny.length;
if (len === 0) {
    this.entityShow = false;
} else {
    this.entityShow = true;
}

//建议改成
len = citiesAny.length;
this.entityShow = !!len;
```

---

```javascript
//函数建议用以下风格的注释

 /**
 * 查看明细时弹出明细页面
 * @param {string} entityId 实体id
 */
detail(entityId) {....}
```

---

```javascript
//dom事件绑定需要卸载
beforeDestroy() {
    let $el = $(this.$el);
    $el.off('click', '.resultCancle');
    $el.off('keydown', '.enter-name');
    $el.off('click', '.resultRename');
},
```

---

```javascript
let dom = $(this)

//建议改成
let $dom = $(this)
```

```javascript
this.checkedCities === ''
//建议改成
!this.checkedCities
```

```javascript
this.$message({
    type: 'error',
    message: msg
});

//建议改成
this.$message.error(msg);
```


---

```javascript
ajax.workbench.creatCharts({...}).then((response) => {
    ajax.analyticGraph.addGraphData(data).then((response) => {
    ...
//建议改成
ajax.workbench.creatCharts({...}).then((response) => {
    ajax.analyticGraph.addGraphData(data).then((rsp) => {
    ...
```

---

```javascript
const mappedData = [1,2,3,4,5,6];
for (let i = 0; i < mappedData.length; i++) {
    if (i === 1) {
        continue;
    }
	console.log(mappedData[i]);
}

//建议改成
const mappedData = [1,2,3,4,5,6];
for (let i = 0; i < mappedData.length; i++) {
    if (i !== 1) {
        console.log(mappedData[i]);
    }
}
```

```javascript
if (selFileHeader[m.fileHeader]) {
    this.showMessage(`列[${m.fileHeader}]重复`);
    return;
} else {
    selFileHeader[m.fileHeader] = true;
}
headerMap[m.modelHeader] = m.fileHeader;

//建议改成
if (selFileHeader[m.fileHeader]) {
    this.showMessage(`列[${m.fileHeader}]重复`);
    return;
}
selFileHeader[m.fileHeader] = true;
headerMap[m.modelHeader] = m.fileHeader;
```

---

```javascript
if (flag === 0) {
    return '私有';
} else {
    return '公有';
}

//建议改成
let result = '私有';
if (flag !== 0) {
    result = '公有';
}
return result;
```

#### 3. 尽量少用长篇幅的if判断，可以的话，建议换成switch语句.




