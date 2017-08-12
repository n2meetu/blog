#### `JavaScript `定义了几种数据类型? 哪些是原始类型?哪些是复杂类型?原始类型和复杂类型的区别是什么?
**原始类型**
数值（number）、字符串（string）、布尔值（boolean）
原始类型不能在细分
**复杂类型**
对象（object）
复杂类型往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。


#### `typeof`和`instanceof`的作用和区别?
**typeof**
很好理解，就是这个东西到底是什么类型的，下图展示了`typeof`可能返回的结果。
![typeof](http://upload-images.jianshu.io/upload_images/5290967-8e7e159e750b581c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**instanceof**
mdn上说用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
``` object instanceof constructor；```
简单说起来就是谁是否属于谁，object是否属于constructor，我们现在不了解原理，但是也可以用，他需要两个参数`object`是要判断的类型，`constructor`判断是否为这个类型。
举个例子：
```
var aa= [];
var flag= aa instanceof Array;
console.log(flag);   //true
```

**不同之处**
1. 前者输入一个要检测的变量就可以，返回一个类型；
2. 后者需要输入两个变量，返回`true`或者`false`;
3. typeof可以用来检查一个没有被声明的变量而不报错，返回undifined
4. instanceof用来检查数组和对象，当我们希望返回一个数组和对象的时候就可以使用`instanceof`

#### 如何判断一个变量是否是数字、字符串、布尔、函数
```
var count = 123;   //是否为数字
typeof number  ===  "number"  //注意number要加引号

var username = "我是用户名";
typeof username === "string";  

var isBoolean = true;
typeof isBoolean === "boolean";

function isFunction () {}
typeof isFunction === "function";
```


#### `NaN`是什么? 有什么特别之处?
1. NaN是数字类型的
```
typeof NaN === "number"; //true
```
2. NaN不是数字，如果参与计算，所得结果还是NaN
3. NaN一般来自除0，字符串转成数字失败，比如"balabalabala"


#### 如何把非数值转化为数值?
强制转换
```
var strNum = '456m';
var num = parseInt(strNum);
```


#### `==`与`===`有什么区别
`==` 只判断值是否相等，不会判断类型。
`===`不仅判断值是否相等，还判断类型是否相等。
```
var aaa = '123456';
var bbb = parseInt(aaa);
var ccc = aaa.toString();
var ddd = bbb == ccc ;  //true
var eee = bbb === ccc;  //false
```


#### `break`与`continue`有什么区别
`break`为跳出当前的循环语句，执行循环结束之后的语句
`continue`为跳出本层循环，执行下一跳循环。


#### `void 0`和`undefined`在使用场景上有什么区别
`undefined`一般用于全局环境
`void 0`一般用于局部作用域

#### 以下代码的输出结果是?为什么?
```
console.log(1+1);    //2  两个都是数字，进行数字间的加法之后输出
console.log("2"+"4");   //24 两个都是字符串，做拼接之后输出
console.log(2+"4");   //24 一个是字符串一个是加法，先将数字2转成字符串"2"，拼接之后输出
console.log(+"4"); // 4  只有一个字符串并且都是数字时，转成数字之后输出
```


#### 以下代码的输出结果是?
```
var a = 1;  
a+++a;  
typeof a+2;
//"number2"  (typeof a)+2  原因时typeof的优先级比加法高
```


#### 以下代码的输出结果是? 为什么
```
 var a = 1;
 var b = 3;
 console.log( a+++b );
//4   a++的意思是，先做完本条操作在+1，输出的时候a的值还是1
````


#### 遍历数组，把数组里的打印数组每一项的平方
```
 var arr = [3,4,5];
```
```
for(var i=0;i<arr.length;i++){
  console.log(arr[i]*arr[i]);
}
```



####  遍历 JSON, 打印里面的值
```
var obj = {
 name: 'hunger', 
 sex: 'male', 
 age: 28 
}
```
```
for(property in obj){
  console.log(property+':'+obj[property]);
}
```


#### 以下代码输出结果是? 为什么 （选做题目）
```
var a = 1, b = 2, c = 3;
var val = typeof a + b || c >0
console.log(val) 
//number2  typeof的优先级比较高，b||c>0就是 2||true,结果为2，相加等于number2

var d = 5;
var data = d ==5 && console.log('bb')
console.log(data)
//结果：bb  undefined
//console.log('bb')的返回值为 undefined,data的值为true，true && undefined的值为undefined

var data2 = d = 0 || console.log('haha')
console.log(data2)
 //undefined  data2的值为0，console.log的返回值为undefined，0||undefined的值为undefined


var x = !!"Hello" + (!"world", !!"from here!!");
console.log(x)
//2    !!"Hello"的值为true，(!"world", !!"from here!!")的值为true，(valueX,valueY)的值为valueY,字符串不为空返回true !“Hello”返回false !!"Hello"返回true
```