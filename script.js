const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const tweetBtn = document.getElementById("tweetBtn");

function getQuote() {
  const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "In the middle of every difficulty lies opportunity.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Your time is limited, so don't waste it living someone else's life.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The best way to predict the future is to create it.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Don't watch the clock; do what it does. Keep going.",
  ];

  const authors = [
    "Winston Churchill",
    "Steve Jobs",
    "Theodore Roosevelt",
    "Albert Einstein",
    "Dalai Lama",
    "Steve Jobs",
    "Confucius",
    "Peter Drucker",
    "Ralph Waldo Emerson",
    "Sam Levenson",
  ];

  const index = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[index]
  author.textContent = authors[index];
}

function tweetThis(){
    const text =    `${quote.textContent} ${author.textContent}`;
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(tweetURL, "_blank");
}


    
