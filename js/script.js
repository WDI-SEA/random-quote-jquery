// $(document).ready(function() {
//   //code here
// });

var quoteSource = [{
    quote: "I'm not superstitious, but... I'm a little-stitious.",
    name: "Michael Scott"
  }, {
    quote: "I. DECLARE. BANKRUPTCY!",
    name: "Michael Scott"
  }, {
    quote: "Dwight, you ignorant slut!",
    name: "Michael Scott"
  }, {
    quote: "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice.",
    name: "Michael Scott"
  }, {
    quote: "Holly, you and I are soup snakes.",
    name: "Michael Scott"
  }, {
    quote: "The worst thing about prison was--was the Dementors.",
    name: "Michael Scott"
  }, {
    quote: "I am Beyonce, always.",
    name: "Michael Scott"
  }, {
    quote: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
    name: "Michael Scott"
  }, {
    quote: "I want people to be afraid of how much they love me.",
    name: "Michael Scott"
  }, {
    quote: "I am running away from my responsibilities... and it feels good.",
    name: "Michael Scott"
  }, {
    quote: "I have flaws. What are they? I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car.",
    name: "Michael Scott"
  }, {
    quote: "You don't know me; you've just seen my penis.",
    name: "Michael Scott"
  }, {
    quote: "Well, happy birthday, Jesus. Sorry your party's so lame.",
    name: "Michael Scott"
  }, {
    quote: "Saw Inception. Or at least I dreamt I did.",
    name: "Michael Scott"
  }, {
    quote: "Do you think that smoking drugs is cool? Do you think that doing alcohol is cool?",
    name: "Michael Scott"
  }, {
    quote: "I tried to talk to Toby and be his friend, but that's like trying to be friends with an evil snail.",
    name: "Michael Scott"
  }, {
    quote: "I wouldn't miss it for the world. But if something else came up, I would definitely not go.",
    name: "Michael Scott"
  }, {
    quote: "I don't hate it. I just don't like it at all and it's terrible.",
    name: "Michael Scott"
  }, {
    quote: "NO! GOD! NO! GOD PLEASE NO! NO! NO! NOOOOOOOOOOOOOO!",
    name: "Michael Scott"
  }, {
    quote: "You know what they say. \"Fool me once, strike one. But fool me twice... strike three.\"",
    name: "Michael Scott"
  }, {
    quote: "Is it the same grill you grilled your foot on? Yes, but I got all the foot off of it.",
    name: "Michael Scott"
  }, {
    quote: "I need a username. And I have a great one. \"Little Kid Lover\"",
    name: "Michael Scott"
  }, {
    quote: "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    name: "Michael Scott"
  }, {
    quote: "I hate so much about the things that you choose to be.",
    name: "Michael Scott"
  }, {
    quote: "I feel like all my kids grew up and then they married each other. It's every parent's dream.",
    name: "Michael Scott"
  }, {
    quote: "That's what she said!",
    name: "Michael Scott"
  }];


$('#generate').click(function(e){
  var indexNum = Math.floor((Math.random()) * 100);
  var quoteLength = quoteSource.length;
  var quoteIndex = Math.floor((quoteLength / 100) * indexNum);


  $("#quotes").html(quoteSource[quoteIndex].quote);
  $("#name").html(quoteSource[quoteIndex].name);

});


















  // var quote = $('#quoteContainer p').text();
  //   event.preventDefault();

  // var sourceLength = quoteSource.length;
  // var randomNumber = Math.floor(Math.random() * sourceLength);


  // $('#quoteContainer').append("<p>").append(quoteSource);


  // });












