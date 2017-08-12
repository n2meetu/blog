#### 块级元素和行内元素分别有哪些？动手测试并列出4条以上的特性区别
**块级元素：**
`div`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p` 
`hr`, `form`, `ul`, `dl`, `ol`, `pre`, `table`
`li`, `dd`, `dt`, `tr`, `td`, `th`
**行内元素：**
`em`, `strong`, `span`, `a`, `br`, `img` 
`button`, `iput`, `label`, `select`, `textarea`
`code`, `script` 
**区别：**
- 块级元素独占一行，行内元素可以并排放置
- 块级元素可以容纳行内元素，行内元素只能容纳其他行内元素或者文字。
- 块级元素可以控制宽度高度，行内元素不能控制宽度高度。要想改变他们的宽高需要在CSS中先设置`display:block;`或者`display:inline-block`。
- 块级元素的居中方式为`margin: 0 auto;`，行内元素需要在上层节点设置`text-align: center;`。

#### 什么是 CSS 继承? 哪些属性能继承，哪些不能？
CSS继承：CSS中父元素的样式也影响到子元素的样式，让子元素的样式因为父元素的设置引起同样的改变。
可以继承的属性：`color`,`font`、`text-align`
不能继承的属性：`border`、`display`、`margin`、`padding`、`background`、`height`、`width`、`position`、`left`、`right`、`top`、 `bottom`、`float`

#### 如何让块级元素水平居中？如何让行内元素水平居中?
**块级元素居中：**
```
margin: 0 auto;
```
**行内元素水平居中：**
```
text-align: center;
```

#### 用 CSS 实现一个三角形
```
<style>
    #triangle {
        width: 0px;
        border-top: solid 20px transparent;
        border-right: solid 20px transparent;
        border-bottom: solid 25px red;
        border-left: solid 20px transparent;
    }
</style>
<div id='triangle'></div>
```

#### 单行文本溢出加 ...如何实现?
```
<style>
    p {
        white-space: nowrap; /*当句子宽度大于屏幕宽度时不使用换行*/
        overflow: hidden;   /*如果需要，内容被剪切以适应内容框。没有提供滚动条。*/
        text-overflow: ellipsis;  /*该关键字值将显示省略号来表示剪切的文本。*/
    }
</style>
<p>
    我今天说的可能是有点多了，但是你要是不愿意听你告诉我啊，你要是我不说我怎么知道你不愿意听呢，你说万一你愿意听我不说了那你不还是生气吗？
</p>
```

#### px, em, rem 有什么区别
px:一种固定单位，1px代表一个像素点。
em: 相对单位，相对于父元素字体大小
rem: 相对单位，相对于html的字体大小

#### 解释下面代码的作用?为什么要加引号? 字体里\5b8b\4f53代表什么?
```
body{
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
```
因为字体中间有空格，如果字体名中包含#、$之类的符号，需要在font-family声明中加引号。
\5b8b\4f53代表这个字体的unicode编码，防止编码不匹配导致乱码时浏览器不识别。