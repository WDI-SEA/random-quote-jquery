$(document).ready(function() {

	var quotes = [{
		quote:"Many a truth is spoken in jest. ",
		author:" - Shakespeare", 
		quote:"I see you're wearing a belt. ",
		author:" - Selma Bouvier",
		quote:"You can observe a lot by just watching.",
		author:" - Yogi Berra",

	}]

	$("#button").on('click', function() {
		var rndNum = getRandomInt(0, quotes.length - 1)
		var rndQuote = quotes[rndNum]
		$('#Quotes').html(rndQuote.quote + rndQuote.author)
		


	});

});


/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}