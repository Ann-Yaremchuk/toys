'use strict';
// random unswers random questions
var question = prompt('you question', '');
var silly = ["It is not good!",
 "I am happy!", 
 "Good buy!", 
 "Do not worry", 
 "say yes!", 
 "Can I help", 
 "who is this?"];
 var randomId = Math.floor(Math.random() * silly.length);
 var randomAnswer = silly[randomId];
 
 var sillyWord = ["my friend", 'my daddy', 'my husband', 'my sister'];
 var silliWordsId = Math.floor(Math.random()*sillyWord.length);
 var randomWordAnswer = sillyWord[silliWordsId];


 alert(randomAnswer+ ' , ' +randomWordAnswer);

