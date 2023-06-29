const quotes = [
    {
      quote: "But I deal with this by meditating and by understanding I’ve been put on the planet to serve humanity. I have to remind myself to live simply and not overindulge, which is a constant battle in a material world.",
      author: "Sandra Cisneros, 1954"
    },
    {
      quote: "There are two ways to be rich: One is by acquiring much, and the other is by desiring little.",
      author: "Jackie French Koller, 1948"
    },
    {
      quote: "Simplicity involves unburdening your life, and living more lightly with fewer distractions that interfere with a high quality life, as defined uniquely by each individual.",
      author: "Linda Breen Pierce, 1947"
    },
    {
      quote: "One of the advantages of being born in an affluent society is that if one has any intelligence at all, one will realize that having more and more won’t solve the problem, and happiness does not lie in possessions, or even relationships: The answer lies within ourselves. If we can’t find peace and happiness there, it’s not going to come from the outside.",
      author: "Tenzin Palmo, 1943"
    },
    {
      quote: "The intention of voluntary simplicity is not to dogmatically live with less. It’s a more demanding intention of living with balance. This is a middle way that moves between the extremes of poverty and indulgence.",
      author: "Duane Elgin, 1940s"
    },
    {
      quote: "We really must understand that the lust for affluence in contemporary society is psychotic. It is psychotic because it has completely lost touch with reality. We crave things we neither need nor enjoy.",
      author: "Richard Foster, 1940s"
    },
    {
      quote: "The trouble with simple living is that, though it can be joyful, rich, and creative, it isn’t simple.",
      author: "Doris Janzen Longacre, 1940"
    },
    {
      quote: "Any half-awake materialist well knows – that which you hold holds you.",
      author: "Tom Robbins, 1936"
    },
    {
      quote: "The simplest things are often the truest.",
      author: "Richard Bach, 1936"
    },
    {
      quote: "Our souls are not hungry for fame, comfort, wealth, or power. Our souls are hungry for meaning, for the sense that we have figured out how to live so that our lives matter.",
      author: "Harold Kushner, 1935"
    }
  ];
  
  const quoteElem = document.getElementById("quote");
  const authorElem = document.getElementById("author");
  const newQuoteBtn = document.getElementById("new-quote-btn");
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  function displayQuote() {
    const { quote, author } = getRandomQuote();
    quoteElem.textContent = quote;
    authorElem.textContent = "- " + author;
  }
  
  newQuoteBtn.addEventListener("click", displayQuote);
  
  displayQuote();
  