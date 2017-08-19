#### 1： jQuery 能做什么？
- 更简单的操作DOM
- 更简单的发送AJAX请求
- 兼容浏览器
- 更简单的选择网页元素
- 改变结果集
- 元素的操作：取值和赋值
- 元素的操作：移动
- 元素的操作：复制、删除和创建
- 工具方法
- 事件操作
- 特殊效果

---

#### 2： jQuery 对象和 DOM 原生对象有什么区别？如何转化？
- 区别：
    - jquery选择器得到的jquery对象和标准的 javascript中的document.getElementById()取得的dom对象是两种不同的对象类型。
    - 各自有不同的方法，不能混用，比如使用jquery选择器得到的对象使用原生js的方法。
- 转化：
    - 将JQuery对象转化为DOM对象
        ```
        <div id='header'></div>
        <div id='main'></div>
        <div id='footer'></div>
        <script src="./jquery-3.2.1.min.js"></script>
        ```
        ```
        <script>
            var $header = $("#header") ;	//jQuery对象
            var header = $header[0]; //DOM对象
            console.log(header) //<div id='header'></div>
        </script>
        ```
        ```
        <script>
            var $header = $("#header"); //jQuery对象
            var header = $header.get(0); //DOM对象
            console.log(header) 
        </script>
        ```
    - 将DOM对象转化为JQuery对象
        ```
        <script>
            var header=document.getElementById("header"); //DOM对象
            var $header=$(header); //JQuery对象
        </script>  
        ```
---

#### 3：jQuery中如何绑定事件？bind、unbind、delegate、live、on、off都有什么作用？推荐使用哪种？使用on绑定事件使用事件代理的写法？
- 绑定事件
    - 一般的简单笼统绑定事件
        ```
        <script>
            $("#btn").on("click",function(){
                /*...*/
            })
        </script>
        ```
    - 事件代理
        ```
        <script>
            $('ul').on("click",li,function(){
                /*...*/
            })
        </script>
        ```
    - 为事件命名
        ```
        <script>
            $('ul').on("click.name",li,function(){
                /*...*/
            })
        </script>
        ```
    - 只执行一次绑定事件
        ```
        <script>
            $('#btn').one("click",function(){
                    console.log(1)
            })
        </script>
        ```
- bind、unbind、delegate、live、on、off的作用
    - bind: 绑定事件方法 ，只能把事件绑定在页面上存在的元素，静态绑定   
    - unbind: 解绑事件方法 ，和bind()事件绑定对应
    - delegate: 只能动态绑定事件,根元素为父元素，把事件绑定到这个父元素的后代元素上，并且可以过滤要绑定的后代元素，最重要的是可以对未来的后代元素添加绑定事件
    - live:动态绑定，旧版本jQuery应优先使用delegate动态绑定事件
        - PC端
            - 使用live绑定事件会降低代码处理性能
            - 不支持链式写法等限制，
            - $(document).unbind("click") 会移除所有通过 .live() 添加的 click 事件!
        - 移动端也会有很多的限制，移动端click 事件不会冒泡到文档 body 上，并且如果不满足如下情况之一，就不能和 .live() 方法一起使用：
            - 使用原生的可被点击的元素，例如, a 或 button，因为这两个元素可以冒泡到 document。
            - 在 document.body 内的元素使用 .on() 或 .delegate() 进行绑定，因为移动 iOS 只有在 body 内才能进行冒泡。
            - 需要 click 冒泡到元素上才能应用的 CSS 样式 cursor:pointer (或者是父元素包含 document.documentElement)。但是依需注意的是，这样会禁止元素上的复制/粘贴功能，并且当点击元素时，会导致该元素被高亮显示。
    - on: 绑定事件方法（可以静态绑定，也可以使用事件委托动态绑定事件，根元素是父元素或子元素）
    - off: 解绑事件方法（和on对应起来实现解绑事件）

---

#### 4：jQuery 如何展示/隐藏元素？
```
<div id='header'></div>
<div id='main'></div>
<div id='footer'></div>
<a href="#" id='display-none'>隐藏元素</a>
<a href="#" id='display-block'>展示元素</a>
<script src="./jquery-3.2.1.min.js"></script>
<script>
    var $displayNone = $('#display-none')
    var $displayBlock = $('#display-block')
    var $header = $('#header')
    $displayNone.on('click',function(){
        $header.hide()
    })
    $displayBlock.on('click',function(){
        $header.show()
    })
</script>
```

---

#### 5： jQuery 动画如何使用？
- 使用animate函数
    ```
    <script>
        $el.animate({
			/*需要变动的内容*/
		},/*时间(微秒)*/);
    </script>
    ```
- 例如：
    ```
    <div id='header'></div>
    <script>
		var $header = $('#header')
		$header.animate({
			height:'400px',
			width:'400px'
		},2000);
	</script>
    <style>
		#header {
			border: 1px solid #000;
			background-color: #369;
			width: 10px;
			height: 10px;
		}
	</style>
    ```

---

#### 6：如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？

```
<div id='header'>
    <a href="#" id='btn1'>获取内容</a>
    <a href="#" id='btn2'>设置内容</a>
    <a href="#" id='btn3'>获取文本</a>
    <a href="#" id='btn4'>设置文本</a>
</div>
<script src="./jquery-3.2.1.min.js"></script>
<script>
    var $header = $('#header')
    var $btn1 = $('#btn1')
    var $btn2 = $('#btn2')
    var $btn3 = $('#btn3')
    var $btn4 = $('#btn4')
    $btn1.on('click',function(){  //获取元素的HTML内容
        console.log($header.html())
    })
    $btn2.on('click',function(){  //设置元素的HTML内容
        $header.html("<a href='#' id='btn1'>获取内容</a>") 
    })
    $btn3.on('click',function(){  //获取元素的文本内容
        console.log($header.text()) 
    })
    $btn4.on('click',function(){  //设置元素的文本内容
        $header.text('只剩下这行字') 
    })
</script>
```


#### 7：如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？
- 设置用户输入或者选择的内容
    
    `$('input').val('username')`

- 获取用户输入或者选择的内容

    `$('input').val()`

- 设置元素属性
    
    `$('em').attr('title','我是一个图片')`

- 获取元素属性

     `$('em').attr('title')`

---

#### 8.效果：
- [预览地址](https://a775691134.github.io/task/进阶/js进阶/JQuery/demo1.html)
- [代码地址](https://github.com/a775691134/task/blob/master/%E8%BF%9B%E9%98%B6/js%E8%BF%9B%E9%98%B6/JQuery/demo1.html)

---

#### 9.效果：
- [预览地址](https://a775691134.github.io/task/进阶/js进阶/JQuery/demo2.html)
- [代码地址](https://github.com/a775691134/task/blob/master/%E8%BF%9B%E9%98%B6/js%E8%BF%9B%E9%98%B6/JQuery/demo1.html)

---

#### 10.效果：
- [预览地址](https://a775691134.github.io/task/进阶/js进阶/JQuery/demo3.html)
- [代码地址](https://github.com/a775691134/task/blob/master/%E8%BF%9B%E9%98%B6/js%E8%BF%9B%E9%98%B6/JQuery/demo1.html)

---

#### 11.效果：
- [预览地址](https://a775691134.github.io/task/进阶/js进阶/JQuery/demo4.html)
- [代码地址](https://github.com/a775691134/task/blob/master/%E8%BF%9B%E9%98%B6/js%E8%BF%9B%E9%98%B6/JQuery/demo1.html)

---