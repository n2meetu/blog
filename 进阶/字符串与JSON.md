#### 对于 HTTP 协议而言，HTML、CSS、JS、JSON 的本质都是什么？
对于HTTP协议而言，HTML、CSS、JS、JSON都是符合各自代码规则的字符串，在http协议看来他们都是一样的，只是浏览器获得他们之后有不同的解析方式。


#### 使用数组拼接出如下字符串 ，其中styles数组里的个数不定
```
var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};
function getTpl(data){
    /*书写的函数*/
    var str='<dl class="product">'
    for(key in data){
        if(key === 'name'){
            str+='<dt>女装</dt>'
        }
        if(key === 'styles'){
            for(var i=0;i<data[key].length;i++){
                str+='<dd>'+data[key][i]+'</dd>'
            }
        }
    }
    str+='</dl>'
    return str
}
var result = getTplStr(prod);  //result为下面的字符串
<dl class="product"><dt>女装</dt><dd>短款</dd<dd>冬季</dd><dd>春装</dd></dl>
```


#### 写出两种以上声明多行字符串的方法
例如：
```
var str = 'abcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancdeabcdeabcdeabcdeancde'
```
这段字符串很长，如何多行优雅的显示
```
var str='abcdeabcdeabcdeancdeabcdeabcdeabcdeanc'+
        'deabcdeabcdeabcdeancdeabcdeabcdeabcdeancde'

var str=`abcdeabcdeabcdeancdeabcdeabcdeabcdeanc
         deabcdeabcdeabcdeancdeabcdeabcdeabcdeancde`
```


#### 补全如下代码,让输出结果为字符串: hello\\饥人谷
```
var str ='hello\\\\饥人谷'   //补全代码
console.log(str)
```


#### 以下代码输出什么?为什么
```
var str = 'jirengu\nruoyu'
console.log(str.length)
```
一共有14个字符，但是`\n`会变成一个换行符，所以一共是13个字符。


#### 写一个函数，判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是
```
function isHuiwen (str){
    var n = str.length;
    var flag = true;
    if(n%2 ==0){
        for(var i=0;i<n/2;i++){
            if(str[i]!=str[n-i-1]){
                flag=false;
                break;
            }
        }
    }
    else if(n%2==1){
        for(var i=0;i<n/2-1;i++){
            if(str[i]!=str[n-i-1]){
                flag=false;
                break;
            }
        }
    }
    return flag;
}
console.log(isHuiwen('abcdcba'))  //true
console.log(isHuiwen('abcdcbb'))  //false
```


#### 写一个函数，统计字符串里出现出现频率最多的字符
```
function isMax(str){
    var obj={};
    //将字符和字符出现的次数存放在obj中
    for(var i=0;i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]]++
        }else{
            obj[str[i]]=1
        }
    }
    var max=0;
    //找到出现的最大的次数
    for(var key in obj){
        if(obj[key]>=max){
            max=obj[key]
        }
    }
    //找到出现最大次数的字符并返回
    for(var key in obj){
        if(obj[key]==max){
            return key
        }
    }
}
console.log(isMax('abcdcba')) //a
console.log(isMax('abcdcbb')) //b
console.log(isMax('abdkjbajfkhaskdhijkfkabdkj')) //k
```


##### 写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，如
```
camelize("background-color") == 'backgroundColor'
camelize("list-style-image") == 'listStyleImage'
```
```
function camelize(str){
    if(str.search('-')){
        var arrStr = str.split('-')
        var newStr= arrStr[0];
        for(var i=1;i<arrStr.length;i++){
            newStr+=arrStr[i][0].toUpperCase()+arrStr[i].slice(1,arrStr[i].length-1)
        }
        return newStr;
    }else{
        return '输入的字符串不正确'
    }
}
```

#### 写一个 ucFirst函数，返回第一个字母为大写的字符
```
ucFirst("hunger") == "Hunger"
```
```
function ucFirst (str){
    return str[0].toUpperCase()+str.slice(1,str.length-1)
}
```


#### 写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如
```
truncate("hello, this is hunger valley,", 10) == "hello, thi...";
truncate("hello world", 20) == "hello world"
```
```
function truncate(str, maxlength){
    var newStr = ''
    if(str.length>=maxlength){
        newStr = str.substr(0,maxlength)
        newStr += '…'
    }else{
        newStr = str;
    }
    return newStr
}
```

#### 什么是 JSON格式数据？JSON格式数据如何表示对象？window.JSON 是什么？
** JSON格式数据**
一种模仿JavaScript语法创造的数据的格式，比较香JavaScript里面的对象，但是其本质是一个字符串。
**JSON数据如何表示对象**
通过`{}`包含住整个字符串(以`{`开头，以`}`结尾)，中间用键值对存储数据，“键”必须用双引号包住，如果“值”是字符串的话也必须要用双引号包住。“值”可以是字符串，数字，对象，数组，True，False，null
**window.JSON**
是一个内置的对象，包含用于解析JSON的方法，并将值转换为JSON。它不能被调用或者作为构造函数，除了它的两个方法属性，它本身并没有有趣的功能


11、如何把JSON 格式的字符串转换为 JS 对象？如何把 JS对象转换为 JSON 格式的字符串?
**把JSON 格式的字符串转换为 JS 对象**
```
var object = JSON.parse(json)
//object:转换成的对象     json:要转换的json格式的数据
```
** JS对象转换为 JSON 格式的字符串**
```
var json = JSON.stringify(object)
//object:要转换的对象    json:转换完的json格式的数据
```