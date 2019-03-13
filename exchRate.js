let queryURL = 'https://api.exchangeratesapi.io/latest?base=USD'

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response){
    console.log(response)
})