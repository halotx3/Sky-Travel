const validationCountry = [];


const validate = function () {
    // event.preventDefault(); 
  
  
    const symbolURL = `https://restcountries.eu/rest/v2/all`;
  
    $.ajax({
      url: symbolURL,
      method: 'GET'
    })
      .then(function (response) {
  
 
  
        for (let i = 0; i < response.length; i++) {
  
          const countryName = (response[i]);
          // console.log(stockSymbol); 
          // console.log([i]); 
          validationCountry.push(countryName);
  
        }
        console.log(validationCountry);
  
      })
  
  
  };
  // });
  
  // Create the table when the table while the page loads with all the information on the country
  $(document).ready(validate);

