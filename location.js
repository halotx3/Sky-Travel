//Stores the currency codes for the exchRate.js
let conCur = [];

// Gathering the country information
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
            // gets the conountry table and pushes to table validationCountry
          validationCountry.push(countryName);
            //Stores All Currency Codes
            conCur.push(response[i].currencies[0].code);
  
        }
        console.log(validationCountry);
  
      })
  
  
  };
  // });
  
  // Create the table when the table while the page loads with all the information on the country
  $(document).ready(validate);




  const newImage = function(event){

    // event.preventDefault(); 
    
    const countryPic = "Mexico"
    const googleKey = "AAIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA"

//   let locationPicURL = `https://maps.googleapis.com/maps/api/place/field/?name&key=${googleKey}`

  let locationPicURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${countryPic}&inputtype=textquery&fields=photos&key=${googleKey}`
//   https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY

    
    $.ajax({
      url: locationPicURL,
      method: 'GET'
    })
    
    .then(function(response) {
    

      console.log(response);
    
    
    })
  
    };
    
// Get the new image information check
    // newImage();





