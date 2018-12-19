---
title: leaflet-plugin
---
### leaflet 以及 leaflet-plugin

#### leaflet.js

::: tip <small> leaflet生成地图步骤：</small>
- <small> 引入leaflet.js与leaflet.css </small>
- <small> 设置leaflet地图参数 </small>
```javascript
    var opt = {
        center: [51.508, -1.08],   <!-- [纬度，经度] -->
        minZoom: 3,   <!-- 地图最小缩放层级 -->
        maxZoom: 9,   <!-- 地图最大缩放层级 -->
        zoom: 8,      <!-- 地图当前层级 -->
        doubleClickZoom: false,     <!-- 地图是否可双击缩放 -->
        zoomControl: false     <!-- 是否增加地图层级放缩控件 -->
    };
    var map = L.map('mapid', opt);    <!-- 根据参数生成地图 -->
```
- <small> 加载地图瓦片 </small>
```javascript
	<!-- 方式1：L.tileLayer() -->
	var url = '获取地图瓦片的路径'
    L.tileLayer(url, {
        attribution: '地图右下角标注'
    }).addTo(map)

    <!-- 方式2：L.tileLayer.wms() -->
    var url = 'http://10.0.5.232:8080/hgisserver/gwc/service/wms'
    L.tileLayer.wms(url, {
        layers: 'test:kenya', <!-- 图层名称 -->
        format: 'image/png',  <!-- 切片的格式 -->
    }).addTo(map);
```
:::

::: tip <small> 常见的功能 </small>
- <small> 在地图上加标注 </small>
```javascript
	var latlng = [112.201, -1.0293]; <!-- marker生成的经纬度 -->
	L.marker(latlng, {
		icon: icon, <!-- 自定义图标,不设置则生成leaflet自带图标 -->
	}).addTo(map);
```
- <small> 定义自己的图标 </small>
```javascript
	<!-- 添加纯图标 -->
	var icon = L.icon({
		iconUrl: '/static/images/biaoji2.png', <!-- 设定的图标位置 -->
        iconSize: [30, 30], <!-- 设定的图标大小 -->
	})
	<!-- 添加带文本的图标 -->
	var icon = L.divIcon({
		iconSize: [23, 30], <!-- 设定的图标大小 -->
        className: 'icon-class', <!-- 自定义图标的类名 -->
        html: '12', <!-- 标签内要添加的文本 -->
	})
```
- <small> 生成一个固定大小，固定圆心的圆 </small>
```javascript
	var latlng = [112.201, -1.0293]; <!-- 圆心的经纬度 -->
	L.circle(latlng, {
		color: 'rgb(51, 136, 255)', <!-- 圆的线条颜色 -->
	    fillColor: 'rgb(51, 136, 255)', <!-- 圆内部填充的颜色 -->
	    fillOpacity: 0.2, <!-- 圆内部的透明度 -->
	    radius: 5000, <!-- 圆的半径 -->
	}).addTo(map)
```
- <small> 画一条线(纯线条,需要加标注的自行生成marker) </small>
```javascript
	var latlngs = [
		[112.201, -1.0293],
		[111.201, -1.0223],
		[112.801, -3.0293],
		[111.401, -1.3293],
		[113.001, -2.0293],
	]; <!-- 线上的所有经纬度数组,最少要两组 -->
	L.polyline(latlngs, {
		color: color, <!-- 线条颜色 -->
        opacity: 0.6, <!-- 线条透明度 -->
        weight: 6, <!-- 线条宽度（像素） -->
	}).addTo(map);
```
:::

#### leaflet-plugin

