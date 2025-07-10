# Quote_Generator
## Date:10/07/2025
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quote Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Inspire Me!</h1> 
        <div class="quote-container">
            <h3 class="quote"></h3>
            <p class = "author"></p>
        </div>
        <div class="btn-container">
            <button onclick="getQuote()">Get Quote</button>
            <button onclick="tweetThis()">Tweet This</button>
             
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body{
    margin: 0;
    background-image: url("back.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container{
    width: 30%;
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: rgba(255, 255, 255, 0.4); 
    backdrop-filter: blur(10px);          
    -webkit-backdrop-filter: blur(10px);
    border-radius: 5px;
    margin-top: 200px;
    padding-bottom: 20px;
}

.quote-container{
    background: rgba(153, 152, 152, 0.3);              /* translucent black */
    backdrop-filter: blur(12px);                 /* glass blur */
    -webkit-backdrop-filter: blur(12px);
    width: 70%;
    height: 150px;
    margin-bottom: 20px;
    border-radius: 5px;
}

button{
    background-color: black;
    color: white;
    padding: 10px;
    font-weight: 300;
    border: none;
    border-radius: 5px;
}

button:hover{
    background-color: white;
    color: black;
    cursor: pointer;
}

h3{
    padding: 0 10px 0 10px;
    text-align: center;
}

p{
    padding-left: 0 10px 0 10px;
    text-align: center;
}

.btn-container{
    display: flex;
    flex-direction: row;
    gap: 10px;
}

/* For Mobile devices */

@media (max-width: 768px) {
    body{
        background-size: cover;
    }
    
    .container{
        width: 90%;
    }

    .quote-container{
        width: 80%;
    }
}
```

## JS : 
```
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
```
## Output:
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/0e7d8e73-3613-41e3-8c18-d3d6c8296bdc" />

## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
