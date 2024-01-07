// select the elements globally that i will use in any function:

let searchInput= document.querySelector("#mysearchinput");
let findBtn= document.querySelector('#findBtn');
var date="";
var countryName="";
var tempDegree="";
var icon="";
var text="";
var alldays=["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let allWeatherData=[];
var humidity="";
var wind= "";
var pressure="";
var forecast1="";
var forecast2="";

// async function display(){
  
// if(localStorage.getItem("allWeatherData") != null){
//   allWeatherData= JSON.parse(localStorage.getItem("allWeatherData")) 
//  await searchWeather(searchCountry);
//  displayWeather();
// }
// }
// display();
// start of function for my current location
async function getLocation(){
  let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f80d4600a3df4cafa3d181730240301&q=cairo
  &days=3`);
  //  console.log(response);
   let data = await response.json();
   
    // console.log(data);
    

  
  date=data.current.last_updated;
  tempDegree=Math.round(data.current.feelslike_c);
 //  icon=data.current.condition.icon; it did not work at all so i used a static img for all the divs,
    countryName= data.location.country;
    text=data.current.condition.text;
    humidity=data.current.humidity;
    wind=data.current.wind_degree;
    pressure=data.current.pressure_in;
    forecast1= data.forecast.forecastday[1].date;
    forecast2= data.forecast.forecastday[2].date;
 
 allWeatherData.push(date,tempDegree,countryName,text,humidity,wind, pressure,alldays[0])
 localStorage.setItem("allWeatherData", JSON.stringify(allWeatherData));

};
async function myDisplay(){
  await getLocation();
  displayWeather();
}
myDisplay();
// end of the function


// var myDate = new Date(date.replace(" ", "T"));


for(var i =0; i<=alldays.length; i++){
  // console.log(alldays);
}






// result of the Api that I will use to create the app.
async function searchWeather(searchCountry){
  let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f80d4600a3df4cafa3d181730240301&q=${searchCountry}
  &days=3`);
  //  console.log(response);
   let data = await response.json();
   
    console.log(data);
    

  
  date=data.current.last_updated;
  tempDegree=Math.round(data.current.feelslike_c);
 //  icon=data.current.condition.icon; it did not work at all so i used a static img for all the divs,
    countryName= data.location.country;
    text=data.current.condition.text;
    humidity=data.current.humidity;
    wind=data.current.wind_degree;
    pressure=data.current.pressure_in;
    forecast1= data.forecast.forecastday[1].date;
    forecast2= data.forecast.forecastday[2].date;
 
 allWeatherData.push(date,tempDegree,countryName,text,humidity,wind, pressure,alldays[0,1,2], forecast1, forecast2)
 localStorage.setItem("allWeatherData", JSON.stringify(allWeatherData));
};

findBtn.addEventListener("click", searchWeather)
searchInput.addEventListener("keyup", async function(e){
//  console.log(e.target);
 await searchWeather(e.target.value);
  displayWeather();
})
function displayWeather(){
  var container= ""
 
    container+=`<div class="col-lg-4">
<div class="firstcard card p-5">
 <div class="cardheadings d-flex justify-content-between align-items-center">
  <p>${alldays[0]}</p>
  <p>${date}</p>
 </div>
 <div class="cardbody ">
 <p>${countryName}</p>
 <div class="weathercase d-flex justify-content-start align-items-center">
  <p class=mytemp>${tempDegree} C</p>
 <img src="./imgs/logo.png" alt="image"  class="w-25" />
 </div>
 <h5>${text}</h5>
 <div class="info d-flex justify-content-evenly align-items-start flex-unwrap">
    <h4>${humidity} %</h4>
    <h5>${wind} (km/h)</h5>
    <p>${pressure}PGF</p>
   </div>
 
 
 </div>

</div>
</div>
<div class="col-lg-4">
<div class="firstcard card p-5">
 <div class="cardheadings d-flex justify-content-between align-items-center">
  <p>${alldays[1]}</p>
  <p>${forecast1}</p>
 </div>
 <div class="cardbody ">
 <p>${countryName}</p>
 <div class="weathercase d-flex justify-content-start align-items-center">
  <p class=mytemp>${tempDegree} C</p>
 <img src="./imgs/logo.png" alt="image"  class="w-25" />
 </div>
 <h5>${text}</h5>
 <div class="info d-flex justify-content-evenly align-items-start flex-unwrap">
    <h4>${humidity} %</h4>
    <h5>${wind} (km/h)</h5>
    <p>${pressure}PGF</p>
   </div>
 
 
 </div>

</div>
</div>
<div class="col-lg-4">
<div class="firstcard card p-5">
 <div class="cardheadings d-flex justify-content-between align-items-center">
  <p>${alldays[2]}</p>
  <p>${forecast2}</p>
 </div>
 <div class="cardbody ">
 <p>${countryName}</p>
 <div class="weathercase d-flex justify-content-start align-items-center">
  <p class=mytemp>${tempDegree} C</p>
 <img src="./imgs/logo.png" alt="image"  class="w-25" />
 </div>
 <h5>${text}</h5>
 <div class="info d-flex justify-content-evenly align-items-start flex-unwrap">
    <h4>${humidity} %</h4>
    <h5>${wind} (km/h)</h5>
    <p>${pressure}PGF</p>
   </div>
 
 
 </div>

</div>
</div>`
  

 document.querySelector(".myinnerinfo").innerHTML=container
 


}



// // forecast function
// async function getForecast() {

//   var response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f80d4600a3df4cafa3d181730240301&q=cairo
//   &days=3`);
//   //  console.log(response);
//    let data = await response.json();
   
//     console.log(data.forecast.forecastday[0].date);
    

// }

// getForecast()