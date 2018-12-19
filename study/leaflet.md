---
title: leaflet.js文档
---

### leaflet.js文档

文档地址：[https://leafletjs.com/reference-1.3.0.html][1]

### 项目中使用到的部分

#### L.Map('m<!--dom节点-->', { <!--参数-->})： 实例化一个地图对象

::: tip <small>状态参数：</small>
 - <small> center: {describe: '地图中心位置', type: Array,}</small>
 - <small> zoom: {describe: '初始化时地图放缩的层级', type: Number,}</small>
 - <small> layers: {describe: '地图上加载的图层瓦片来源',}</small>
 - <small> minZoom: {describe: '地图放缩的最小层级', type: Number,}</small>
 - <small> maxZoom: {describe: '地图放缩的最大层级', type: Number,}</small>
 - <small> maxBounds: {describe: '将地图限制在给定的边界', type: '经纬度范围',}</small>
 - <small> crs: {describe: '使用的坐标系', type: 'CRS', defaultValue: 'L.CRS.
EPSG3857'}</small> 
:::

::: tip <small>事件:</small>
 - <samll>click点击事件</samll>
:::

::: tip <small>地图状态修改</small>
 - <small>.setView(): 单独设定地图中心位置及放缩层级</small>
 - <small>.panTo(): 将地图平移到给定的中心</small>
:::
    

---

#### L.path  是包含选项和与适量叠加层共享常量的抽象类。!!!!注意：不可以接使用。

::: tip <small>参数:</small>
 - <small>color: 描边颜色</small>
 - <small>weight: 描边的像素级别的宽度</small>
 - <small>opacity: 描边透明度</small>
 - <small>fill: 路径是否填充颜色。设置为false时，多边形和圆的填充内容不可见</small>
 - <small> fillColor: 填充颜色</small>
 - <small> fillOpacity: 填充透明度</small>
:::

::: tip <small> 事件: </small>
 - <small> click点击事件</small>
 - <small> add: 当路径被添加在地图上时触发</small>
 - <small> remove: 当路径在地图上移除时触发</small>
:::

::: tip <small> 方法: </small>
 - <small> addTo(): 将图层添加到地图上</small>
 - <small> bindPopup(): 将具有特定HTML内容的弹出框与点击路径绑定起来</small>
 - <small> openPopup(): 打开之前通过bindPopup方法与路径上指定点或未指定情况下某一点绑定的弹出框</small>
 - <small> closePopup(): 如果与路径绑定的弹出框是打开状态的，则将其关闭</small>
:::


---

#### L.icon() 自定义图标     L.divIcon({class: my-div-icon})  // 参数：html: 文本内容

::: tip <small> 参数:</small>
 - <small> iconUrl: '图标位置',</small>
 - <small> iconSize: [38, 95], <!--icon图标宽高--></small>
 - <small> className: 图标和阴影图片的自定义的类名。</small>
 :::


---

#### L.marker([x, y<!--标记的经纬度坐标-->], {icon: ''<!--自定义的icon名，或者api自带的icon名-->})    创建一个标记

::: tip <small> 参数</small>
 - <small> icon: {describe: '图标'}</small>
:::

::: tip <small> 事件</small>
 - <small> click点击事件</small>
 - <small> remove删除事件</small>
:::

::: tip <small> 方法</small>
 - <small> addTo(): 在地图上添加注记</small>
 - <small> bindPopup(): 当点击一个注记时绑定一个特定的HTML内容的弹出窗口。你也可以用Marker中的openPopup方法打开绑定的弹出窗口</small>
 - <small> openPopup(): 打开先前用bindPopup方法绑定的弹出框</small>
 - <small> closePopup(): 关闭已打开的注记的弹出框</small>
:::


---

#### L.polyline()  实例化一条线段

#### L.popup()  创建一个弹框

<p>.setLatLng([x, y])    弹框的经纬度坐标</p>
<p>.setContent('弹框内容')</p>


::: tip <small> .addTo(m) || .openOn(m)   将弹框添加到地图</small>
 - <small> addTo方法添加的弹框会按照顺序添加</small>
 - <small> openOn方法比较霸道，用了它，之前添加的Popup即使已经openPopup了，也会被收起来，然后让openOn的显示出来</small>
:::
    

---

#### L.tileLayer()  通过给定URL模板和具有选项的对象来实例化一个切片图层

::: tip <small> 参数:</small>
 - <small> minZoom: 最小级别数</small>
 - <small> maxZoom: 最大级别数</small>
 - <small> opacity: 切片图层的透明度</small>
 - <small> zIndex: 切片图层明确的叠置顺序，默认此项不会被设置</small>
::: 

::: tip <small> 方法: </small>
 - <small> addTo(): 将图层加到地图上。</small>
:::


---

文档内容

#### L.Map('m<!--dom节点-->', { <!--参数-->})： 实例化一个地图对象

##### 参数：

::: tip <small> 状态参数：</small>
 - <small> center: {describe: '地图中心位置', type: Array,}</small>
 - <small> zoom: {describe: '初始化时地图放缩的层级', type: Number,}</small>
 - <small> layers: {describe: '地图上加载的图层瓦片来源',}</small>
 - <small> minZoom: {describe: '地图放缩的最小层级', type: Number,}</small>
 - <small> maxZoom: {describe: '地图放缩的最大层级', type: Number,}</small>
 - <small> maxBounds: {describe: '将地图限制在给定的边界', type: '经纬度范围',}</small>
 - <small> crs: {describe: '使用的坐标系', type: 'CRS', defaultValue: 'L.CRS.</small>
EPSG3857'}
:::

::: tip <small> 交互参数：（移动端部分参数没写）</small>
 - <small> dragging: {describe: '地图是否可被鼠标拖动', type: Boolean, defaultValue: true}</small>
 - <small> scrollWheelZoom: {describe: '地图是否可被鼠标滚轮滚动放缩', type: Boolean, defaultValue: true}</small>
 - <small> doubleClickZoom: {describe: '地图是否可双击缩放', type: Boolean, defaultValue: true}</small>
 - <small> trackResize: {describe: '浏览器放缩时地图是否被刷新', type: Boolean, defaultValue: true}</small>
 - <small> closePopupOnClick: {describe: '点击地图消息弹出框是否被关闭', type: Boolean, defaultValue: true}</small>
:::
    
::: tip <small> 键盘参数：</small>
 - <small> keyboard: {describe: '聚焦到地图且允许用户通过键盘方向键和+/-键来漫游地图', type: Boolean, defaultValue: true}</small>
 - <small> keyboardPanOffset: {describe: '按键盘方向键时地图评议的像素值', type: Number, defaultValue: 80}</small>
 - <small> keyboardZoomOffset: {describe: '按+/-键地图放缩的层级', type: Number, defaultValue: 1}</small>
:::

::: tip <small> 控制参数</small>
 - <small> zoomControl: {describe: '地图上是否加上层级控制按钮', type: Boolean, defaultValue: true}</small>
 - <small> attributionControl: {describe: '地图上是否加上属性控制按钮', type: Boolean, defaultValue: true}</small>
:::


##### 事件：(调用: this.m.on(*, function(){})

::: tip <small> js原生事件：click, dbclick,mousedown,mouseup,mouseover,mouseout,mousemove,focus,blur,load(这些大家都知道就不介绍了)</small>
 - <small> contextmenu: 鼠标右键事件（可开发，难度系数>1,如可视化分析）</small>
 - <small> preclick: 鼠标点击之前触发。有时会在点击鼠标时，并在已存在的点击事件开始处理之前想要某件事情发生时用得到.</small>
 - <small> viewreset: 地图需要重绘内容时触发。（通常在地图缩放和载入时发生）</small>
 - <small> movestart,move,moveend: 地图窗口视图开始改变时,改变时,改变结束时触发</small>
 - <small> dragstart,drag,dragend: 开始拖动地图时，拖动地图时，停止拖动地图时触发</small>
 - <small> zoomstart,zoomend: 地图缩放开始前，缩放时触发</small>
 - <small> resize: 当地土大小调整时触发</small>
 - <small> layeradd: 当一个新的图层添加到地图上时触发.</small>
 - <small> layerremove: 当一些图层从地图上移除时触发.</small>
 - <small> baselayerchange: 当通过layer control改变基础图层时触发.</small>
 - <small> locationfound: 当地理寻址成功时触发（使用locate方法）</small>
 - <small> locationerror: 当地理寻址错误时触发（使用locate方法）</small>
 - <small> popupopen: 当弹出框打开时触发（使用openPopup方法）</small>
 - <small> popupclose: 当弹出框关闭时触发（使用closePopup方法）</small>
:::


##### 地图状态修改（方法，调用：this.m.*()）

::: tip <small> .setView(): 单独设定地图中心位置及放缩层级</small>
 - <small> .setZoom(): 单独设定地图的放缩</small>
 - <small> .zoomIn(): 通过δ放大地图的级别，默认为1</small>
 - <small> .zoomOut(): 通过δ缩小地图的级别，默认为1</small>
 - <small> .panTo(): 将地图平移到给定的中心（可开发）</small>
 - <small> .panBy(): 通过给定的像素值对地图进行平移（可开发）</small>
 - <small> .locate(): 用地理定位接口GeolocationAPI获取用户位置信息，在成功定位或定位出错产生locationerror后解除location-found事件与定位数据，且将地图视图设定到检测的确切的用户的位置（如果定位失败则回到地域视图）(可进行定位功能开发)</small>
:::

<p>实例（一般用于移动端）</p>

 ```javascript
    m.locate({setView: true,maxZoom: 16});    <!--m是承载地图的dom节点-->
    m.on('locationfound', function(e) {
        var radius = e.accuracy / 2;
        L.marker(e.latlng).addTo(m).bindPopup("你就在这个圈内");
        L.circle(e.latlng, radius).addTo(m);
    });
    m.on('locationerror', function(e) {
        console.log('定位出错=====>', e);
    });
```

<p>.remove(): 销毁映射并清除所有相关事件侦听器</p>


##### 获取地图状态参数

::: tip <small> .getCenter(): {return: '经纬度坐标', describe: '获取地图视图的地理中心'}</small>
 - <small> .getZoom(): {return: 'Number', describe: '获取地图视图的缩放层级'}</small>
 - <small> .getMinZoom(): {return: 'Number', describe: '获取地图最小缩放层级'}</small>
 - <small> .getMaxZoom(): {return: 'Number', describe: '获取地图最大缩放层级'}</small>
 - <small> .getBounds(): {return: '经纬度边界坐标', describe: '获取地图视图的经纬度边界'}</small>
:::


##### 图层控制

::: tip <small> .addLayer(): 将图层添加到地图之上</small>
 - <small> .removeLayer(): 将图层在地图上移除</small>
 - <small> .hasLayer(): 是否含有此图层</small>
 - <small> .openPopup(): 打开弹出框（确定在同一时间只有一个打开并可用）</small>
 - <small> .closePopup(): 关闭openPopup打开的弹出框。</small>
 - <small> .addControl(): 添加控制,在地图上添加控制选项。</small>
 - <small> .removeControl(): 移除控制在地图上移除控制选项。</small>
:::


##### 转换方法

::: tip <small> .latlngToLayerPoint(): {return: '返回地图图层上与地理坐标相一致的点', describe: '将经纬度添转变为图层上的点'}</small>
 - <small> .layerPointToLatLng(): {return: '给定地图上点的地理坐标系', describe: '将图层上的点转换为经纬度点'}</small>
 - <small> .LatLngToContainerPoint(): {return: '返回与给定地理坐标系相符的地图容器的点', describe: '经纬度点到容器点'}</small>
 - <small> .containerPointToLatLng(): {return: '返回给定地理容器点的地理坐标', describe: '容器点转换为经纬度点'}</small>
 - <small> .project(): {return: '将地理坐标投影到指定缩放级别的像素坐标系中', describe: '投影'}</small>
 - <small> .unproject(): {return: '将像素坐标系投影到指定缩放级别的地理坐标系中。', describe: '反投影'}</small>
 - <small> .mouseEventToContainerPoint(): {return: '鼠标点击事件到地图容器点', describe: '返回鼠标点击事件对象的像素坐标(与地图左上角相关)'}</small>
 - <small> .mouseEventToLayerPoint(): {return: '返回鼠标点击事件对象的像素坐标(与地图图层相关)', describe: '鼠标点击事件到地图容器点'}</small>
 - <small> mouseEventToLatLng(): {return: '返回鼠标点击事件对象的地理坐标', describe: '鼠标点击事件到经纬度点'}。</small>
:::


##### 其他方法

::: tip <small> .getContainer(): {return: '返回地图容器对象', describe: '获取容器'}</small>
 - <small> .getPanes(): {return: '返回不同地图对象的边框(叠加渲染)', describe: '获取地图边框'}</small>
:::


##### Map Panes（地图窗口）

::: tip <small> mapPane（地图窗口）：包含其他地图窗口的窗口。</small>
 - <small> tilePane（切片窗口）：切片图层的窗口。</small>
 - <small> objectsPane（对象窗口）：包含除切片窗口以外所有窗口的窗口。</small>
 - <small> shadowPane（隐含窗口）：用来隐藏图层的窗口（如标注的隐藏）。</small>
 - <small> overlayPane（图层窗口）：这线段和多边形一类图层的窗口。</small>
 - <small> markerPane（标注窗口）：标注图标的窗口。</small>
 - <small> popupPane（弹出窗口）：弹出的窗口。</small>
:::


---

#### L.layerGroup()  图层组

::: tip <small> .addTo()：将图组添加到地图上。</small>
 - <small> .addLayer()：将给定的图层添加到组中。</small>
 - <small> .removeLayer()：将给定的图层从组中移除：</small>
 - <small> .clearLayer()：将组中的图层清空。</small>
 - <small> .eachLayer()：遍历组中的图层，需选择一个符合情况的迭代函数。</small>
:::


---

#### L.featureGroup() 图层组（比layerGroup多了鼠标事件及共享弹窗方法）

<!--具有L.layerGroup()的所有方法-->
::: tip <small> .bindPopup()：在组中任意具有bindPopup方法的图层上绑定一个具有具体HTML内容的弹出框。</small>
 - <small> .getBounds()：返回要素组的经纬度边界（通过他子图层的边界和坐标获得）。</small>
 - <small> .setStyle()：设置组中具有setStyle方法的图层的路径选项。</small>
 - <small> .bringToFront()：将图组置于顶层。</small>
 - <small> .bringToBack()：将图组置于底层。</small>
:::

::: tip <small> 事件</small>
 - <small> js原生事件：click, dbclick,mouseover,mouseout,mousemove(这些大家都知道就不介绍了)</small>
 - <small> contextmenu: 鼠标右键事件（可开发，难度系数>1,如可视化分析）</small>
 - <small> layeradd: 当一个新的图层添加到地图上时触发.</small>
 - <small> layerremove: 当一些图层从地图上移除时触发.</small>
:::   

---

<!--标记-->
#### L.marker([x, y<!--标记的经纬度坐标-->], {icon: ''<!--自定义的icon名，或者api自带的icon名-->})    创建一个标记

::: tip <small> 参数</small>
 - <small> icon: {describe: '图标'}</small>
 - <small> clickable: {describe: '是否可点击', type: Boolean}</small>
 - <small> draggable: {describe: '是否可拖动', type: Boolean}</small>
 - <small> title: {describe: '标题', type: String}</small>
 - <small> zIndexOffset: 默认情况下，注记图片的叠置顺序由纬度自动设置。如果你想将某一注记放置于其他之上可用这个选项，设置一个较大的值即可，比如1000（或是相反地设置一个较大的负值）</small>
 - <small> opacity: {describe: '透明度', type: Number}</small>
 - <small> riseOnHover: {describe: '凸显(如果此值为true，注记会显示与其他注记之上)', type: Boolean}</small>
 - <small> riseOffset: {describe: '凸显补偿(riseOnHover要素凸显时高度的补偿值)', type: Boolean}</small>
:::

::: tip <small> 事件</small>
 - <small> js原生事件：click, dbclick,mousedown,mouseover,mouseout(这些大家都知道就不介绍了)</small>
 - <small> contextmenu(): 鼠标右键事件</small>
 - <small> dragstrat(拖动开始): 当用户拖动注记时触发。</small>
 - <small> drag(拖动): 当用户拖动注记时不断触发。</small>
 - <small> dragend(拖动结束): 当用户停止拖动注记时触发。</small>
 - <small> move(移动): 当注记通过定义经纬度而移动时触发。新的坐标包含事件参数。</small>
 - <small> remove(删除): 当注记在地图上被删除时触发。</small>
:::

::: tip <small> 方法</small>
 - <small> addTo(): 在地图上添加注记</small>
 - <small> getLatLng(): 返回当前注记的地理位置</small>
 - <small> setLatLng():将注记位置更改到给定点</small>
 - <small> setIcon(): 更改注记的图标</small>
 - <small> setZIndexOffset(): 更改注记的zIndex offset</small>
 - <small> setOpacity(): 更改注记的透明度</small>
 - <small> update(): 更新注记的位置，在直接更改经纬度对象的坐标时比较有用</small>
 - <small> bindPopup(): 当点击一个注记时绑定一个特定的HTML内容的弹出窗口。你也可以用Marker中的openPopup方法打开绑定的弹出窗口</small>
 - <small> unbindPopup(): 将先前用bindPopup方法绑定的注记取消</small>
 - <small> openPopup(): 打开先前用bindPopup方法绑定的弹出框</small>
 - <small> closePopup(): 关闭已打开的注记的弹出框</small>
:::


---

<!--圆形-->
#### L.circle([x, y<!--圆中心点位置-->],{color: '描边颜色', fillColor: '填充颜色', fillOpacity: '填充颜色的透明度', radius: '圆半径'})    创建一个圆形

::: tip <small> .getLatLng()：返回圆当前的地理位置。</small>
 - <small> .getRadius()：返回圆的半径，以米为单位。</small>
 - <small> .setLatLng()：将圆放置到一个新的位置。</small>
 - <small> .setRadius()：设置圆的半径，以米为单位。</small>
:::


---

#### L.circleMarker() 创建一个特定半径的圆

<p><small>.setLatLng()：将圆注记放置于一个新的位置。</small></p>
<p><small>.setRadius()：设置圆注记的半径，以像素为单位。</small></p>


---

<!--多边形-->
#### L.polygon(data, {color: '描边颜色', fillColor: '填充颜色', fillOpacity: '填充颜色的透明度'})    创建一个多边形

<p><small> data: 经纬度坐标形成的数组</small></p>

---

#### L.multiPolygon() 创建多个多边形

---

#### L.rectangle() 创建一个矩形
<p><small>.setBounds()：根据传递的边界重绘矩形。</small></p>


---

<!--弹框-->
#### marker.bindPopup('弹框内容')<!--marker代表被绑定的对象-->

<p><small> .openPopup()自动显示弹框</small></p>


---

#### L.popup()  创建一个弹框

<p><small>.setLatLng([x, y])    弹框的经纬度坐标</small></p>
<p><small>.setContent('弹框内容')</small></p>

::: tip <small> .addTo(m) || .openOn(m)   将弹框添加到地图</small>
 - <small> addTo方法添加的弹框会按照顺序添加</small>
 - <small> openOn方法比较霸道，用了它，之前添加的Popup即使已经openPopup了，也会被收起来，然后让openOn的显示出来</small>
:::

::: tip <small> 参数</small>
 - <small> maxWidth(最大宽度): 弹出框的最大宽度。</small>
 - <small> minWidth(最小宽度): 弹出框的最小宽度。</small>
 - <small> maxHeight(最大高度): 设置后，如果内容超过弹出窗口的给定高度则产生一个可以滚动的容器。</small>
 - <small> autoPan(自动平移): 如果你不想地图自动平移来适应打开的弹出框，就设置其为false。</small>
 - <small> closeButton(关闭按钮): 控制弹出窗口中出现的关闭按钮。</small>
 - <small> offset(补偿值): 弹出窗口位置的补偿值。在同一图层中打开弹出窗口时对于控制锚点比较有用。</small>
 - <small> autoPanPadding(自动平移填补): 在地图视图自动平移产生后弹出窗口和地图视图之间的边缘。</small>
 - <small> zoomAnimation: 决定是否在所在级别上弹出窗口。如果你在弹出窗口中有flash内容的最好将其设置为不可用。</small>
:::


---
<!--线段-->
#### L.polyline()  实例化一条线段

<p><small>noClip: 不允许线段裁剪。(参数)</small></p>

::: tip <small> 方法：</small>
 - <small> .addLatLng(): 向线段添加一个点。</small>
 - <small> .setLatLngs(): 用所给的地理点的数组替代线段上的点。</small>
 - <small> .getLatLngs(): 返回路径上的点组成的数组。</small>
 - <small> .spliceLatLngs(): 允许添加、移除和更改线段上的点。同Array#splice的语法一致。返回移除点组成的数组。</small>
 - <small> .getBounds(): 返回线段的经纬度边界。</small>
:::

---

#### L.multiPolygon()  实例化多条线段


---

#### L.tileLayer()  通过给定URL模板和具有选项的对象来实例化一个切片图层

::: tip <small> 参数:</small>
 - <small> minZoom: 最小级别数</small>
 - <small> maxZoom: 最大级别数</small>
 - <small> tileSize: 切片尺寸（宽度和高度的像素值，假设切片是正方形的）</small>
 - <small> errorTileUrl: 图片的URL给出加载错误的位置</small>
 - <small> attribution: 用来进行属性控制的字符串，描述了图层数据</small>
 - <small> zoomOffset: 用此值来补偿URL中地图的缩放级别</small>
 - <small> zoomReverse: 如果此项为true，URL中的缩放级别会被反转（用最大到最小缩放级别来替代缩放级别）</small>
 - <small> opacity: 切片图层的透明度</small>
 - <small> zIndex: 切片图层明确的叠置顺序，默认此项不会被设置</small>
:::

::: tip <small> 事件:</small>
 - <small> loading: 当切片图层开始加载切片时触发。</small>
 - <small> load: 当切片图层加载完可见切片后触发。</small>
 - <small> tileload: 在加载切片时触发。</small>
 - <small> tileunload: 在切片被移除时触发（比如打开了unloadInvisibleTiles）。</small>
:::

::: tip <small> 方法: </small>
 - <small> addTo(): 将图层加到地图上。</small>
 - <small> bringToFront(): 将此切片图层放到所有切片图层之上。</small>
 - <small> bringToBack(): 将此切片图层放到所有切片图层之下。</small>
 - <small> setOpacity(): 改变切片图层的透明度。</small>
 - <small> setZIndex(): 设置切片图层的叠放顺序。</small>
 - <small> redraw(): 清除所有的切片并重新向服务端申请他们。</small>
 - <small> setUrl(): 更新图层的URL模板并重绘他们。</small>
:::


---

#### L.tileLayer.WMS()    给定一个基本的WMS服务的URL和WMS参数或选项对象来实例化一个WMS切片图层对象
#### L.tileLayer.Canvas()   通过一个具有选项的对象来实例化一个切片图层画布对象
#### L.imageOverlay()   通过给定图像的URL和相关的地理范围来实例化一个图像叠加层对象


---

#### L.latLng()  通过给定的经纬度创建表示地理点的对象

::: tip <small> 参数</small>
 - <small> lat: '纬度'</small>
 - <small> lng: '经度'</small>
:::

::: tip <small> 方法</small>
 - <small> .distanceTo(): 返回到通过半正矢公式计算的经纬度的距离（用米表示）</small>
 - <small> .equals(): 如果给定的经纬度在相同的位置（具有较小的容差）则返回true</small>
 - <small> .toString(): 返回点的描述信息（用来调试用）</small>
 - <small> .wrap(): 返回在经度上left和right边界覆盖范围内（默认为0180到180）的心的经纬度对象</small>
:::


---

#### L.path  是包含选项和与适量叠加层共享常量的抽象类。!!!!注意：不可以接使用。

::: tip <small> 参数:</small>
 - <small> stroke: 路径是否描边。设置为false时，多边形和圆的边界将不可见</small>
 - <small> color: 描边颜色</small>
 - <small> weight: 描边的像素级别的宽度</small>
 - <small> opacity: 描边透明度</small>
 - <small> fill: 路径是否填充颜色。设置为false时，多边形和圆的填充内容不可见</small>
 - <small> fillColor: 填充颜色</small>
 - <small> fillOpacity: 填充透明度</small>
 - <small> clickable: 如果此项为false，则矢量不产生鼠标事件并表现为底图的一部分</small>
:::

::: tip <small> 事件: </small>
 - <small> js原生事件：click, dbclick,mousedown,mouseover,mouseout(这些大家都知道就不介绍了)</small>
 - <small> contextmenu: 鼠标右键事件</small>
 - <small> add: 当路径被添加在地图上时触发</small>
 - <small> remove: 当路径在地图上移除时触发</small>
:::

::: tip <small> 方法: </small>
 - <small> addTo(): 将图层添加到地图上</small>
 - <small> bindPopup(): 将具有特定HTML内容的弹出框与点击路径绑定起来</small>
 - <small> unbindPopup(): 将之前的弹出框绑定解除</small>
 - <small> openPopup(): 打开之前通过bindPopup方法与路径上指定点或未指定情况下某一点绑定的弹出框</small>
 - <small> closePopup(): 如果与路径绑定的弹出框是打开状态的，则将其关闭</small>
 - <small> setStyle(): 更改给予对象选项对象的路径的表现形式</small>
 - <small> getBounds(): 返回路径的经纬度绑定信息</small>
 - <small> bringToFront(): 将此层移至所以路径层的最上层</small>
 - <small> bringToBack(): 将此层移至所以路径层的最底层</small>
 - <small> redraw(): 重绘图层。在更改了路径的坐标时比较有用</small>
:::

---

#### L.icon() 自定义图标       L.divIcon({class: my-div-icon})  // 参数：html: 文本内容

::: tip <small> 参数:</small>
 - <small> iconUrl: '图标位置',</small>
 - <small> shadowUrl: '阴影位置',</small>
 - <small> iconSize: [38, 95], <!--icon图标宽高--></small>
 - <small> shadowSize: [50, 64], <!--阴影图标宽高--></small>
 - <small> iconAnchor: [22, 94], <!--图标提示的坐标--></small>
 - <small> shadowAnchor: [23, 93], <!--阴影的提示坐标（如果没有指定则与iconAnchor相同）--></small>
 - <small> popupAnchor: [23, 92], <!--与图标锚相关的打开弹出框的点的坐标(iconAnchor)--></small>
 - <small> className: 图标和阴影图片的自定义的类名。</small>
:::

::: tip <small> .extend({options:{<!--图标的共同参数-->}}) <!--方法--></small>
 - <small> 例：</small>
 - <small> let myIcon = L.icon.extend({options{}})</small>
 - <small> let redIcon = new myIcon({iconUrl: '图标地址'})</small>
:::
    

---

#### L.control() 创造一个控制

::: tip <small> 参数：</small>
 - <small> position: '控制初始的位置（topleft:左上角;topright:右上角;bottomleft:左下角;bottomright:右下角;）'   <!--以地图为标准--></small>
:::

::: tip <small> 方法：</small>
 - <small> .setPosition(): 设置控制的位置。</small>
 - <small> .getPosition0(): 返回控制的当前位置。</small>
 - <small> .addTo(): 将控制添加到地图上。</small>
 - <small> .removeFrom(): 将控制从地图上移除。</small>
:::

---

#### L.control.zoom() 放缩控制

<p><small> position: '控制的位置'</small></p>


---

#### L.control.attribution() 属性控制

<p><small> position: '控制的位置'</small></p>
<p><small> prefix: '控制前的文本内容'</small></p>

::: tip <small> 方法：</small>
 - <small> setPrefix(): 在属性之前设置文本。</small>
 - <small> addAttribution(): 添加属性文本。</small>
 - <small> removeAttribution(): 移除属性文本。</small>
:::


---

#### L.version 显示当前使用的leaflet版本


---

### leaflet地图转换百度地图坐标

[http://tiven.wang/articles/use-baidu-map-provider-in-leafletjs/][2]


---

### movingmarker 轨迹播放事件

::: tip <small> 目前是直接引用js文件来进行操作</small>

[https://github.com/ewoken/Leaflet.MovingMarker][3]


<small> 注：</small>
    <p><small> 1.所有的参数写法： ('', {'参数': '参数值'})</small></p>
    <p><small> 2.所有的事件写法： .on('事件名', () => {})</small></p>
    <p><small> 3.所有的方法写法： .方法名()</small></p>
 :::
    

---

### 相关例子将稍后上传至Gitlab：leaflet项目中


  [1]: https://leafletjs.com/reference-1.3.0.html
  [2]: http://tiven.wang/articles/use-baidu-map-provider-in-leafletjs/
  [3]: https://github.com/ewoken/Leaflet.MovingMarker