::: tip <small> leaflet.editTable.js(作图插件) </small>
[editable的例子][1]
<br/>
[https://github.com/Leaflet/Path.Drag.js][2]
<br/>
[editable的api文档][3]
- <small> 引入后在实例化地图时，参数加上editable: true </small>
```javascript
	var opt = {
        center: [51.508, -1.08],   <!-- [纬度，经度] -->
        minZoom: 3,   <!-- 地图最小缩放层级 -->
        maxZoom: 9,   <!-- 地图最大缩放层级 -->
        zoom: 8,      <!-- 地图当前层级 -->
        doubleClickZoom: false,     <!-- 地图是否可双击缩放 -->
        zoomControl: false,     <!-- 是否增加地图层级放缩控件 -->
        editable: true, <!-- 是否启用作图插件 -->
    };
    var map = L.map('mapid', opt);    <!-- 根据参数生成地图 -->
```
- <small> 开始编辑现有的功能 .enableEdit() </small>
<br/> <small>例：</small>
```javascript
	var polyline =
	L.polyline([[43.1, 1.2], [43.2, 1.3],[43.3, 1.2]]).addTo(map); <!-- 画条线 -->
	polyline.enableEdit(); <!-- 开启线条编辑功能 -->
```
- <small> 添加一个圆或线条或多边形等：map.editTools </small>
<br/> <small>例：</small>
```javascript
	map.editTools.startCircle()   <!-- 添加一个圆 -->
	map.editTools.startRectangle ()   <!-- 添加一个长方形 -->
	map.editTools.startPolygon ()   <!-- 添加一个多边形 -->
	map.editTools.startPolyline ()   <!-- 添加一线条 -->
	map.editTools.startMarker  ()   <!-- 添加一个标记 -->
	map.editTools.stopDrawing()   <!-- 停止所有正在进行的绘画 -->
```
- <small> 顶点事件 </small>
<br/> <small> 详见[api文档][3] </small>
<br/> <small> 例 </small>
```javascript
	var circle = map.editTools.startCircle();
	<!-- onDragendEvent为触发的函数 -->
	<!-- editable:vertex:dragend： 在用户拖动顶点后触发 -->
	<!-- editable:dragend： 在用户拖动路径后触发(即改变绘图的位置) -->
	circle.on('editable:vertex:dragend', onDragendEvent);
    circle.on('editable:dragend', onDragendEvent);
```
<br/> <small> 其余功能详见[api文档][3] </small>
:::


::: tip <small> leaflet.markercluster-src.js(聚合插件) </small>
[聚合文档及实例][4]
- <small> 实例化一个聚合图层：参数设置 </small>
```javascript
	var markers = L.markerClusterGroup({
    	animateAddingMarkers: true, <!-- 设置为false可以将第一次设置的图标保留 -->
    	maxClusterRadius: 80,    <!-- 设置集群圈，默认距离80像素内的标记会聚合在一起 -->
    	spiderLegPolylineOptions: {     <!-- 螺旋线条颜色 -->
    		color: '#e60f84',
    		opacity: 0.3
    	}
    });
```
- <small> 在地图上实现功能 </small>
```javascript
	var marker = L.marker(latlng, {
		icon: icon
	});
	markers.addLayer(marker);  <!-- 将需要聚合的图标放在同一个图层上 -->
    map.addLayer(markers); <!-- 在map上添加这个图层 -->
```
:::


::: tip <small> leaflet.movingMarker.js(轨迹运动插件) </small>
[轨迹运动][5]
- <small> 实例化一个运动的轨迹 </small>
```javascript
	var latlngs = [
		[lat, lng],
		[lat, lng],
		[lat, lng]
	]  <!-- 最少两个 -->
	var times = [2000, 2000]; <!-- 两点间运行的时间长 -->
	var movingMarker = L.Marker.movingMarker(latlngs, times, {
		icon: icon
	}).addTo(map)
```
- <small> 相应的函数 </small>
```javascript
	movingMarker.start(); <!-- 开始轨迹运动 -->
	movingMarker.stop(); <!-- 停止轨迹运动，再次开始的时候从端点开始 -->
	movingMarker.pause(); <!-- 暂停标记, 再次开始的时候从暂停的地方继续运动 -->
	movingMarker.resume(); <!-- 继续轨迹运动 -->
```
:::

[1]: https://github.com/Leaflet/Leaflet.Editable
[2]: https://github.com/Leaflet/Path.Drag.js
[3]: https://leaflet.github.io/Leaflet.Editable/doc/api.html
[4]: https://github.com/Leaflet/Leaflet.markercluster
[5]: https://github.com/ewoken/Leaflet.MovingMarker