

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

//Documentary Movie Search- Button 4
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+documentary&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Adventure Movie Search- Button 5
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+adventure&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Animation Movie Search- Button 6
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+animation&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Western Movie Search- Button 7
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+western&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Sci-Fi Movie Search- Button 8
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+sci-fi&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Fantasy Movie Search- Button 9
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+fantasy&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Mystery Movie Search- Button 10
var endpoint = "http://api.giphy.com/v1/gifs/search?";
var parameters = "q=movie+mystery&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Romance Movie Search- Button 11
var endpoint = "http://api.giphy.com/v1/gifs/search?";
var parameters = "q=movie+romance&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Horror Movie Search- Button 12
var endpoint = "http://api.giphy.com/v1/gifs/search?";
var parameters = "q=movie+horror&limit=5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

/***************************************************
console logged the endpoint + paramters and set them equal 
to the url by genre in the ajax url

Has to be a more DRY way of accomplishing this maybe a utility returnURL function?

****************************************************/


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
	// $('#movies').empty(); want to empty the div so image array not repeated or appended when different search initiated
	for(var i=5; i < images.length; i++){
		var src= images[i].images.fixed_width.url;
		var buttonImages = $('<img>');
		$(buttonImages).attr('src', src);
		$(movies).append(buttonImages);
	}
	

}


$("#search1").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+comedy&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});

$("#search2").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+family&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});

$("#search3").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+action&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});

$("#search4").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+documentary&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});


$("#search5").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+adventure&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});

$("#search6").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+animation&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});

$("#search7").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+western&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});

$("#search8").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+science+fiction&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});

$("#search9").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+fantasy&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});

$("#search10").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+mystery&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});

$("#search11").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+romance&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});

$("#search12").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+horror&limit=10&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
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

		console.log("Request failed");

    })


         
});




//set up to make an ajax request
/*************************************************
	//need a function to make a request
	//to identify the type of request and to
	//what file or url we are making it to 

	OPEN FUNCTION satisfies our needs. It takes in three parameters 
	// OPEN - type, url/file name, async or not represented by true or false
***************************************************/
/*HTTP Statuses
1)	200 = ok
2)	403 = "Forbidden"
3)	404 = "Not Found"

AJAX REQUESTS

GET – to fetch data
PUT – to edit existing data
POST – to add the new data
DELETE – to delete data

*/
