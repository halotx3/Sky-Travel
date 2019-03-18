let rateURL = 'http://data.fixer.io/api/latest?access_key=315e444767a8513773b1071ac802f101&symbols&format=1';
let ratesList = [];


function disExch() {
    $.ajax({
        url: rateURL,
        method: 'GET'
    }).then(function (response) {
        let tVal = response.rates.USD;
        let rateNum = response.rates[cccode123];
        let truBase = response.rates.EUR / tVal;
        let truRate = response.rates.EUR / rateNum;
        $('#exRate').empty();
        console.log(response);

        let finRate = truBase/truRate;
        console.log(rateNum);
        console.log(cccode123);
        console.log(truBase);
        console.log(finRate);
        let disNumero = 1000 * finRate;

        console.log(disNumero)


        // console.log(filNum);


    
    });
}

$('#add-symbol').on('click', disExch)

// let counI2 = [];

// const testapi = function () {
//     const url = 'https://cors-anywhere.herokuapp.com/https://www.travel-advisory.info/api'
    
//     $.ajax({
//       url: url,
//       method: 'GET',
//       headers: {'Access-Control-Allow-Origin':'*'
//    }
//     }).then(function (response) {

//         console.log(response)
//         let country = response.data.AD.name; 
//         let score = response.data.AD.advisory.score; 

//         for(i=0; i < response.data.length; i++){
//             counI2.push(response.data[i].iso_alpha2);
//         }
        
//         console.log(counI2)
//         // countryList.push(response[i].data.AD.advisory.score);
//         //  countryList.push(response.data.AD.name);  
         
//         console.log(score)
//          console.log(country)
//          console.log(country)
         
//     })
//    }