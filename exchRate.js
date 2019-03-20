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
        const flag = `https://www.countryflags.io/${countryCode}/flat/64.png`

        const orginflag = `https://www.countryflags.io/us/flat/64.png`

        $('#exRate').append(`<h5>Exchange Rate</h5><img src = ${flag} class = "imgRou">${ccSym}${Math.round(disNumero)} = </img> <img src = ${orginflag} class = "imgRou">$1000</img>`)
        // $(`#linkMove`).prepend(`<h1 class"justify-content-center">${city123}, ${country123}</h1>`)

        // console.log(filNum);


    
    });
}

$('#add-symbol').on('click', disExch);