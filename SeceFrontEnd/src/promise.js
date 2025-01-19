/*function promiseEg(flag){
    return new Promise(function(resolve,reject){
        if(flag===1)
        {
            resolve("This is a Promise resolved Example")
        }
        else if(flag===0){
            reject("This is a Promise reject Example")
        }
    })
}
promiseEg(0).then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej);
})
*/
//Promise-Location finder example
//Pass 2 things - SECE,2000
locationFinder("Melbourne",2000).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
});
locationFinder=(location,time)=>{
    return new Promise(()=>{
        if(isLocationValid(location,time)){
            locFound(location,"Found in",time,"secs")
        }
        else{
            locNotFound(location,"Not in",time,"secs")
        }
    })
    
}
function isLocationValid(loc,time){
    location="Melbourne"
    t=2000
    if(loc===location && time<=t)
    {
        return true
    }
    else{
        return false
    }
}