
let weather = {
    apikey: "aa5656d1cba544426e89faf2c5ac489e",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=aa5656d1cba544426e89faf2c5ac489e"
      )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon , description} = data.weather[0];
        const {temp , humidity}= data.main;
        const {speed}= data.wind;
        const {country}= data.sys;
        const date =new Date(data.dt*1000-(data.timezone*1000));
        const dat=date.getDate();
        const month=date.getMonth();
        const mont=['Jan','Feb','March','Apr','May','June','July','Aug','Sep','Oct','Nov', 'Dec'];
        const monthName=mont[month];
        const year=date.getFullYear();
        const day=date.getDay();
        const dayArr=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const dayName=dayArr[day];
        const visibility=data.visibility;
        document.querySelector(".city").innerHTML ="Weather in "+ name+", "+country;
        document.querySelector(".temp").innerHTML= temp +"°C";
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML ="Humidity: "+humidity+" %";
        document.querySelector(".wind").innerHTML = "Wind speed: "+speed +"km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".date").innerHTML= dayName + ", "+dat +" "+monthName+" "+year;
        document.querySelector(".visibility").innerHTML= 'Visibility: '+visibility+ ' m';
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?"+ name+"')";
      },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
  };
  
  document.querySelector(".search button")
  .addEventListener("click",function(){
      weather.search();
  })
  
  document.querySelector(".search-bar")
  .addEventListener("keyup", function(event){
      if(event.key == "Enter"){
          weather.search();
      }
  })
  
  weather.fetchWeather("Patna");
  