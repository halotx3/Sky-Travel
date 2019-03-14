   //geolocation on button press
    var startPos;
    var city;
    var country;
    var forcast;
    var unit;
    document.getElementById("geolocate").onclick = function () {
        var geoSuccess = function (position) {
            startPos = position;
            //console.log(startPos.coords.longitude);
            lookupCoord(startPos.coords.longitude, startPos.coords.latitude);
        };
        var geoError = function (error) {
            console.log('Error occurred. Error code: ' + error.code);
        };
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    };

    //get location from form and submit to OpenWeather via API
    function getLocation() {
        city = document.getElementById("city").value;
        country = document.getElementById("country").value;
        unit = document.querySelector('input[name="unit"]:checked').value;
        getWeatherData(city, country, unit);
        // alert(url);
    };

    // function lookupCoord(lon, lat) {
    //     var xmlhttp = new XMLHttpRequest();
    //     var degree = document.querySelector('input[name="unit"]:checked').value;
    //     var url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=" + degree + "&APPID=12130ccc01d4f8cb6ed11ff701683e10";

    //     xmlhttp.onload = function () {
    //         console.log("geobutton");
    //         var results = JSON.parse(this.responseText);
    //         utilizeData(results);

    //     }
    //     xmlhttp.open("GET", url, true);
    //     xmlhttp.send();
    // }

    function getWeatherData(city, country, unit) {
        var xmlhttp2 = new XMLHttpRequest();
        var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&units=" + unit + "&APPID=12130ccc01d4f8cb6ed11ff701683e10";
        alert(url);
        xmlhttp2.onload = function () {
            console.log("form");
            var results = JSON.parse(this.responseText);
            utilizeData(results);

        }
        xmlhttp2.open("GET", url, true);
        xmlhttp2.send(null);
        // alert("test");
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


        var weatherHTML = document.getElementById("city");
        // document.getElementById("city2").innerHTML = "<h4> Current weather for " + location + " at " + time + "</h4>";
        document.getElementById("city2").innerHTML = "<h4> Current weather for " + location + "</h4>";
        var iconURL = document.getElementById("weather-icon").innerHTML = "<img src='http://openweathermap.org/img/w/" + iconID + ".png' height='105' width='105'></img>";
        var tempUnit = "";
        if (document.querySelector('input[name="unit"]:checked').value === 'imperial') tempUnit = '°F';
        else tempUnit = '°C';
        document.getElementById("current").innerHTML = "<h2>" + temp + tempUnit + "</h2>";
        document.getElementById("description").innerHTML = "<p>   " + description + "</p>";
        document.getElementById("1day").innerHTML = "<h3>" + day1temp + tempUnit + "</h3>" + "<p>Day 2: " + day1desc + "</p>";
        document.getElementById("2day").innerHTML = "<h3>" + day2temp + tempUnit + "</h3>" + "<p>Day 3: " + day2desc + "</p>";
        document.getElementById("3day").innerHTML = "<h3>" + day3temp + tempUnit + "</h3>" + "<p>Day 4: " + day3desc + "</p>";
        document.getElementById("4day").innerHTML = "<h3>" + day4temp + tempUnit + "</h3>" + "<p>Day 5: " + day4desc + "</p>";
        document.getElementById("5day").innerHTML = "<h3>" + day4temp + tempUnit + "</h3>" + "<p>Day 6: " + day5desc + "</p>";
        document.getElementById("forcast-day").innerHTML = "5-Day Forcast";
}
