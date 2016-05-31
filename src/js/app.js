$(document).ready(function() {
  var quotes = [
    'To infinity and beyond',
    'A ship in the harbor is safe, but that is not what ships are for',
    'To the world, you may be one person, but to one person, you may be the world',
    'This Kush'
  ];

  function random() {
    return Math.floor(Math.random() * 10);
  }

  function showQuote() {
    var a = random();
    if (a <= 2) {
      $('#quote').append(quotes[0]);
    } else if (a >= 3 && a <= 4) {
      $('#quote').append(quotes[1]);
    } else if (a >= 5 && a <= 6) {
      $('#quote').append(quotes[2]);
    } else {
      $('#quote').append('There is no quote');
    }
  }

  showQuote();

  function newQuote() {
    $('#button').click(function() {
      $('#quote').text('');
      showQuote();
    });
  }

  newQuote();
});
