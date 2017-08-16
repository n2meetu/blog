#### 1： ajax 是什么？有什么作用？
- Ajax是Asynchronous JavaScript and XML的缩写，这一技术能够向服务器请求额外的数据而无需卸载整个页面，会带来良好的用户体验。通过JavaScript发送请求、接受服务器传来的数据，然后操作DOM将新数据对网页的某部分进行更新，使用Ajax最直观的感受是向服务器获取新数据不需要刷新页面等待了
- 可以只刷新页面的一部分，用户不会感觉到网站的跳转，没有闪屏时间，提高用户体验。简化后端处理逻辑

#### 2： 前后端开发联调需要注意哪些事情？后端接口完成前如何 mock 数据？
- 前后端开发联调需要注意事项：
    - 约定数据：有哪些需要传输的数据，数据类型是什么；
    - 约定接口：确定接口名称及请求和响应的格式，请求的参数名称、响应的数据格式；
    - 根据这些约定整理成接口文档
- 后端接口完成前mock数据：
    - 可以根据接口文档，使用假数据来验证我们制作的页面响应和接口是否正常。
    - 可以搭建php本地服务器用，php写脚本提供临时数据；
    - 也可使用Mock.js，它能拦截ajax请求并根据请求中的内容来随机生成符合你要求的假数据，模拟后端环境让你完成对页面和接口的测试。



#### 3：点击按钮，使用 ajax 获取数据，如何在数据到来之前防止重复点击?
```
var item = document.getElementById('click-me')
var ajaxLockForItem = false
console.log(item)
item.addEventListener('click',function(){
    if(!ajaxLockForItem){
        //执行AJAX请求
        ajaxLockForItem=!ajaxLockForItem
    }
},false)
```


#### 4：实现加载更多的功能，效果范例383，后端在本地使用server-mock来模拟数据


