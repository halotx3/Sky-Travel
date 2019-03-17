

const firstImage = function(){
		const image1 = `<img class="p-center img mx-auto" src="img/plane-841441_1920.jpg" id="1pic" alt="first-img"></img>`
        $(`#mainPic`).prepend(image1);
        $(`#infoLoc`).hide();
        $(`#linkMove`).hide();
        
}
$(document).ready(firstImage);


// **************************Getting image through Google pictures*********************************
  
const newImage = function(event){

    // event.preventDefault(); 
    
		let countryPic = city123 + "%20" + country123;
		console.log(countryPic);
		
		const googleKey = "AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA";
		// let photoRef = "CmRaAAAAR44oSxo0iblPDTOKJVUWxPt0FQEzgBiaknnB-afLKWBUnejCbKdAM-HTrjV10UjV-abGPlbyIPpV5x_UmYU0v7ni98j44XcCMZIDusQy09MrHTT379qfkqSyDLEtUsSMEhBSVCb14n-pzRHwIgjI8tMDGhRko7fMcvr163TFJIFHhopHg1fkHQ"
		// let photoRef = "";

//   let locationPicURL = `https://maps.googleapis.com/maps/api/place/field/?name&key=${googleKey}`

  let locationPicURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${countryPic}&inputtype=textquery&fields=photos&key=${googleKey}`

	// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Athens,%20GA,%20United%20States&inputtype=textquery&fields=photos&key=AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA
	// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Canada&inputtype=textquery&fields=photos&key=AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA
    
	// console.log(locationPicURL);	
	$.ajax({
      url: locationPicURL,
			method: 'GET',
			headers: {'Access-Control-Allow-Origin':'*'
		}
    })
    
    .then(function(response) {
    
			console.log(response.candidates[0].photos[0].photo_reference);
			const photoRef = response.candidates[0].photos[0].photo_reference
			let pictureURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA`

			// const picLocation = $(`<img class="image"src="${pictureURL}">`)
			const picLocation = $(`<img class="p-center img mx-auto" src="${pictureURL}" alt="first-img"></img>`)

			$(`#mainPic`).prepend(picLocation);
			$('#1pic').hide();

    
		}) //End of picture ajax
		
  
    };

    // **************************Getting image through Unsplash pictures*********************************

    

    const nextImage = function(event){
        
        const unsplashKey = `b5970b91de7abb8c539c033b97560c2844c67745ee6579578bacbe7def09e3c5`

        // let countryPic = city123 + "%20" + region123 + "%20"+ country123;
        let countryPic = city123 + "%20"+ country123;
        let locationPicURL = `https://api.unsplash.com/search/photos?query=${countryPic}&client_id=${unsplashKey}`
        // let locationPicURL = `https://api.unsplash.com/search/photos?query=${country123}&client_id=${unsplashKey}`
        
        $(`#takeOut`).remove();
        // let picRemove = 0;
        $.ajax({
            url: locationPicURL,
                  method: 'GET',
                //   headers: {'Access-Control-Allow-Origin':'*'}
          })
          
          .then(function(response) {
            console.log(response.results[0].urls.raw);          
                  console.log(response);

                  const photoRef = response.results[0].urls.raw
                //   let pictureURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyB_S5w_dRoEXEiiJtMpQ2IL_P7IsHDUaiA`
      
                //   const picLocation = $(`<img class="image"src="${pictureURL}">`)
                  const picLocation = $(`<img class="p-center img mx-auto" src="${photoRef}" alt="first-img" id="takeOut"></img>`)
      
                  $(`#mainPic`).prepend(picLocation);
                  $('#1pic').hide();
      
          
              }) //End of picture ajax


    };
