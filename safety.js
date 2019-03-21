

const testapi = function (event) {
    $('.countryName').empty()
    $('.message').empty()
    const url = 'https://cors-anywhere.herokuapp.com/https://www.travel-advisory.info/api'

    $.ajax({
        url: url,
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).done(function (response) {
        // for (let rating in ratings) {
        // let country = ;
        
        //Method to get the country and score passed from api
        let ratings = {
            [`${response.data[iCode].name}`]: `${response.data[iCode].advisory.score}`
        }
        console.log(`Top Rating ${ratings}`);
        console.log(ratings);

        // console.log(ratings);

        function getRatings() {

            //Total Stars
            const starsTotal = 5;

            //Displays message from the api
            let message = `<p>${response.data[iCode].advisory.message}</p>`
            $('.message').append(message);
            console.log(message); 

            for (let rating in ratings) {
                //Get Percentage
                const starPercentage = (ratings[rating] / starsTotal) * 100;
                console.log(`starPercentage ${starPercentage}`);


                //Round to the nearest 10
                const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
                console.log(`starPercentageRound ${starPercentageRounded}`);
                $('.country').addClass(`${rating}`);
                $('.countryName').append(`${response.data[iCode].name}`);
                //Set width of stars -inner to percentage
                document.querySelector(`.country .stars-inner`).style.width = starPercentageRounded;

                console.log(`This is the Alpha2/Country Code ${iCode}`);
                console.log(`Rating of the information ${rating}`);
            }
        }

        getRatings()

  }
   
  )};

$('#add-symbol').on('click', testapi);