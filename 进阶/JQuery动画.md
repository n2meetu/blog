#### 1： jQuery 中， `$(document).ready()`是什么意思？
- 在文档“准备就绪”之前，无法安全地操作页面。jQuery可以检测到这种状态。包含在内的代码`$( document ).ready()`会在页面文档对象模型（DOM）准备好后执行`JavaScript`代码。
- 简写为`$()`
- 例如
    ```
    $( document ).ready(function({
        console.log('DOM已经生成')
    }))
    ```
---

#### 2： `$node.html()`和`$node.text()`的区别?
- `$node.html()`获取和设置的是节点的HTML代码和文本内容
- `$node.text()`获取和设置的只有节点的文本内容
- `$node.html`和`$node.text`的作用和`el.innerHTML`和`el.innerText`很像，但是前两个是适用于JQuery的函数，后者是适用于原生js的属性。

---

#### 3： `$.extend `的作用和用法? 
- 将两个或多个对象的内容合并到第一个对象中。
- 多个参数，看两种用法：
    - $.extend( object1, object2 );
        - 
        ```
        var object1 = {
            apple: 0,
            banana: { weight: 52, price: 100 },
            cherry: 97
        }
        var object2 = {
        banana: { price: 200 },
        durian: 100
        }
        console.log( $.extend(object1, object2 ) )
        ```
        - 合并两个对象，修改第一个对象。
        - 输出`{apple:0,banana:{price:200},cherry:97,durian:100}`
        - 默认情况下，执行的合并不递归; 如果第一个对象的属性本身是对象或数组，则它将被第二个或后续对象中具有相同键的属性完全覆盖。

    - $.extend( true, object1, object2 );
        - 
        ```
        var object1 = {
            apple: 0,
            banana: { weight: 52, price: 100 },
            cherry: 97
        }
        var object2 = {
        banana: { price: 200 },
        durian: 100
        }
        console.log( $.extend(true,object1, object2 ) )
        ```
        - 深度合并两个对象，修改第一个对象
        - 输出 `{apple:0,banana:{price:200,weight:52},cherry:97,durian:100}`
        - 执行的合并情况是递归的，如果有值不相同，用第二个的值
- 需要注意的地方：
    - 第一个参数可以是`true`，可以是一个对象，但是不能是`false`
        - 我用的是3.2.1版本，可以传入`false`作为第一个参数，结果跟不加`false`是一样的，但是官网给了警告，所以不要这么写。
    - 如果不想改变`object1`的值，可以时使用一个空对象当作第一个参数
        ```
        var objAdd = {}
        var object1 = {
            apple: 0,
            banana: { weight: 52, price: 100 },
            cherry: 97
        }
        var object2 = {
        banana: { price: 200 },
        durian: 100
        }
        console.log( $.extend(objAdd,object1, object2 ) )
        ```
---


#### 4： `jQuery `的链式调用是什么？
- `$("选择器").方法1(回调函数1).方法2(回调函数2).方法N(回调函数N);`
- 为一个元素快速执行多种操作，例如：`$("ct").show().siblings().hide()`
- 提倡以下写法
    ```
    $("ct").show()
        .siblings()
        .hide()
    ```
- 因为JQuery中大多数方法都返回的是操作的对象本身，比如
    ```
    function show () {
        /*一系列操作*/
        return this
    }
    ```

---

#### 5： `jQuery` 中` data` 函数的作用
- 官方定义：在匹配元素上存储任意相关数据 或 返回匹配的元素集合中的第一个元素的给定名称的数据存储的值。
- 理解：就是允许我们把一个数据放到一个绑定的元素上面，后面在使用的时候就可以直接调取了。
- 使用
    - 我们的数据可以以键值对的形式，例如`$('body').data('value','hello world')`,
    `$('body').data('value')`。
    - 也可以是对象，例如`$('body').data(obj)`
- 注意：`.data()`方法不能在`<object>`（除非是Flash插件），`<applet> `或 `<embed>`元素上使用。


---

#### 6：写出以下功能对应的 jQuery 方法：
- 给元素 $node 添加 `class active`，给元素 $noed 删除 `class active`
    ```
    $node.addClass('active')
    $node.removeClass('active')
    ```

- 展示元素`$node`, 隐藏元素`$node`
    ```
    $node.show()
    $node.hide()
    ```

- 获取元素`$node` 的 属性: `id`、`src`、`title`， 修改以上属性
    ```
    $node.attr('id')
    $node.attr('src')
    $node.attr('title')

    $node.attr('id','idName')
    $node.attr('src','url')
    $node.attr('title','titleName')
    ```

- 给`$node` 添加自定义属性`data-src`
    ```
    $node.attr('data-src','')
    ```

- 在`$ct` 内部最开头添加元素`$node`
    ```
    $ct.prepend($node)
    $node.prependTo($ct)
    ```

- 在`$ct` 内部最末尾添加元素`$node`
    ```
    $ct.append($node)
    $node.appendTo($node)
    ```

- 删除`$node`
    ```
    $node.remove()
    ```

- 把`$ct`里内容清空
    ```
    $ct.empty()
    ```

- 在`$ct` 里设置 **html** `<div class="btn"></div>`
    ```
    $ct.append('<div class="btn"></div>')
    ('<div class="btn"></div>').appendTo($ct)
    ```

