// Event Delegation
/***************************************************/
// GETTERS
// SETTERS
// Event Delegation

var moviebtns = ["The Matrix", "Mel Brooks Movies", "Muppets", "Princess Bride", "You've Got Mail", "Animation", "Simpsons", "Toy Story", "John Hughes", "Harry Potter", "Disney", "Home Alone"];

var movieData = {};


var a = $("<button>");
for(var i =0; i< moviebtns.length; i++) {
    var a = $("<button>");
    a.addClass("moviebtn");
    a.attr('id', 'searchbtn');
    $.data(a, 'movie', moviebtns[i]);
    a.text(moviebtns[i]);
    $('#movie-buttons').append(a);
}

 $(document).on('click', "button", function () {
    var val = $(this).html(); // HTML values changing
    var endpoint= "http://api.giphy.com/v1/gifs/search?";
    var parameters= "q=" + val + "&limit=12&rating=PG&api_key=7faa75150cd64d5599def7be32bdf555";
    $.ajax({
        url: endpoint + parameters,
        method: "GET"
    })
    //promise
        .then(function(response) {
            setImageArray(response);
        })
        .catch(function(err){
            console.log("Request failed");
        })

});
function setImageArray(response){
    var images = response.data;
    var movies = $('#movies');
    movies.empty();
    for(var i = 0; i < images.length; i++){
        var id = images[i].id;
        var src = images[i].images.fixed_width.url;
        // var srcStill = images[i].images.fixed_width_still.url;
        var buttonImages = $('<img>');
        $.data(buttonImages, "id", id);
        movieData[id] = {};
        movieData[id].still = images[i].images.fixed_width_still.url;
        movieData[id].animated = images[i].images.fixed_width.url;
        buttonImages.attr('src', src);
        movies.append(buttonImages);
    }
}


$("#submit").on("click", function (event) {
    event.preventDefault();

    var val = $("#movie-input").val();
    console.log(val);
    var button = $("<button>");
    button.html(val);
    $("#movie-buttons").append(button);
    $("#movie-input").val("")
});

/*HTTP Statuses
1)  200 = ok
2)  403 = "Forbidden"
3)  404 = "Not Found"
AJAX REQUESTS
GET – to fetch data
PUT – to edit existing data
POST – to add the new data
DELETE – to delete data
*/
