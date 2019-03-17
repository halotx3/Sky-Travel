// Global Variables
let country123 = "";
let city123 = "";
let iCode ="";
let region123 = "";
let cccode123 = "";


//  Label that shows in the button
jQuery(function () 
 {
	 jQuery("#f_elem_city").autocomplete({
		source: function (request, response) {
		 jQuery.getJSON(
			"http://gd.geobytes.com/AutoCompleteCity?callback=?&q="+request.term,
			function (data) {
			 response(data);
			}
		 );
		},
		minLength: 3,
		select: function (event, ui) {
		 var selectedObj = ui.item;
		 jQuery("#f_elem_city").val(selectedObj.value);
		getcitydetails(selectedObj.value);
		 return false;
		},
		open: function () {
		 jQuery(this).removeClass("ui-corner-all").addClass("ui-corner-top");
		},
		close: function () {
		 jQuery(this).removeClass("ui-corner-top").addClass("ui-corner-all");
		}
	 });
     jQuery("#f_elem_city").autocomplete("option", "delay", 100);
    
    });
    

// All information based on location selected
function getcitydetails(fqcn) {

	if (typeof fqcn == "undefined") fqcn = jQuery("#f_elem_city").val();

	cityfqcn = fqcn;

	if (cityfqcn) {

	    jQuery.getJSON(
	                "http://gd.geobytes.com/GetCityDetails?callback=?&fqcn="+cityfqcn,
                     function (data) {
                // jQuery("#geobytesinternet").val(data.geobytesinternet);
                country123 = data.geobytescountry;
                // console.log(country123);
	            // jQuery("#geobytescountry").val(data.geobytescountry);
	            // jQuery("#geobytesregionlocationcode").val(data.geobytesregionlocationcode);
							// jQuery("#geobytesregion").val(data.geobytesregion);
							region123 = data.geobytesregion;
							// console.log(region123);
	            // jQuery("#geobyteslocationcode").val(data.geobyteslocationcode);
                // jQuery("#geobytescity").val(data.geobytescity);
                city123 = data.geobytescity;
                // console.log(city123);
	            // jQuery("#geobytescityid").val(data.geobytescityid);
	            // jQuery("#geobytesfqcn").val(data.geobytesfqcn);
	            // jQuery("#geobyteslatitude").val(data.geobyteslatitude);
	            // jQuery("#geobyteslongitude").val(data.geobyteslongitude);
	            // jQuery("#geobytescapital").val(data.geobytescapital);
	            // jQuery("#geobytestimezone").val(data.geobytestimezone);
	            // jQuery("#geobytesnationalitysingular").val(data.geobytesnationalitysingular);
	            // jQuery("#geobytespopulation").val(data.geobytespopulation);
	            // jQuery("#geobytesnationalityplural").val(data.geobytesnationalityplural);
	            // jQuery("#geobytesmapreference").val(data.geobytesmapreference);
	            // jQuery("#geobytescurrency").val(data.geobytescurrency);
                // jQuery("#geobytescurrencycode").val(data.geobytescurrencycode);
                cccode123 = data.geobytescurrencycode;
								// console.log(cccode123);
								
	// Adding the API call to get the 2 code
	const symbolURL = `https://restcountries.eu/rest/v2/all`;

	$.ajax({
		url: symbolURL,
		method: 'GET'
	})
		.then(function (response) {
			for (let i = 0; i < response.length; i++) {
				// const countryName = (response[i]);
				// gets the conountry table and pushes to table validationCountry
				// validationCountry.push(countryName);
				//Stores All Currency Codes
				// conCur.push(response[i].alpha2Code);
				if(response[i].name.includes(country123)){
					iCode = response[i].alpha2Code;
 
				}
 
			}
			console.log(response);
			// console.log(conCur);
			console.log(iCode);
		});

                
	            }
	    );
    }
    
}

// console.log(`Check out the Country Code ${cccode123}`)

// ****************************Get Image of location*******************************

const newImage = function(event){

    // event.preventDefault(); 
    
    const countryPic = country123
    const googleKey = "AAIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA"

//   let locationPicURL = `https://maps.googleapis.com/maps/api/place/field/?name&key=${googleKey}`

  let locationPicURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${countryPic}&inputtype=textquery&fields=photos&key=${googleKey}`

	// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Canada&inputtype=textquery&fields=photos&key=AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA
    
    $.ajax({
      url: locationPicURL,
      method: 'GET'
    })
    
    .then(function(response) {
    

      console.log(response);
    
    
    })
  
    };
    


// Button click and the process runs after the button is clicked
	
$(`.btn`).on("click",function(){

	// newImage();
	console.log(country123);
	console.log(region123);
	console.log(city123);
	console.log(iCode);


});
