let queryURL = 'https://api.exchangeratesapi.io/latest?base=USD'

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response){
    console.log(response)
})

let testURL = 'https://cors-anywhere.herokuapp.com/https://www.travel-advisory.info/api'

// $.ajax({
//     url: testURL,
//     method: 'GET',
//     dataType: 'json'
// }).then(function(response){
//     console.log(response)
// })

// function createCORSRequest(method, url){
//     var xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr){
//         xhr.open(method, url, true);
//     } else if (typeof XDomainRequest != "undefined"){
//         xhr = new XDomainRequest();
//         xhr.open(method, url);
//     } else {
//         xhr = null;
//     }
//     return xhr;
// }

// let request = createCORSRequest("GET", testURL);
// if (request){
//     request.onload = function(){
//         //do something with request.responseText
//         console.log(request.responseText)
//     };
//     request.send();
// }