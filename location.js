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


// Get images of places
var newLayer = new ol.layer.Tile({
    source: new ol.source.OSM({
        url: 'E:/Maperitive/Tiles/vychod/{z}/{x}/{y}.png',
        crossOrigin: null
        })
    });


  const displayInfo = function(event){

    // event.preventDefault(); 
    
    // const countryPic = "Mexico"
    const googleKey = "AAIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA"

  let locationPicURL = `https://maps.googleapis.com/maps/api/place/field/name&key=${googleKey}`
//   https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY

    
    $.ajax({
      url: locationPicURL,
      method: 'GET'
    })
    
    .then(function(response) {
    
      
     
    //   console.log(numberVal);
      console.log(response);
    //   console.log(response.response.docs[0].headline);
    //   const front = (response.response);
    //       $(`#results`).text(front.docs[0].headline.main);
    

    
    
    })
    // .catch(function(err) {
    //   console.log(err)
    // });
    };
    
    // $(`.btn-primary`).on('click', displayInfo);
    displayInfo();
    



