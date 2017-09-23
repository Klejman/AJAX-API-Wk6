// Event Delegation
/***************************************************/
// GETTERS
// SETTERS
// Event Delegation

 $(document).on('click', "button", function () {
    var val = $(this).html(); // HTML values changing
    //Comedy Movie Search- Button 1
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
        var src = images[i].images.fixed_width.url;
        var buttonImages = $('<img>');
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
    $(".movieButtons").append(button);
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
