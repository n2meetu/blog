#### 数组方法里push、pop、shift、unshift、join、splice分别是什么作用？用 splice函数分别实现push、pop、shift、unshift方法
**push** 
- 参数：不限个数
- 将每个参数插入到数组的末尾
- 返回值为添加元素后数组的长度
- 例如
```
var arr = [1,2,3,4]
cosnole.log(arr.push(5))  //5
console.log(arr)  //[1,2,3,4]
```

**pop** 
- 无传入参数
- 在指定数组的末尾删除一个元素
- 返回值为指定数组的末尾元素
- 例如
```
var arr = [1,2,3,4]
console.log(arr.push()) //4
console.log(arr) //[1,2,3]
```

**unshift** 
- 参数：不限个数
- 将每个参数插入到数组的首部
- 返回值为添加元素后数组的长度
- 例如
```
var arr = [1,2,3,4]
console.log(arr.unshift(-1,0)) //6
console.log(arr)  //[-1,0,1,2,3,4]
```

**unshift** 
- 无传入参数
- 在指定数组的头部删除一个元素
- 返回值为取出的元素
- 例如
```
var =[1,2,3,4]
console.log(arr.shift()) //1
console.log(arr)  //[2,3,4]
```

**join** 
- 传入一个字符串:将数组转成字符串输出，元素与元素之间插入输入的字符串
- 如果不传入字符串，默认以','分隔
- 返回值为一个字符串
- 例如
```
var arr = [1,2,3,4,5]
var str = arr.join(',')
console.log(str) //1,2,3,4,5
str = arr.join('');
console.log(str) //12345
str = arr.join('balabala')
console.log(str) //1balabala2balabala3balabala4balabala5
```

**splice** 
这个方法比较神奇，可以称之为终极神器
- 他有两个功能，删除和删除
- 插入：arr.splice(index,0,insertEl)
- index为要插入元素的索引,insertEl为要插入的元素，不限个数
- 返回值是一个空数组
- 例如
```
var arr = [1,2,3,4,5]
console.log(arr.splice(1,0,x,y,z))  //[]
console.log(arr) //[0,1,x,y,z,2,3,4,5]
```
- 删除：arr.splice(index,n)
- index为从哪里开始删除，n为删除元素的个数
- 返回值是删除的数组
- 例如
```
var arr = [1,2,3,4,5]
console.log(arr.splice(0,3)) //[1,2,3]
console.log(arr) //[4,5]
```
- 我们还可以一边删除一边插入
```
var arr = [1,2,3,4,5]
console.log(arr.splice(0,3,'x','y','z')) //[1,2,3]
console.log(arr)  //['x','y','z',4,5]
```



#### 写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作
```
function squareArr(arr){
    for(var i=0;i<arr.length;i++){
        arr[i]=Math.pow(arr[i],2)
    }
    return arr;
}
var arr = [2, 4, 6]
squareArr(arr)
console.log(arr) // [4, 16, 36]
```


####写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变
```
function filterPositive(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i] === 'number'){
            if(arr[i]>0){
                newArr.push(arr[i])
            }
        }
    }
    return newArr
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr) //[3, -1,  2,  '饥人谷', true]
```
