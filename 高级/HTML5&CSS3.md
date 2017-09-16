## 1： HTML5是什么？有哪些新特性？有哪些新增标签？如何让低版本的 IE 支持 HTML5新标签
- HTML5
    - HTML5是超文本标记语言的第五次重大修改，2014年10月29日标准规范制定完成
    - HTML5的设计目的是为了在移动设备上支持多媒体。
    - HTML5赋予网页更好的意义和结构。
- 新增标签
    - `canvas` 标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API
    - `audio` 定义音频内容
    - `video` 定义视频（video 或者 movie）
    - 语义化标签
        - `article` 定义页面正文内容
        - `aside` 定义页面内容之外的内容
        - `dialog` 定义对话框，比如提示框
        - `figure` 规定独立的流内容（图像、图表、照片、代码等等）
            - `figcaption` 定义 `<figure>`元素的标题
        - `footer` 定义 section 或 document 的页脚
        - `header` 定义了文档的头部区域
        - `nav` 导航
        - `section` 定义文档中的节（section、区段）
- 兼容老IE
    - 

## 2： input 有哪些新增类型？
- `email`,`url`,`number`,`range`,`Date Picker`,`Date`


## 3： 浏览器本地存储中 cookie 和 localStorage 有什么区别？ localStorage 如何存储删除数据。
- cookie
    - cookie是存储在浏览器上的一小段数据，用来记录某些当页面关闭或者刷新后仍然需要记录的信息。
    - 每次网络请求 Request headers 中都会带上cookie。所以如果 cookie 太多太大对传输效率会有影响。
    - 一般浏览器存储cookie 最大容量为4k，所以大量数据不要存到cookie。

- localStorage
    - 用于将大量数据（最大5M）保存在浏览器中，保存后数据永远存在不会失效过期，除非用 js手动清除。
    - 不参与网络传输。
    - 一般用于性能优化，可以保存图片、js、css、html 模板、大量数据。

## 4： 写出如下 CSS3效果的简单事例
1. [圆角， 圆形](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/HTML5&CSS3/border-radius.html)

2. [div 阴影](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/HTML5&CSS3/shadow.html)
3. [2D 转换：放大、缩小、偏移、旋转](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/HTML5&CSS3/2Dtransform.html)

4. [3D 转换：移动、旋转](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/HTML5&CSS3/3Dtransform.html)

5. [背景色渐变](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/HTML5&CSS3/gradient.html)

6. [过渡效果](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/HTML5&CSS3/transtion.html)

7. [动画](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/HTML5&CSS3/animation.html)


## 5： 实现如下全屏图加过渡色的效果（具体效果随意）
[demo](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/HTML5&CSS3/demo1.html)


## 6： 写出如下 loading 动画效果 
[demo1](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/HTML5&CSS3/demo2.html)
[demo2](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/HTML5&CSS3/demo3.html)