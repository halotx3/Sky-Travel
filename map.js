let isLat = "";
let isLong = "";



const runmaps = function (){

  $('#maps').empty();


  let bingapiKey = 'All76BMDd7uSLFuD_JOKaiN4s6oks1eCPeu57VjZhtGU2Et3LZmQbobQPf0hmns5'
  // http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/47.619048,-122.35384/15?mapSize=500,500&pp=47.620495,-122.34931;21;AA&pp=47.619385,-122.351485;;AB&pp=47.616295,-122.3556;22&mapMetadata=1&o=xml&key={BingMapsAPIKey}
  let bingurl = `https://cors-anywhere.herokuapp.com/http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${isLat},${isLong}/15?mapSize=500,500&pp${isLat},${isLong}i&key=${bingapiKey}`

  // http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/25.7991505920703,-80.1271524263234/15?mapSize=500,500;&pp=25.7991505920703,-80.1271524263234&key=All76BMDd7uSLFuD_JOKaiN4s6oks1eCPeu57VjZhtGU2Et3LZmQbobQPf0hmns5
  $.ajax({
      url: bingurl,
      method: 'GET'
  }).then(function(data) {
    $('#maps').append(`<img src="${bingurl}"></img>`);

  })
  }

const findLocation = function (){
  let latitude = '';
  let longitude = '';

}
$('.card-title').on('click', runmaps)
