let rateURL = 'http://data.fixer.io/api/latest?access_key=315e444767a8513773b1071ac802f101&symbols&format=1';

disExch();

function disExch() {
    $.ajax({
        url: rateURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        let truBase = response.rates.USD;
        console.log(truBase)
        console.log(conCur)
    });
}
