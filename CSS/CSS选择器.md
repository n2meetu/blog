#### class 和 id 的使用场景?
id定位到页面中唯一的一个元素，class定位到页面中的某一类具有共同特征的元素。

#### CSS选择器常见的有几种?
四种，分别是：**\***，**#id**，**.class**，**element**


#### 选择器的优先级是怎样的?对于复杂场景如何计算优先级？
**!import引入的选择器**
**作为style属性写在元素标签上的内联样式**
**id选择器**
**类选择器**
**伪类选择器**
**属性选择器**
**标签选择器**
**通配符选择器**
**浏览器自定义
同级当中写在后面的选择的优先级大于写在前面的选择器

#### a:link, a:hover, a:active, a:visited 的顺序是怎样的？ 为什么？
a:active必须放在最前面，因为当a:active放在最后的话会覆盖掉其他伪类所写的样式

#### 以下选择器分别是什么意思?
```
#header{
}  //id为header的元素
.header{
}  //class为header的所有元素
.header .logo{
}  //class为header的元素中所有class为logo的元素
.header.mobile{
}  //所有class为header和mobile的元素
.header p, .header h3{
} //所有class为header的元素中的p元素和h3元素
#header .nav>li{
} //id为header的元素中的所有class为nav的元素中的第一层li元素
#header a:hover{
}  //id为header的元素中所有a元素当鼠标放在元素上表现出来的样式
#header .logo~p{
} //id为header中所有在class为logo元素后面的p元素
#header input[type="text"]{
}  //id为header元素中所有type=text的input元素
```

#### 列出你知道的伪类选择器
e:first-child	匹配作为长子（第一个子女）的元素E
a:link	匹配所有未被点击的链接
a:visited	匹配所有已被点击的链接
a:active	匹配鼠标已经其上按下、还没有释放的E元素
a:hover	匹配鼠标悬停其上的E元素
e:focus	匹配获得当前焦点的E元素
e:lang(c)	匹配lang属性等于c的E元素
e:enabled	匹配表单中可用的元素
e:disabled	匹配表单中禁用的元素
e:checked	匹配表单中被选中的radio或checkbox元素
e::selection	匹配用户当前选中的元素
e:nthchild(n)    匹配到父元素的第几个子元素，从1开始
e:nth-last-child(n)     匹配到父元素倒数第几个子元素，从1开始
e:first-of-type          匹配到父元素中第一个与该元素拥有相同class的相同元素

#### div:first-child、div:first-of-type、div :first-child和div :first-of-type的作用和区别 （注意空格的作用）
**div:first-child**：  同级元素中第一个且为div 的元素
**div:first-of-type**：选择div所在的父元素的第一个跟这个div拥有相同class的第一个子元素
**div :first-child**：
![1.png](http://upload-images.jianshu.io/upload_images/5290967-a5b0fd99f5f11d88.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在1.png中可以看出`1.png`不仅在div上找到其所在父元素的第一个子元素，在div的子元素中也生效。
所以`div :first-child`的作用是找到div所在父元素中第一个子元素和div中的第一个子元素
**:first-of-type**：
![2.png](http://upload-images.jianshu.io/upload_images/5290967-3405649569427419.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
选择所有标签。
#### 运行如下代码，解析下输出样式的原因。
```
    <style>
        .item1:first-child{
            color: red;
        }
        .item1:first-of-type{  
            background: blue;
        }
    </style>
    <div class="ct">
        <p class="item1">aa</p>
        <h3 class="item1">bb</h3>
        <h3 class="item1">ccc</h3>
    </div>  
   ```
效果：
![image.png](http://upload-images.jianshu.io/upload_images/5290967-527cb779bc5722b4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
1.因为`e:forst-child`是指找到`e`所在的父元素的第一个子元素，所以`p`标签变成红色，其他的不变。
2.因为.item1:first-of-type的作用是选择元素e所在父元素第一个与元素e具有相同的class并且是同种元素，`p:first-of-type`找到的就是自己，第一个`h3`找到的也是自己。第二个`h3`找到的是第一个`h3`，所以第二个`h3`的背景没有变色。而其他的被div包住的元素的背景色都变成蓝色。