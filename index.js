storage["a"]=1;


Storage.set('name', '饥人谷') 
Storage.set('age', 2, 30) ;  //设置 name 字段存储的值为'饥人谷'
Storage.set('teachers', ['ruoyu', 'fangfang', 'tom'],  60)

Storage.get('name')   // ‘饥人谷’
Storage.get('age')     //  如果不超过30秒，返回数字类型的2；如果超过30秒，返回 undefined，并且 localStorage 里清除 age 字段
Storage.get('teachers')  //如果不超过60秒，返回数组； 如果超过60秒，返回undefined


let Storage =  (function(){
    return{
        set: (key,value,timeOut)=>{
            localStorage[key] = JSON.stringify({
                value: value,
                timeOut: timeOut === undefined?undefined:(Date.now()+timeOut*1000)
            })
        },
        get: (key) => {
            if(localStorage[key]===undefined){
                console.log('no exist')
                return
            }
            let localValue = JSON.parse(localStorage[key])

            if(localValue.timeOut > Date.now || localValue.timeOut===undefined){
                console.log(1)
                return localValue.value
            }else {
                console.log(2)
                delete localStorage[key]
                return 
            }
        }
    }
})()