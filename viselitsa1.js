"use strict";

var words = ['оладушек', "капустка", "конь", "крокодил"];
var newWord1 = 'прикольчик';
words.push(newWord1);
console.log(words);
var index = Math.floor(Math.random() * words.length);
var word = words[index];
console.log(word);
var origin = [];
var counter = 0;

for (var i = 0; i < word.length; i++) {
origin[i] = "_";
}
var remainingLetters = word.length;
console.log(origin);

while(remainingLetters > 0 && counter < 20) {
	alert("guess the letter" + origin.join(" "));
	var guess = prompt('enter letter', );
	
	if(guess === "null") {
		break;
	} else if( guess.length !== 1) {
		alert( 'enetr 1 letter');
	} else {
	   for (var j = 0; j < word.length; j++) {
			if (word[j].toUpperCase() === guess && origin[j] === '_') {
				guess = guess.toLowerCase();
				origin[j] = guess;
				remainingLetters--;
		
			}
			else if (word[j] === guess && origin[j] === '_') {
				origin[j] = guess;
				remainingLetters--; 
			} 
		}
	} 
	counter++;
	alert( 'осталось ' + (20 - counter) + " попыток");	
}	
alert(origin.join(" ") + 'ура!');