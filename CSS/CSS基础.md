#### CSS的全称是什么?
CSS全称是 Cascading Style Sheets, 层叠样式表

#### CSS有几种引入方式? link 和@import 有什么区别?
**内联样式**:在标签中添加style属性，应该杜绝的写法。无法写元素的伪类。
**内部样式**：在HTML页面中插入style标签，在标签中书写CSS。
**外部样式**：在HTML的head标签内部添加link标签，引入外部CSS文件
**@import和link的区别**：
- @import 为CSS服务；link是为当前的页服务
- link属于HTML标签，而@import完全是CSS提供的一种方式。
- 加载顺序有差别。link引用的CSS会同时被加载，而@import引用的CSS 会等到页面全部被下载完再被加载。
- @import是老浏览器不支持，只有在IE5以上的才能识别，而link标签无此问题。

#### 以下这几种文件路径分别用在什么地方，代表什么意思?
```
.css/a.css    //错误的路径./是相对路径
./css/a.css  //当前目录的css文件夹下的a.css文件
b.css   //当前目录的b.css文件
../imgs/a.png  //上层目录的imgs文件夹中的a.png文件
/Users/hunger/project/css/a.css  //绝对路径，一般用于表示本地资源的地址
/static/css/a.css  //绝对路径，表示网站根目录中static文件夹中css文件夹中的a.css文件
http://cdn.jirengu.com/kejian1/8-1.png  //网络路径，代表互联网上的资源
```

#### 如果我想在js.jirengu.com上展示一个图片，需要怎么操作?
使用img标签并将src的属性设置为你想要插入图片的网络地址，如
`![](http://upload-images.jianshu.io/upload_images/5290967-b1d223c52f1918f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)`
![baidulogo](http://upload-images.jianshu.io/upload_images/5290967-b1d223c52f1918f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 列出5条以上html和 css 的书写规范
1.使用 4 个空格做为一个缩进层级，不允许使用 2 个空格 或 tab 字符。
2.选择器 与 { 之间必须包含空格。
3.属性名 与之后的 : 之间不允许包含空格， : 与 属性值 之间必须包含空格。
4.当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。
5.">、+、~ "选择器的两边各保留一个空格。
6.属性定义必须另起一行。
7.属性定义后必须以分号结尾。
8.列表型属性值 书写在单行时，, 后必须跟一个空格。
9.每行不得超过 120 个字符，除非单行不可分割。
10.统一使用小写。
11.id和class使用有意义的单词，单词之间用“-”连接。
12.属性值是0的省略单位。

#### 截图介绍 chrome 开发者工具的功能区
Element查看元素，包括元素的属性和样式，只要在HTML页面中存在的都显示。当鼠标移动到这个元素的时候右侧会出现这个元素的CSS样式还有盒模型。可以按住Ctrl随意更改元素在dom文档中的位置。
![Element](http://upload-images.jianshu.io/upload_images/5290967-2427c72bde0184bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这是javascript的控制台，可以显示console.log()输出的数据。
![Console](http://upload-images.jianshu.io/upload_images/5290967-aa5ca4df50731b60.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
Source主要用于查看网页的源代码，在Source中也可以使用断点调试。在断点调试中可以更加清晰的观察程序每一步每一个变量的值。
![Source](http://upload-images.jianshu.io/upload_images/5290967-4ed3a6d95ab9f3b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
主要用于查看网页请求的ajax接口，以及网页中各个资源加载的先后顺序(我经常利用这个查找我的url地址是不是写错了，因为他会返回http状态码)。同时在点击页面的时候看到网站所发送的请求。
![Network](http://upload-images.jianshu.io/upload_images/5290967-dcc9c79b87ae4bcb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
Performence主要用于观察一个页面从打开到停止加载浏览器都做了些什么，蓝线代表 DOMContentLoaded 事件。 绿线代表首次绘制的时间。 红线代表 load 事件。
![Performence](http://upload-images.jianshu.io/upload_images/5290967-559946d0a68adc4e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

使用Application面板检查加载的所有资源，包括IndexedDB与Web SQL数据库，本地和会话存储，cookie，应用程序缓存，图像，字体和样式表。
![Application](http://upload-images.jianshu.io/upload_images/5290967-dff63cb724243532.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

使用Security面板调试混合内容问题，证书问题等等。
![Security](http://upload-images.jianshu.io/upload_images/5290967-1aa473874fe9427c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)