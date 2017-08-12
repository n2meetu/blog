使用npm全局安装babel
```
npm install --global babel-cli
```
这时候可以在cmd或git中使用babel命令了，但是无法将es6代码转换成我们想要的es5代码，要安装 babel-preset-es2015 --save-dev 才能够转成es5
```
npm install babel-preset-es2015 --save-dev
```
我们虽然安装了这个插件，但是babel也不知道我们想要的是什么，所以我们还需要配置一下：
- 在根目录下创建 .babelrc 
- 在文件中插入如下代码
```
{
	"presets": [
    	"es2015"
    ],
    "plugins": []
}
```

我们还可以使用react转码规则，这个我不知道有什么区别，因为也没用过react
```
npm install --save-dev babel-preset-react
```
相应的，我们也要在 .babelrc 文件中配置：
```
{
	"presets": [
    	"es2015"
        "react"
    ],
    "plugins": []
}
```
ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
```
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```
也要配置
```
{
	"presets": [
    	"es2015"
        "react"
        "stage-2"
    ],
    "plugins": []
}
```
但是不知道配置es7有什么用……对于一个刚刚要配置es6编译环境的人，应该不会用到es7的语法吧...
而且我也没有选择，亲测不选也是能用的。

创建一个文件 es6.js 在文件中输入以下代码：
```
let name = 'zach'
while (true) {
    let name = 'obama'
    console.log(name)  //obama
    break
}
console.log(name)  //zach
```
虽然以前没有使用过es6，但也听说过let，基本上就是严格模式下的var，让我们转码看看会给我们转成什么呢
```
var name1 = 'zach';
while (true) {
    var _name = 'obama';
    console.log(name); //obama
    break;
}
console.log(name); //zach
```
他居然不经我们允许就擅自改变我们的代码，好气哦哈哈，不过他改对了
我们可以在我们的package.json中添加如下代码：
```
"scripts":{
    "babel": "babel es6.js -o es5.js"
}
```
在git bash或者cmd中输入 
```
npm run babel 
```
就会将我们的代码自动转到es5.js中了，另外我补充一下，因为自己之前没有package.json的文件，所以运行这行代码一直出错，如果是因为要使用这个命令才创建的package我们要这样写
```
{
  "scripts":{
      "babel": "babel es6.js -o es5.js"
  }
}
```
这是babel的一些命令:
```
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```
##### 参考资料：
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
- [babel官网](http://babeljs.cn/)