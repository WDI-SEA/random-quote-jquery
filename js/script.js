$(document).ready(function() {
  var display = $('#displayQuote');
  var quotes = [
  "When was the last time you heard the Phife sloppy/ Lyrics anonymous, you’ll never hear me copy",
  "Heyo, Bo knows this, and Bo knows that/But Bo don’t know jack, cause Bo can’t rap",
  "I was the b-ball playing, fly rhyme saying/ Fly girl getting but never was I sweating",
  "Yo, microphone check one, two what is this?/ The five foot assassin with the roughneck business"
  ]
  var totalQuotes = quotes.length;

function getRandomInt(min, max) {
    var quote = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(quote);
    return quote;

}



$('#myForm').submit(function(event){
  event.preventDefault();
  quoteIndex = getRandomInt(0, 2);
  display.html('<h1>'+quotes[quoteIndex]+'</h1>');
  console.log(quoteIndex);
  })

})
