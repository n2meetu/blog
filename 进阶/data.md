#### 写一个函数getChIntv，获取从当前时间到指定日期的间隔时间
```
var str = getChIntv("2017-02-08");
console.log(str);  // 距除夕还有 20 天 15 小时 20 分 10 秒
```
```
function getChIntv(date){
    var endDate = new Date()  //获取当前时间
    var startDate = new Date(date)  //获取指定日期
    var timeLine = endDate - startDate
    console.log(timeLine)
    var days = Math.floor(timeLine/1000/60/60/24)
    timeLine = timeLine - days*1000*60*60*24
    var hours = Math.floor(timeLine/1000/60/60)
    timeLine = timeLine - hours*1000*60*60
    var minutes = Math.floor(timeLine/1000/60)
    timeLine = timeLine - minutes*1000*60
    var seconds = Math.floor(timeLine/1000)
    // console.log(days+'天'+hours+'小时'+minutes+'分'+seconds+'秒')
    str='距除夕还有'+days+'天'+hours+'小时'+minutes+'分'+seconds+'秒'
    return str;
}
```



#### 把hh-mm-dd格式数字日期改成中文日期
```
function getChsDate (date){
    var str=''
    var chinaDate=new Date(date)
    var arrNum = ['零','一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六',
            '十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六',
            '二十七','二十八','二十九','三十','三十一']    
    var strTime = chinaDate.toLocaleDateString()
    console.log(strTime)
    var num=0
    var arrStr=['年','月','日']
    for(var i=0;i<strTime.length;i++){
        if(strTime[i]=='/'){
            str+=arrStr[num]
            num++
            continue
        }
        str+=arrNum[strTime[i]]
    }
    str+=arrStr[num]
    return str
}
var str = getChsDate('2015-01-08');
console.log(str);  // 二零一五年一月八日
```



#### 写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串:
- 刚刚（ t 距当前时间不到1分钟时间间隔）
- 3分钟前 (t距当前时间大于等于1分钟，小于1小时)
- 8小时前 (t 距离当前时间大于等于1小时，小于24小时)
- 3天前 (t 距离当前时间大于等于24小时，小于30天)
- 2个月前 (t 距离当前时间大于等于30天小于12个月)
- 8年前 (t 距离当前时间大于等于12个月)
```
function friendlyDate(time){
    var endDate = new Date()  //获取当前时间
    var timeLine = endDate-time
    console.log(timeLine)
    var arrTime = [60*1000,60*60*1000,60*60*24*1000,60*60*24*30*1000,60*60*24*30*12*1000]
    if(timeLine<arrTime[0]){
        return '刚刚'
    }else if (timeLine>arrTime[0] && timeLine<arrTime[1]){
        return '3分钟前'
    }else if(timeLine>=arrTime[1] && timeLine<arrTime[2]){
        return '8小时前'
    }else if(timeLine>=arrTime[2] && timeLine<arrTime[3]){
        return '3天前'
    }else if(timeLine>=arrTime[3] && timeLine<arrTime[4]){
        return '2个月前'
    }else if(timeLine>=arrTime[4]){
        return '8年前'
    }
}
var str = friendlyDate('1502530863518') //  1分钟前
var str2 = friendlyDate('1499941245793') //4天前
console.log(str)
console.log(str2)
```