#### text-align: center的作用是什么，作用在什么元素上？能让什么元素水平居中
使文本内容内嵌在其父块元素居中对齐。不控制块元素的对齐，只控制其内联内容水平居中。

#### IE 盒模型和W3C盒模型有什么区别?
**IE盒模型：**
宽度= `border-left` + `padding-left` + `content` + `padding-right`+ `border-right`，
高度=`border-top` + `padding-top` + `content` + `padding-bottom`+`border-bottom`
![IE盒模型](http://upload-images.jianshu.io/upload_images/5290967-7a7141c9f466f5d9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**W3C标准盒模型：**
宽度=`content`，
高度=`content`
![W3C标准盒模型](http://upload-images.jianshu.io/upload_images/5290967-186a9803adadd04a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### { box-sizing: border-box;}的作用是什么？
指定使用IE盒模型

#### line-height: 2和line-height: 200%有什么区别?
line-height:2是指行高为本身文字的2倍，不能被子元素继承。
line-height:200%是行高为父元素行高的2倍，可以被子元素继承。

#### inline-block有什么特性？如何去除缝隙？高度不一样的inline-block元素如何顶端对齐?
可以设置宽高，自己又不独占一行，的但是两个元素之间会有缝隙，解除缝隙的两种方法:
1.两个元素在HTML代码中直接相邻，中间不加空格和换行；
2.在父级设置字体大小为0，本身设置需要的字体大小。
顶端对齐：`vertical-align: top`

#### CSS sprite 是什么?
将网页中需要展示的一张图合并为一张大图，使用的时候用`backgroud-pisition: x y;`定位

#### 让一个元素"看不见"有几种方式？有什么区别?
```
opacity: 0;
/*整体透明度为0*/
visibility: hidden;
/*和上一个类似，占用位置*/
display: none;
/*消失，不展示*/
background-color: rgba(0, 0, 0, 0) 
/*只针对背景色*/
```