let value ='';


const enterCountry = function (){
  let city_state =(`${city123},${region123}`);
  let city_country = (`${city123},${country123}`)
  let name = $("#f_elem_city").val()


  if (name.indexOf("United States") != -1) {


    console.log("appending city")
    $('#f_elem_city').val('')

    value = city_state
    console.log(value)
  }
   else {
    console.log("appending country")
    $('#f_elem_city').val('')
     value = city_country
     console.log(value)
  }
}

const runRestaurants = function (event){
  event.preventDefault();
  $('#toDo').empty()

  let location = value
  let restaurants = $('#restaurants').text();
  console.log(`Checking.....${restaurants}`)
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
       console.log(businesses)
       if (businesses[i].rating >= 4){
       $('#toDo').append(`<img class="images" src="${businesses[i].image_url}"  width="180" height="180"></img><br>`);
       $('#toDo').append(`<h3>${businesses[i].name}</h3>`);
       $('#toDo').append(`<p>Address: ${businesses[i].location.address1}</p>`);
       $('#toDo').append(`<p>City: ${businesses[i].location.city}</p>`);
       $('#toDo').append(`<p>Phone: ${businesses[i].phone}</p>`);
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
      $('#toDo').append(`<img class="images" src="${businesses[i].image_url}" width="180" height="180"></img>`);
      $('#toDo').append(`<h3>${businesses[i].name}</h3>`);
      $('#toDo').append(`<p>Address: ${businesses[i].location.address1}</p>`);
      $('#toDo').append(`<p>City: ${businesses[i].location.city}</p>`);
      $('#toDo').append(`<p>Phone: ${businesses[i].phone}</p>`);
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
      $('#toDo').append(`<img class="images" src="${businesses[i].image_url}" width="180" height="180"></img>`);
      $('#toDo').append(`<h3>${businesses[i].name}</h3>`);
      $('#toDo').append(`<p>Address: ${businesses[i].location.address1}</p>`);
      $('#toDo').append(`<p>City: ${businesses[i].location.city}</p>`);
      $('#toDo').append(`<p>Phone: ${businesses[i].phone}</p>`);
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
      if (businesses[i].rating >= 4){
      $('#toDo').append(`<img class="images" src="${businesses[i].image_url}" width="180" height="180"></img>`);
      $('#toDo').append(`<h3>${businesses[i].name}</h3>`);
      $('#toDo').append(`<p>Address: ${businesses[i].location.address1}</p>`);
      $('#toDo').append(`<p>City: ${businesses[i].location.city}</p>`);
      $('#toDo').append(`<p>Phone: ${businesses[i].phone}</p>`);
      }
    }
  })
}


$('#restaurants').on('click',runRestaurants);
$('#entertainment').on('click', runEntertainment);
$('#historic').on('click', runHistoric);
$('#nightlife').on('click', runNightLife);
$('#add-symbol').on('click',enterCountry);
