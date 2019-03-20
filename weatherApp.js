//    //Setting City and Country code variables
//    var city;
//    var country;
   var forcast;
   var unit;
   
//    //get location from form and submit to OpenWeather via API
   function getLocation() {
       city = document.getElementById("city").value;
       country = document.getElementById("country").value;
       unit = document.querySelector('input[name="unit"]:checked').value;
       getWeatherData(city, country, unit);
       
   };

   
   function getWeatherData(city, country, unit) {
       var xmlhttp2 = new XMLHttpRequest();
       var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + city123 + "," + iCode + "&units=" + "imperial" + "&APPID=12130ccc01d4f8cb6ed11ff701683e10";
       xmlhttp2.onload = function () {
           var results = JSON.parse(this.responseText);
           utilizeData(results);

       }
       xmlhttp2.open("GET", url, true);
       xmlhttp2.send(null);
       }

   function processTime() {
       var date = new Date();
       var hours = date.getHours();
       var minutes = "0" + date.getMinutes();
       var seconds = "0" + date.getSeconds();
       var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
       return formattedTime;

   }

   function utilizeData(results) {
       var location = results.city.name;
       var minTemp = results.list[0].main.temp_min;
       var maxTemp = results.list[0].main.temp_max;
       var temp = results.list[0].main.temp;
       var time = processTime(results.list[0].dt);
       var weather = results.list[0].weather.main;
       var description = results['list'][0]['weather'][0]['description'];
       var iconID = results['list'][0]['weather'][0]['icon'];
       var day1temp = results['list'][5]['main']['temp'];
       var day1desc = results['list'][5]['weather'][0]['description'];
       var day2temp = results['list'][6]['main']['temp'];
       var day2desc = results['list'][6]['weather'][0]['description'];
       var day3temp = results['list'][7]['main']['temp'];
       var day3desc = results['list'][7]['weather'][0]['description'];
       var day4temp = results['list'][8]['main']['temp'];
       var day4desc = results['list'][8]['weather'][0]['description'];
       var day5temp = results['list'][9]['main']['temp'];
       var day5desc = results['list'][9]['weather'][0]['description'];

       
       //Current weather row 
       var weatherHTML = document.getElementById("city");
       document.getElementById("city2").innerHTML = "<h4> Current weather: " + location  + "</h4>";
       var iconURL = document.getElementById("weather-icon").innerHTML = "<img src='http://openweathermap.org/img/w/" + iconID + ".png' height='125' width='125'></img>";
       var tempUnit = '°F';
       document.getElementById("current").innerHTML = "<h2>" + temp + tempUnit + "</h2>";
       document.getElementById("description").innerHTML = "<h3>   " + description + "</h3>";
       // End Current weather row 

       //Forcast row
       document.getElementById("forcast-day").innerHTML = "5-Day Forecast";
       document.getElementById("1day").innerHTML = "<h3>" + day1temp + tempUnit + "</h3>" + "<p> " + day1desc + "</p>";
       document.getElementById("2day").innerHTML = "<h3>" + day2temp + tempUnit + "</h3>" + "<p> " + day2desc + "</p>";
       document.getElementById("3day").innerHTML = "<h3>" + day3temp + tempUnit + "</h3>" + "<p> " + day3desc + "</p>";
       document.getElementById("4day").innerHTML = "<h3>" + day4temp + tempUnit + "</h3>" + "<p> " + day4desc + "</p>";
       document.getElementById("5day").innerHTML = "<h3>" + day4temp + tempUnit + "</h3>" + "<p> " + day5desc + "</p>";

            
}