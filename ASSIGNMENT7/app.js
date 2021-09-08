let inp = document.querySelector("input");
let btn = document.getElementById("btn");
let w_type = document.getElementById("w_type");
let place = document.getElementById("inp_text");
let speed = document.getElementById("speed");
let app_temp = document.getElementById("app_temp");
let tempVal = document.getElementById("tempVal");
let w_date = document.getElementById("w_date");

def();

function def(){
    weatherReport("noida");
}

btn.addEventListener("click",(e) =>{
    e.preventDefault();
    let inpVal = inp.value;
    weatherReport(inpVal);
  
});

function weatherReport(inpVal){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inpVal}&appid=7fdcc4cf3282284223d81880412757b4`)
    
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{ 
        let input_val = data.weather[0].description;
        w_type.innerHTML = input_val;

        input_val = new Date(2021,8,8).toDateString();
        w_date.innerHTML = input_val;

        place.innerHTML =  inpVal.toUpperCase();

        input_val = parseInt(data.main.temp-273);
        app_temp.innerHTML = input_val+"°C";

        input_val = parseInt(data.main.temp_min-273);
        let input_val2 = parseInt(data.main.temp_max-273);
        tempVal.innerHTML = input_val+"°C (min) / "+input_val2+"°C (max)";

        input_val = data.wind.speed;
        speed.innerHTML = input_val+" kms";
        inp.value = "";
      
    }) 

    .catch((err)=>{
        alert("Enter a Place");
        console.log(err.message);
    });
}