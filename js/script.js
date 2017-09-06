var quotes = [
	{quote: "Go fuck yourself, San Diego.", character: "Ron Burgundy"},
	{quote: "Yeah, there were horses, and a man on fire, and I killed a guy with a trident.", character: "Brick Tamland"},
	{quote: "They've done studies, you know. 60% of the time, it works every time.", character: "Brian Fantana"},
	{quote: "Discovered by the Germans in 1904, they named it San Diego, which of course in German means a whale's vagina.", character: "Rob Burgundy"},
	{quote: "Where'd you get your clothes... from the... toilet store?", character: "Brick Tamland"},
	{quote: "It smells like, like a used diaper... filled with... Indian food. Oh, excuse me.", character: "Veronica Corningstone"},
	{quote: "I love lamp.", character: "Brick Tamland"},
	{quote: "I ate fiberglass insulation. It wasn't cotton candy like the guy said... my tummy itches.", character: "Brick Tamland"},
	{quote: "I'm very important. I have many leather-bound books and my apartment smells of rich mahogany.", character: "Ron Burgundy"},
	{quote: "Poop. You poopmouth, with poop out of your mouth!", character: "Garth Holliday"}
]

$('#btn').on('click', function(){
	var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
	$('#quoteBox').children().remove();
	
	$('#quoteBox').append(("<h3>" + randomQuote.quote + "</h3>"));
	$('#quoteBox').append(("<p> - " + randomQuote.character + "</p>"));
	console.log($('quoteBox').children());
})