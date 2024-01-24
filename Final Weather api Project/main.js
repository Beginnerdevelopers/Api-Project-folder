let input=document.getElementById("input")
let btn=document.getElementById("btn")
let cloud=document.getElementById("cloud")
let description = document.getElementById("description")
let icon = document.getElementById("icon")
let f = document.getElementById("f")
let h = document.getElementById("h")
let p = document.getElementById("p")
let w = document.getElementById("w")
Weatherdata=async ()=>{
let data = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${"f714176e65b3c0b71f04e8c62046723d"}`)
let response=await data.json()
console.log(response)
cloud.innerHTML=response.weather[0].main
description.innerHTML=response.weather[0].description
icon.innerHTML=response.weather[0].icon
f.innerHTML=response.main.feels_like
h.innerHTML=response.main.humidity 
w.innerHTML=response.wind.speed 
p.innerHTML=response.main.pressure 


}


btn.addEventListener('click',Weatherdata)