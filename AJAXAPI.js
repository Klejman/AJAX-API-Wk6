

//Comedy Movie Search- Button 1
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+comedy&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));


//Family Movie Search- Button 2
var endpoint = "http://api.giphy.com/v1/gifs/search?";
var parameters = "q=movie+family&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Action Movie Search- Button 3
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+action&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Documentary Movie Search- Button 4
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+documentary&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Adventure Movie Search- Button 5
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+adventure&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Animation Movie Search- Button 6
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+animation&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Western Movie Search- Button 7
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+western&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Sci-Fi Movie Search- Button 8
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+sci-fi&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Fantasy Movie Search- Button 9
var endpoint= "http://api.giphy.com/v1/gifs/search?";
var parameters= "q=movie+fantasy&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Mystery Movie Search- Button 10
var endpoint = "http://api.giphy.com/v1/gifs/search?";
var parameters = "q=movie+mystery&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Romance Movie Search- Button 11
var endpoint = "http://api.giphy.com/v1/gifs/search?";
var parameters = "q=movie+romance&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

var returnUrl = function(endpoint, parameters) {
	return endpoint.concat(parameters);
}

console.log(returnUrl(endpoint,parameters));

//Horror Movie Search- Button 12
var endpoint = "http://api.giphy.com/v1/gifs/search?";
var parameters = "q=movie+horror&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";

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



$("button").click(function(e) {
    e.preventDefault();
    $.ajax({ 
        url: "http://api.giphy.com/v1/gifs/search?q=movie+comedy&limit:5&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555",
        type: "GET",
    })
    //promise
    .then(function(data) {
    	console.log(data);

    })

    .catch(function(err){
		console.log(err);

		console.log("Request failed")

    })
        data: { 
            id: $(this).val(), // < note use of 'this' here
            access_token: $("#access_token").val() 
        },
        success: function(result) {
            alert('ok');
        },
        error: function(result) {
            alert('error');
        }
    });
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

/*fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});*/