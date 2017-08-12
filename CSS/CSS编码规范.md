#### 说一说你平时写代码遵守的编码规范
1. 尽量使用有语义化的标签，如`h1`,`header`,`main`,`footer`
2. 在给CSS设置属性的时候冒号后面空一格，如`background: red;`,在`{`前面空一格
3. 如果CSS属性的大小是0的时候，省略单位，如`margin: 0 auto;`
4. 给class命名时使用有意义的单词，如`container`,`left-aside`;


#### 垂直居中有几种实现方式，给出代码范例
**1. 父元素设置上下`padding`相等**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>垂直居中1</title>
    <style>
        .container {
            border: 1px solid;
            padding: 40px 0;
        }
        .box {
            border: 1px solid;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">垂直居中的元素</div>
        <div class="box">垂直居中的元素</div>
    </div>
</body>
</html>
```

![效果图1](http://upload-images.jianshu.io/upload_images/5290967-90ef0ffd6c57a5cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**2. 绝对定位居中，设置定位为绝对定位，top，left设为50%，负margin设为宽度高度各一半**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>垂直居中2</title>
    <style>
        .box {
            width: 400px;
            height: 300px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -200px;
            margin-top: -150px;
            border: 1px solid;
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

![效果图2](http://upload-images.jianshu.io/upload_images/5290967-1321f0b18263c40b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**3. 给要居中的元素和父元素的before伪元素设置vertical-align为middle;display为inline-block并在伪元素上设置height为100%，**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>垂直居中3</title>
    <style>
        .container {
        height: 300px;
        border: 1px solid;
        }
        .container:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        }
        .box {
        display: inline-block;
        width: 30px;
        height: 20px;
        border: 1px solid red;
        vertical-align: middle;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">aaaa</div>
    </div>
</body>
</html>
```

![效果图3](http://upload-images.jianshu.io/upload_images/5290967-9e6dc883b2e420b2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)