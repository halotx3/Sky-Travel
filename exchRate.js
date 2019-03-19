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

        $('#exRate').append(`<p>${ccSym}${Math.round(disNumero)} is worth about $1000</p>`)


        // console.log(filNum);


    
    });
}

$('#add-symbol').on('click', disExch);