- 获取、设置`$node` 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)
    ```
    //不包括内边距
    var width = $node.width()
    var height = $node.height()

    //包括内边距
    var width = $node.innerWidth();
    var height = $node.innerHeight(); 

    //包括边框
    var width = $node.outerWidth();
    var height = $node.outerHeight();

    //包括外边距
    var width = $node.outerWidth(true);
    var height = $node.outerHeight(true);
    ```

- 获取窗口滚动条垂直滚动距离
    ```
    $('body').height()
    ```

- 获取`$node` 到根节点水平、垂直偏移距离
    ```
    $node.offset()
    ```


- 修改`$node` 的样式，字体颜色设置红色，字体大小设置`14px`
    ```
    $node.css({
        color: 'red',
        font-size: '14px'
    })
    ```

- 遍历节点，把每个节点里面的文本内容重复一遍
    ```
    $('*').text()
    ```

- 从`$ct` 里查找 `class` 为 `.item`的子元素
    ```
    $ct.find('.item')
    ```

- 获取`$ct` 里面的所有孩子
    ```
    $ct.children()
    ```

- 对于`$node`，向上找到 `class` 为`.ct`的父亲，在从该父亲找到`.panel`的孩子
    ```
    $node.parents('.ct').find('.panel');
    ```

- 获取选择元素的数量
    ```
    $('li').length
    ```

- 获取当前元素在兄弟中的排行
    ```
    $('li').index
    ```


---

#### 7：
用jQuery实现以下操作
- 当点击`$btn` 时，让 `$btn` 的背景色变为红色再变为蓝色
    ```
    <a href="#">click-me</a>
    <script src="./jquery-3.2.1.min.js"></script>
    <script>
        $('a').on('click',function(){
            $(this).css('background-color','red').css('background-color','blue')
        })
    </script>
    ```

- 当窗口滚动时，获取垂直滚动距离
    ```
    <a href="#">click-me</a>
    <script src="./jquery-3.2.1.min.js"></script>
    <script>
        $('a').on('click',function(){
            console.log($(window).scrollTop())
        })
    </script>
    ```

- 当鼠标放置到`$div `上，把`$div `背景色改为红色，移出鼠标背景色变为白色
    ```
    div {
        width: 600px;
        height: 300px;
        border: 1px solid #777;
    }
    ```
    ```
    <div></div>
    <script src="./jquery-3.2.1.min.js"></script>
    <script>
        // $('a').on('click',function(){
        //     $(this).css('background-color','red').css('background-color','blue')
        //     console.log($(window).scrollTop())
        // })
        $('div').on('mousemove',function(){
            $(this).css('background-color','red')
        })
        $('div').on('mouseleave',function(){
            $(this).css('background-color','white')
        })
    ```

- 当鼠标激活 `input `输入框时让输入框边框变为蓝色，当输入框内容改变时把输入框里的文字小写变- 为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字
    ```
    <input type="text" value='' >
        <script>
        $('input').on('focusin',function(){
            $(this).css('border','1px solid blue')
        })
        $('input').on('focusout',function(){
            $(this).css('border','1px solid #ccc')
            console.log($(this).val().toLocaleUpperCase())
        })
    </script>
    ```

- 当选择` select `后，获取用户选择的内容
    ```
    <select name='sex' id='sex'>
        <option value ="female">女</option>
        <option value ="male">男</option>>
    </select>    
    <script>
        $('#sex').on('change',function(){
            var selectValue= $(this).val() //获取传入的值
            console.log($(this).find('option:selected').text())   //获取用户选择的内容
        })
    </script>
    ```

---

#### 8： 用 jQuery ajax 实现如下效果。`当点击加载更多会加载数据展示到页面效果预览364
前台代码：

    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>点击加载更多</title>
        <style>
            p {
                color: #777;
                border: 1px solid #5f2;
                padding: 5px 6px;
            }
            a {
                text-decoration: none;
                color: #777;
                border: 1px solid #5f2;
                padding: 5px 6px;
            }
            div {
                width: 600px;
                margin: 0 auto;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div>
            <p>内容1</p>
            <p>内容2</p>
            <a href="#" class='btn'>加载更多</a>
        </div>
        <script src='./jquery-3.2.1.min.js'></script>
        <script>
            $('.btn').on('click',function(){
                $.ajax({
                    type: 'get',
                    url: 'getInfo',
                    data: {
                        len: $('p').length
                    },
                    success: function(data){
                        loadMore(data)
                    },
                    error:function(data,error){
                        console.log(error)
                    }
                })
            })
            function loadMore(data){
                var jsonData = JSON.parse(data)
                console.log($('p:last').index())
                for(var i=0;i<jsonData.length;i++){
                    $('p:last').after($('<p>'+jsonData[i]+'</p>'))
                }

            }   
        </script>
    </body>
    </html>

    ```
后台代码：

    ```
    router.get('/getInfo', function(req, res) {
    var length = req.query.len
    console.log(length)
    var data = []
        for(var i=length*1+1;i<length*1+6;i++){
        data.push('内容'+i)
    }
    console.log(data)
    res.send(JSON.stringify(data))
    })

    ```


---

