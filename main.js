let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = 
    [
        '“The purpose of our lives is to be happy.”' ,
        '“Life is what happens when you’re busy making other plans.”' ,
        '“Get busy living or get busy dying.”' ,
        '“You only live once, but if you do it right, once is enough.”' ,
        '“Many of life’s failures are people who did not realize how close they were to success when they gave up.”',
        '“If you want to live a happy life, tie it to a goal, not to people or things.”' ,
        '“Never let the fear of striking out keep you from playing the game.”' ,
        '“Money and success don’t change people; they merely amplify what is already there.”' 
    ];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})