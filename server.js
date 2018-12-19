const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

/** 访问静态资源文件 这里是访问所有dist目录下的静态资源文件 **/
app.use(express.static(path.resolve(__dirname, './dist')));
 
app.listen(9500, function (err) {    
    if (err) {
        console.log(err);
        return;
    }
    console.log('blog server listening on port 9500');
});