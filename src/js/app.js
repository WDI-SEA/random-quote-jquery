$(document).ready(function() {

// Create an array of quotes that will be displayed after clicking Paragraph element.
var quotes = [
    '“The best executive is the one who has sense enough to pick good men to do what he wants done, and self-restraint enough to keep from meddling with them while they do it.” – Theodore Roosevelt',
    '“The value of a man should be seen in what he gives and not in what he is able to receive.” – Albert Einstein',
    '“You can’t separate peace from freedom because no one can be at peace unless he has his freedom.” – Malcolm X',
    '“No man is good enough to govern another man without that other’s consent.” – Abraham Lincoln',
    '“I have learned that success is to be measured not so much by the position that one has reached in life as by the obstacles which one has overcome while trying to succeed.” – Booker T. Washington',
    '"The bigger the dream the smaller the competition" - Chris Madison',
];

function newQuote() {
  var r = Math.floor(Math.random() * (quotes.length));
  $('#pquote').html(quotes[r]);
  };

newQuote(quotes);

  // Get reset button from HTML and store it in a variable
var newQuotebtn = document.getElementById('newQuotebtn');

 // new game button reloads the page to start a new game
  newQuotebtn.addEventListener('click', function(event) {
    location.reload();
    });
});
