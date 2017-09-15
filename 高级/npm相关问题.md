### 1： 如何全局安装一个 node 应用?
`npm install xxx -g`


---

### 2： package.json 有什么作用？
- 当前代码版本，版本信息
- 表明入口文件的名称
- 依赖的包



---

### 3： npm install --save app 与 npm install --save-dev app有什么区别?
- `npm install --save app`
    - 将安装的包写入`package.json`的`dependencies`中
    - `dependencies`是使用这个包所需要安装的依赖

- `npm install --save-dev app`
    - 将安装的包写入`package.json`的`devDependencies`中
    - `devDependencies`是开发这个包所需要安装的依赖
---

### 4： node_modules的查找路径是怎样的?
1. 从当前文件夹下的node_modules下查找
2. 从上层文件夹下的node_modules下查找
3. 在向上查找


---

### 5： npm3与 npm2相比有什么改进？yarn和 npm 相比有什么优势? 
- npm3相对于npm2的改进
    - `npm install --save-dev app`命令不会下载`app`开发时所需要的包
    - `npm install --save-dev app`安装时放在node_modules中

---

### 6： webpack是什么？和其他同类型工具比有什么优势？
- webpack简单介绍
    - 为了解决前端模块化所产生的工具
    - 一个模块打包工具，可以将有依赖的包打包为浏览器所能够识别的静态文件
- 其他同类型工具的缺点
    - CommonJs只能由node用于服务器，而服务器的模式由于网络请求是异步的，所以并不适用与浏览器
    - AMD，比CommonJs更难读写
    - ES6所带有的modules模块，支持的浏览器较少，支持这种写法的模块较少
- webpack的优点
    - 既可以一次请求一个模块，也可以一次请求多个或所有模块，由开发者决定
    - 不仅JavaScript模块化，还支持图片，css文件，语法模版，等等都可以模块化

---

### 7：`npm script`是什么？如何使用？
- `npm script`
    -  npm 脚本,npm 允许在package.json文件里面，使用scripts字段定义脚本命令。
    ``` javascript
    {
        // ...
        "scripts": {
            "build": "node build.js"
        }
    }
    ```
    - 使 `npm run build`等同于`node build.js`
    - 有些字段是设置在npm中的，使用的时候可以省略`run`
    ``` javascript
    {
        // ...
        "scripts": {
            "test": "node build.js"
        }
    }
    ```
    - `npm test`等同于`node build.js`


---

### 8： 使用 `webpack` 替换 入门-任务15中模块化使用的 `requriejs`
[预览链接](https://a775691134.github.io/task/%E9%AB%98%E7%BA%A7/NodeNpm/task15/demo2.html#)


---

### 9：`gulp`是什么？使用 `gulp` 实现图片压缩、CSS 压缩合并、JS 压缩合并
- 一个nodejs应用，一个可以增强前端工作流的自动化构建工具
    - 易于使用
    - 构建快速
    - 插件高质
    - 易于学习
- 图片压缩
    - 命令行出入
    ```
    npm install gulp-imagemin --save-dev
    ```
    - 在gulpfile.js中添加
    ```
    var imagemin = require('gulp-imagemin')
    gulp.task('image', function () {
        // 1. 找到图片
        gulp.src('images/*.*')
        // 2. 压缩图片
            .pipe(imagemin({
                progressive: true
            }))
        // 3. 另存图片
            .pipe(gulp.dest('dist/images'))
    });
    ```
    - 使用 `gulp image`

- css压缩合并
    - 在gulpfile.js中添加
    ``` javascript
    gulp.task('css', function () {
        // 1. 找到文件
        gulp.src('css/*.css')
        // 2. 压缩文件
            .pipe(minifyCSS())
        // 3. 另存为压缩文件
            .pipe(gulp.dest('dist/css'))
    })
    ```
    - 使用`gulp css`


- JS压缩合并
    - 命令行出入
    ```
    npm install gulp-uglify --save-dev
    ```
    - 在gulpfile.js中添加
    ``` javascript
    gulp.task('js', function(){
        return gulp.src('**/*.js') 
        .pipe(minify())
        .pipe(gulp.dest('build'));  //输出文件目录
    });
    ```
    - 使用`gulp js`

---