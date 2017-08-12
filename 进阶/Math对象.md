#### 写一个函数，返回从min到max之间的 随机整数，包括min不包括max 
```
function getRandom(min, max) {
  return Math.random() * (max - min) + min
}
```

#### 写一个函数，返回从min都max之间的 随机整数，包括min包括max 
```
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
```


#### 写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。
```
function getRandStr(len){
    var str=''
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a',
        'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'];
    console.log(arr)
    for(var i=0;i<len;i++){
        str+=arr[getRandomInt(0,61)]  //使用第二题的函数
    }
    return str
}
var str = getRandStr(10); // 0a3iJiRZap
```


#### 写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为0.0.0.0~255.255.255.255
```
function getRandIP(){
    str=getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)
    return str
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45
```
#### 写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff
```
function getRandColor(){
    var str='#'
    for(var i=0;i<6;i++){
        str+=getRandomInt(0,15).toString(16)
    }
    return str
}
var color = getRandColor()
console.log(color)   // #3e2f1b
```