const api ='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=f4d6f70e5eec52a3c782d1f921957398'

const inputvalue = document.querySelector(".input")

const windspeed  = document.querySelector(".spped")
const desc= document.querySelector('.desc')
const desc= document.querySelector('.temp')

function input(e){
e.preventDefault()    
const word = document.querySelector("#inputvalue").value
console.log(word);

fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=f4d6f70e5eec52a3c782d1f921957398'
)
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
    var descp = data.weather[0].description;
    var temp = data.main.temp;
    var windspd = data.wind.speed;

    windspeed.innerHTML = "Windspeed" + windspd;
    desc.innerHTML = desc
    temp.innerHTML = "Temprature: "+ Math.floor((temp-273.15))
  });
}

inputvalue.addEventListener('submite,input') 

