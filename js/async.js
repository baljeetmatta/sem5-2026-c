const startBtn=document.querySelector("#startBtn");
const stopBtn=document.querySelector("#stopBtn");
const counter=document.querySelector("#counter");
let count=1;
let intervalId=0;
startBtn.addEventListener("click",()=>{
    count=1;
    clearInterval(intervalId);
    
   intervalId= setInterval(increment,500);

})
stopBtn.addEventListener("click",()=>{

    clearInterval(intervalId);

})
function increment()
{
    counter.innerHTML=count++;

    

}
//Promise
//Pending, Fulfilled, rejected
let number=16;
const evenNumberPromise=new Promise(function(resolve,reject){

    setTimeout(()=>{
    if(number%2==0)
        resolve({number,msg:'even'});
    else
        reject(number);
},1000);
    
});
// console.log(evenNumberPromise);
evenNumberPromise.then((data)=>{
    console.log("number is even",data)
}).catch(()=>{
    console.log("number is not even");

})
// const testPromise=new Promise(function(resolve,reject){

//     reject();

// });

// // Promise([evenNumberPromise,testPromise]).then(()=>{
// // console.log("Promise Resolved");
// // }).catch(()=>{
// //     console.log("Promise Rejected");

// // })

// const promiseOne=new Promise(function(resolve,reject){

//     setTimeout(()=>{
//         console.log("one")
//         resolve();

//     },500);
// })
// const promiseTwo=new Promise(function(resolve,reject){

//     setTimeout(()=>{
//         console.log("two")
//         reject();
        
//     },300);
// })

// Promise.race([promiseOne,promiseTwo]).then(()=>{

//     console.log('Resolved');

// }).catch(()=>{
//     console.log("Rejected");
// });


