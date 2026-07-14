
//AJAX

// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "content-Type":"application/json"
//     },
//     body:JSON.stringify()
// }) 
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
        "content-Type":"application/json"
       
    },
    body:JSON.stringify()
})              
.then((response)=>{

    //console.log(response);
    return response.json();//json,text-->return promise


}).then((response)=>{
    console.log(response);

})

