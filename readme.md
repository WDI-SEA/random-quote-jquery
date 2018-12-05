# Random Quote Machine

We're going to use jQuery to make a webpage that displays a random quote.

## Getting Started

* Fork and clone this repository
* Run `npm install` to install dependencies
  * `npm start` - start the BrowserSync server
  * `npm run lint:css` - lint CSS
  * `npm run lint:js` - lint JS
* Setup your HTML page, and don't forget to include links to the CSS and JS files.
* Be creative! Both in your choice of quotes and styling. Think about all of those different CSS properties.
* As a bonus, add a form field and allow people to include their own quotes in your random generator.

## Gathering Quotes
IMDB and Goodreads are good sources for quotes. Look up a movie, an author or book that you like and see what they have.
Feel free to google around for any other collection of quotes you feel inspired to use.

- [IMDB quotes from the movie "Rushmore"](http://www.imdb.com/title/tt0128445/quotes?item=qt0429722)
- [Goodreads quotes from Richard Feynman](https://www.goodreads.com/author/quotes/1429989.Richard_Feynman)

## Requirements

* Using jQuery, create a webpage that generates a random quote and display it on the page when a button is clicked
  * Note that you'll want to store quotes in an array, and use `Math.random()` and `Math.floor()` to generate random array indicies.
  * See MDN for `Math.random` examples: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
* Every time the button is clicked, clear the old quote and replace it with a new random quote.

## Bonus!

* If you've already encountered AJAX or fetch, alter this assignment to use a Quote API to pull quotes 

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
