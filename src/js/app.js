$(document).ready(function() {
  var lastRand = -1;

  var quotes =[
  {"quote": "<i>[after a hallucinogenic meal]</i> I just don't have the words for it. Schmooblydong. Is that a word?", "author":"Roger the Alien"},
  {"quote": "Don't cry... in front of the fish", "author":"Roger the Alien"},
  {"quote": "Francine! I can see your Schmootzplatschen!", "author":"Klaus"},
  {"quote": "There's an old German saying: <i>\"Don't blame the fish!\"</i> There are other sayings, but they mostly involve genocide...", "author":"Klaus"},
  {"quote": "Oh, Staniel!", "author":"Roger the Alien"},
  {"quote": "Oh, Franiel!", "author":"Roger the Alien"},
  {"quote": "You brought Fat into our house!", "author":"Stan Smith"},
  {"quote": "Jeez Klaus, how can you be so terrible? <br>Klaus: I'm German! It's what we do.", "author":"Steve Smith to Klaus"},
  {"quote": "I guess I just picked a bouquet of oopsie-daisies.", "author":"Stan"},
  {"quote": "I’m gonna go hit the sack, and then probably go to bed.", "author":"Steve"},
  {"quote": "Thanks for the ride, Smith. I owe you a sugar cube.", "author":"Avery"},
  {"quote": "It’s 67 degrees outside, and I hate you.", "author":"Roger the Alien"}
]
  $('#btn-1').on('click', function(e) {
    event.preventDefault();
    thisRand = getRandom();
    setQuote(thisRand);
  })

  function setQuote(int) {
    $('.quotes').html(
      quotes[int]["quote"] + '<br>-<b>' +
      quotes[int]["author"] + '</b>'
      );
  }
  // console.log(quotes[0]);
  function getRandom() {
    return Math.floor(Math.random() * quotes.length);
  }

  setQuote(getRandom());

});
