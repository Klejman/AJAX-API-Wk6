

//Comedy Movie Search- Button 1
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+comedy&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));


//Family Movie Search- Button 2
var endpoint = "http://api.giphy.com/v1/gifs/search?";
var parameters = "q=movie+family&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Action Movie Search- Button 3
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+action&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));





function loadText(){
	console.log('button clicked');
	//create xhr object
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'endpoint + parameters', true);

	xhr.onload = function(){
		if(this.status == 200){
		console.log(this.responseText);

		}
 	}
}



function setImageArray(response){
	var images = response.data;
	var movies = $('#movies');
	for(var i=0; i < images.length; i++){
		var src= images[i].images.downsized_medium.url;
		var buttonImages = $('<img>');
		$(buttonImages).attr('src', src);
		$(movies).append(buttonImages);
	}
	

}


$("button").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+comedy&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
        type: "GET",
        data: { 
            id: $(this).val(), 
            access_token: $("#access_token").val() 
        },
      })  
    //promise
    .then(function(response) {
    	setImageArray(response);

    })

    .catch(function(err){
		console.log(err);

		console.log("Request failed")

    })
         
});





