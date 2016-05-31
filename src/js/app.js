$(document).ready(function() {
  var quotes = [['Laundry day is a very dangerous day'],
              ['I\'m a born leaver puller'],
              ['I like to think Oysters transcend national boundaries'],
              ['Watcha got Joe?'],
              ['What\'s the matter fellas? Blue Meanies?'],
              ['If God didn\'t want us to eat meat he wouldn\'t have made animals so delicious'],
              ['Everything the light touches is our kindom'],
              ['AAAAARRRRRRRRHHHHHHHH! REAL MONSTERS'],
              ['Come with me if you want to live'],
              ['We must establish a pee corner'],
              ['I DECLARE BANKRUPTCY!!!'],
              ['I just want to sit on a beach and eat hotdogs']
              ];

  $('#changeQuote').click(function() {
    var randomQ = Math.floor(Math.random() * quotes.length);
    $('#outputDiv').html(quotes[randomQ]);
  });
});
