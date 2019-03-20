let value = '';
let latitude = '';
let longitude = '';
let business = '';
let getContent ='';


const enterCountry = function (){
  let city_state =(`${city123},${region123}`);
  let city_country = (`${city123},${country123}`)
  let name = $("#f_elem_city").val()


  if (name.indexOf("United States") != -1) {


    console.log("appending city")
    $('#f_elem_city').val('')

    value = city_state

  }
   else {
    console.log("appending country")
    $('#f_elem_city').val('')
     value = city_country

  }
}

const runRestaurants = function (event){
  event.preventDefault();
  $('#toDo').empty()

  let location = value
  let restaurants = $('#restaurants').text();
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?&term=${restaurants}&location=${location}&limit=5`
  let apiKey = 'Eg5mm-1rhlDzCfKO0hWK76f3iUiRBjk1EDj1yL4SysqyFHmzWCzRTVj0JEfBMuIOX7d1YmaVkKqBoE4kXvZLfawK6DO3uhegkyU7kDRqRDPqI69AqIUrYxkCaw6DXHYx'

  $.ajax({
      url: url,
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      method: 'GET'
  }).then(function(data) {
    const businesses = data.businesses
     for (let i = 0; i < businesses.length; i++){
       if (businesses[i].rating >= 4){
         latitude = businesses[i].coordinates.latitude;
         longitude = businesses[i].coordinates.longitude;
         $('#toDo').append(`<img class="float-right images" src="${businesses[i].image_url}" align="right" width="160" height="160"></img><br>`);
         $('#toDo').append(`<h2 id="${i}" class="bg-light" data-lat="${latitude}" data-long="${longitude}">${businesses[i].name}</h2>`);
         $('#toDo').append(`<p> ${businesses[i].location.address1}</p>`);
         $('#toDo').append(`<p> ${businesses[i].location.city}</p>`);
         $('#toDo').append(`<p> ${businesses[i].phone}</p>`);
       }
    }
  })
}

const runEntertainment = function (event){
  event.preventDefault();
  $('#toDo').empty()
  let entertainment = $('#entertainment').text();
  let location = value
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?&term=${entertainment}&location=${location}&limit=5`
  let apiKey = 'Eg5mm-1rhlDzCfKO0hWK76f3iUiRBjk1EDj1yL4SysqyFHmzWCzRTVj0JEfBMuIOX7d1YmaVkKqBoE4kXvZLfawK6DO3uhegkyU7kDRqRDPqI69AqIUrYxkCaw6DXHYx'

  $.ajax({
      url: url,
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      method: 'GET'

  }).then(function(data) {
    const businesses = data.businesses
    for (let i = 0; i < businesses.length; i++){
      if (businesses[i].rating = 5){
        latitude = businesses[i].coordinates.latitude;
        longitude = businesses[i].coordinates.longitude;
        $('#toDo').append(`<img class="float-right images" src="${businesses[i].image_url}" width="160" height="160"></img><br>`);
        $('#toDo').append(`<h2 id="${i}" class="bg-light" data-lat="${latitude}" data-long="${longitude}">${businesses[i].name}</h2>`);
        $('#toDo').append(`<p> ${businesses[i].location.address1}</p>`);
        $('#toDo').append(`<p> ${businesses[i].location.city}</p>`);
        $('#toDo').append(`<p> ${businesses[i].phone}</p>`);

      }
    }
})
}

const runHistoric = function (event){
  event.preventDefault();
  $('#toDo').empty()
  let historic = $('#historic').text();
  let location = value
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?&term=${historic}&location=${location}&limit=5`
  let apiKey = 'Eg5mm-1rhlDzCfKO0hWK76f3iUiRBjk1EDj1yL4SysqyFHmzWCzRTVj0JEfBMuIOX7d1YmaVkKqBoE4kXvZLfawK6DO3uhegkyU7kDRqRDPqI69AqIUrYxkCaw6DXHYx'

  $.ajax({
      url: url,
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      method: 'GET'

  }).then(function(data) {
    const businesses = data.businesses
    for (let i = 0; i < businesses.length; i++){
      if (businesses[i].rating >= 4){
        latitude = businesses[i].coordinates.latitude;
        longitude = businesses[i].coordinates.longitude;
        $('#toDo').append(`<img class="float-right images" src="${businesses[i].image_url}" width="160" height="160"></img><br>`);
        $('#toDo').append(`<h2 id="${i}" class="bg-light" data-lat="${latitude}" data-long="${longitude}">${businesses[i].name}</h2>`);
        $('#toDo').append(`<p> ${businesses[i].location.address1}</p>`);
        $('#toDo').append(`<p> ${businesses[i].location.city}</p>`);
        $('#toDo').append(`<p> ${businesses[i].phone}</p>`);
      }
    }
})
}
const runNightLife = function (event){
  event.preventDefault();
  $('#toDo').empty();
  let nightLife = $('#nightlife').text().trim();
  let location = value
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?&term=${nightLife}&location=${location}&limit=5`
  let apiKey = 'Eg5mm-1rhlDzCfKO0hWK76f3iUiRBjk1EDj1yL4SysqyFHmzWCzRTVj0JEfBMuIOX7d1YmaVkKqBoE4kXvZLfawK6DO3uhegkyU7kDRqRDPqI69AqIUrYxkCaw6DXHYx'

  $.ajax({
      url: url,
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      method: 'GET'

  }).then(function(data) {
    const businesses = data.businesses
    for (let i = 0; i < businesses.length; i++){
      if (businesses[i].rating >= 3){
      latitude = businesses[i].coordinates.latitude;
      longitude = businesses[i].coordinates.longitude;
      $('#toDo').append(`<img class="float-right images" src="${businesses[i].image_url}" width="160" height="160"></img><br>`);
      $('#toDo').append(`<h2 id="${i}" class="bg-light" data-lat="${latitude}" data-long="${longitude}">${businesses[i].name}</h2>`);
      $('#toDo').append(`<p> ${businesses[i].location.address1}</p>`);
      $('#toDo').append(`<p> ${businesses[i].location.city}</p>`);
      $('#toDo').append(`<p> ${businesses[i].phone}</p>`);
      }
    }
  })
}

const getLat_Long = function (event){

  let getLat = $(`#${event.target.id}`).attr("data-lat")
  let getLong = $(`#${event.target.id}`).attr("data-long")

  if (!(getLat == undefined && getLong == undefined )){
    isLat = getLat;
    isLong = getLong;
  }
  else {
    alert("Click on Company Name")
  }

  console.log(getLat);
   console.log(getLong);
};





$('.card-title').on('click', getLat_Long);
$('#restaurants').on('click',runRestaurants);
$('#entertainment').on('click', runEntertainment);
$('#historic').on('click', runHistoric);
$('#nightlife').on('click', runNightLife);
$('#add-symbol').on('click',enterCountry);
