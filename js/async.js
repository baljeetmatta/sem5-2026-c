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