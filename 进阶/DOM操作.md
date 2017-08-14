#### `dom`对象的`innerText`和`innerHTML`有什么区别？
- `innerText`是一个可写属性，返回元素内包含的文本内容，在多层次的时候会按照元素由浅到深的顺序拼接其内容
- `innerHTML`属性作用是返回元素的HTML结构，在写入的时候也会自动构建DOM
- `innerText`只获取文本内容，`innerHTML`还能获取`HTML`的代码，另外`innerHTML`也可以插入`HTML`代码生成相应的元素

---

#### `elem.children`和`elem.childNodes`的区别？
- `elem.childen`获取的是子元素列表（`HTMLCollection`）
- `elem.childNodes`获取的是子元素列表（`NodeList`）
- 虽然中文名称相同，但是英文名称是不一样的，下面我们讨论`HTMLCollection`和`NodeList`的区别
    - `HTMLCollection` 是一个接口，表示 `HTML` 元素的集合，它提供了可以遍历列表的方法和属性
    - `NodeList` 对象代表一个有顺序的节点列表
    - `HTMLCollection`对象具有`namedItem()`方法，可以传递`id`或`name`获得元素
    - `HTMLCollection`的`item()`方法和通过属性获取元素(`document.forms.f1`)可以支持`id`和`name`，而`NodeList`对象只支持`id`

---

#### 查询元素有几种常见的方法？`ES5`的元素选择方法是什么?
- 常见方法
    - `document.getElementById()`根据ID查找,返回元素
    - `document.getElementsByClassName()`根据类名查找，返回HTMLCollection对象
    - `document.getElementsByTagName()`根据标签名查找，返回HTMLCollection对象
    - `document.getElementsByName()`根据name名称查找，返回NodeList对象
- ES5方法
    - `document.querySelector()`/根据CSS选择器查找,只返回第一个匹配的节点
    - `document.querySelectorAll()`根据CSS选择器查找，返回所有节点，NodeList对象
    - `document.elementFromPoint()`返回指定位置的元素

---

#### 如何创建一个元素？如何给元素设置属性？如何删除属性
- 创建元素
    - `document.createElement('标签名')`
    - 创建的元素是游离在DOM外的，需要挂载到DOM中
- 元素属性
    - 设置元素属性 `el.setAttribute('属性名','属性值')`
    - 删除元素属性 `el.removeAttribute('属性名')`

---

#### 如何给页面元素添加子元素？如何删除页面元素下的子元素?
- 添加子元素
    - `el.appendChild(A)`将A元素插入到el元素的末尾，作为el元素的子元素
    - `el.appendBefore(B,el.firstChild)`将B元素插入到el元素的第一个子元素之前
- 删除页面元素
    - `el.parentNode.removeChild(el)`el并没有权限删除自己，只能调用父元素的removeChild方法来删除自己。

---

#### `element.classList有`哪些方法？如何判断一个元素的`class`列表中是包含某个 `class`？如何添加一个`class`？如何删除一个`class`?
- `Element.classList` 是一个只读属性，返回一个元素的类属性的实时`DOMTokenList`集合。
    - `add('类名1',['类名2'])`添加指定的类值。如果这些类已经存在于元素的属性中，那么它们将被忽略。
    - `remove('类名1',['类名2'])`删除指定的类值。
    - `item (Number)`按集合中的索引返回类值。
    - `toggle ('类名',[true/false])`
        - 当只有一个参数时：如果类存在，则删除它并返回`false`，如果不存在，则添加它并返回`true`。
        - 当存在第二个参数时：如果第二个参数的计算结果为`true`，则添加指定的类值，如果计算结果为`false`，则删除它
    - `contains('类名')`检查元素的类属性中是否存在指定的类值。
- 判断一个元素的`class`列表中是包含某个 `class`
    ```
    var contentDiv = document.getElementById('content')
    var flag = contentDiv.classList.contains('layout')
    console.log(flag)
    ```
- 添加一个`class`
    ```
    var contentDiv = document.getElementById('content')
    contentDiv.classList.add('layout')
    ```
- 删除一个`class`
    ```
    var contentDiv = document.getElementById('content')
    contentDiv.classList.remove('layout')
    ```
---

#### 如何选中如下代码所有的li元素？ 如何选中`btn`元素？
```
<div class="mod-tabs">
   <ul>
       <li>list1</li>
       <li>list2</li>
       <li>list3</li>
   </ul>
   <button class="btn">点我</button>
</div>
```
- 选中所有li元素
    ```
    var btnClickMe = document.querySelectorAll('.mod-tabs>ul>li')
    ```
- 选中btn元素
    ```
    var btnClickMe = document.querySelector('.mod-tabs>.btn')
    ```
- 想法
    - 如果使用`document.getElementsByTagName`可能会选取到页面中所有的`li`元素
    - 如果使用`document.getElementsByClassName`可能会选取到页面中其他的`class`为`btn`的元素