### 什么是HTML
> **超文本标记语言**（英语：**H**yper**T**ext **M**arkup **L**anguage，简称：**HTML**）是一种用于创建[网页](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5)的标准[标记语言](https://zh.wikipedia.org/wiki/%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80)。HTML是一种基础技术，常与[CSS](https://zh.wikipedia.org/wiki/CSS)、[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)一起被众多网站用于设计令人赏心悦目的网页、网页应用程序以及移动应用程序的用户界面[[1]](https://zh.wikipedia.org/wiki/HTML#cite_note-1)
。[网页浏览器](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88%E5%99%A8)可以读取HTML文件，并将其渲染成可视化网页。HTML描述了一个网站的结构语义随着线索的呈现，使之成为一种标记语言而非[编程语言](https://zh.wikipedia.org/wiki/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80)。
[HTML元素](https://zh.wikipedia.org/wiki/HTML%E5%85%83%E7%B4%A0)是构建网站的基石。HTML允许嵌入图像与对象，并且可以用于创建交互式表单，它被用来结构化信息——例如标题、段落和列表等等，也可用来在一定程度上描述文档的外观和[语义](https://zh.wikipedia.org/wiki/%E8%AF%AD%E4%B9%89)。HTML的语言形式为[尖括号](https://zh.wikipedia.org/wiki/%E6%8B%AC%E5%8F%B7)包围的HTML元素（如<html>
），浏览器使用HTML标签和脚本来诠释网页内容，但不会将它们显示在页面上。
HTML可以嵌入如[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)的[脚本语言](https://zh.wikipedia.org/wiki/%E8%84%9A%E6%9C%AC%E8%AF%AD%E8%A8%80)，它们会影响HTML网页的行为。网页浏览器也可以引用[层叠样式表](https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8)（CSS）来定义文本和其它元素的外观与布局。维护HTML和CSS标准的组织[万维网联盟](https://zh.wikipedia.org/wiki/%E4%B8%87%E7%BB%B4%E7%BD%91%E8%81%94%E7%9B%9F)（W3C）鼓励人们使用CSS替代一些用于表现的HTML元素[[2]](https://zh.wikipedia.org/wiki/HTML#cite_note-deprecated-2).

#### HTML、XML、XHTML 有什么区别
HTML是一种超文本标记语言，语法比较松散，是不严格的。
XML是可扩展标记语言，主要用于存储数据，这个在Java的SSM框架下可以配合Mybits写sql语句
XHTML是可扩展超文本标记语言，基于XML，作用与HTML类似，但语法更严格一些。

#### 怎样理解 HTML 语义化
选择合适的标签、使用合理的代码结构，便于开发者阅读，同时让浏览器的爬虫和机器很好地解析。比如我们的标题就用`h1`标签，链接就用`a`标签，你当然可以给`a`标签加上一些样式来让`a`标签显示的和`h1`标签一样的效果，但是那就不符合HTML语义化了。HTML语义化指的就是什么标签做什么事。这样做的

#### 怎样理解内容与样式分离的原则
HTML负责内容，CSS负责样式，在写HTML的时候不考虑样式，也就是说HTML里面，不要用任何跟样式有关的部分。这样做的好处就是等你需要修改内容的时候，不必再去修改样式有关的内容。当需要重新修改样式的时候，不必再去修改与内容有关的内容。

#### 有哪些常见的meta标签
> - 申明编码`<meta charset='utf-8' />`
> - 优先使用 IE 最新版本和 Chrome
```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!-- 关于X-UA-Compatible -->
<meta http-equiv="X-UA-Compatible" content="IE=6" ><!-- 使用IE6 -->
<meta http-equiv="X-UA-Compatible" content="IE=7" ><!-- 使用IE7 -->
<meta http-equiv="X-UA-Compatible" content="IE=8" ><!-- 使用IE8 -->
```
> - 浏览器内核控制,国内浏览器很多都是双内核（webkit和Trident）,webkit内核高速浏览，IE内核兼容网页和旧版网站。 而添加meta标签的网站可以控制浏览器选择何种内核渲染。
 `<meta name="renderer" content="webkit|ie-comp|ie-stand">`
> - 禁止浏览器从本地计算机的缓存中访问页面内容
  `<meta http-equiv="Pragma" content="no-cache">`

#### 文档声明的作用?严格模式和混杂模式指什么?<!doctype html> 的作用?
<strong>文档声明</strong>是为了告诉浏览器，你的 HTML 文档是用的什么版本的 HTML 来写的，这样浏览器才能按照你声明的版本来正确的解析你的 HTML 文档。
<strong>严格模式（推荐）</strong>现在也称为标准模式，在该模式下，浏览器会严格按照 HTML 和 CSS 标准来解析、渲染你的文档。
<strong>混杂模式（不推荐）</strong>浏览器会模拟Navigator 4和IE5的非标准行为来解析渲染页面，这样做就是为了兼容在W3C标准出现之前就存在的那些“不标准”的页面。
<strong><!doctype html> 的作用</strong>就是让浏览器进入标准模式，使用最新的 HTML5标准来解析渲染页面；如果不写，浏览器就会进入混杂模式，而这是我们要避免的。

#### 浏览器乱码的原因是什么？如何解决
网页编码和编辑器的编码不一致所导致的，需要在网页的头部添加'meta'标签

#### 常见的浏览器有哪些，什么内核
Internet Explorer:Trident
Mozilla:Gecko
Chromewebkit、Safari:WebKit

#### 列出常见的标签，并简单介绍这些标签用在什么场景 
h1-h6 标题，数字越小所代表的标题越重，但是不能说数字学校标题越大，因为“大”是一种样式，在写css的时候，不要去考虑他的样式如何，仅仅写出能够代表本标签代表的含义就可以了。
p 表示一个文字段落
a 表示一个链接
img 在网页中插入图片
div 是网页中的容器，方便我们对单个网页进行分区
ul 无序列表，每条数据之间没有顺序的区分
ol 有序列表，每条数据之间强调数据的顺序
dl dt dd 用于展示一系列 “标题:内容... ”的场景
button 网页上的按钮
strong em 都代表强调，但是stroobg强调的语义更重
iframe 在一个网页中嵌入另一个网页
table  数据表格，之前也用于布局，但现在禁止用于布局。