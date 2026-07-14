const city=document.querySelector("#city");
const results=document.querySelector("#results");
const suggestions=document.querySelector("#suggestions");
const searchBtn=document.querySelector("#searchBtn");
const apikey="53dc97a2d15c3fc0863adb69318002ab";
//actions
searchBtn.addEventListener("click",()=>{
    getWeather(city.value);

})
city.addEventListener("input",()=>{
    //console.log("Change...")
    const url=`https://api.openweathermap.org/geo/1.0/direct?q=${city.value}&appid=${apikey}&limit=5`;
    fetch(url).then((response)=>{
        return response.json();
    }).then((response)=>{
        console.log(response);
        suggestions.innerHTML='';

       response.forEach((item)=>{

        const cityDiv=document.createElement("div");
        cityDiv.innerHTML=item.name+" ,"+item.country;
        suggestions.append(cityDiv);
        cityDiv.addEventListener("click",()=>{
            city.value=cityDiv.innerHTML;
            suggestions.innerHTML='';

        })

       })

    })
})
function getWeather(city)
{

    //fetch("https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid="+apikey+"")

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    //console.log(url);
    fetch(url).then((response)=>{
        return response.json();
    }).then((response)=>{
        console.log(response);

        results.innerHTML="Temprature :"+response.main.temp;

        console.log(response);
    })
}
