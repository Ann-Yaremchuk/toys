"use strict";

var words = ['оладушек', "капустка", "конь", "крокодил"];
var index = Math.floor(Math.random() * words.length);
var word = words[index];
console.log(word);
var input = [];

for (var i = 0; i < word.length; i++) {
input[i] = "_";
}
var remainingLetters = word.length;
console.log(input);
while(remainingLetters >0) {
	alert("guess the letter" + input.join(" "));
	var guess = prompt('enter letter', )
	if(guess === "null") {
		break;
	} else if( guess.length !== 1) {
		alert( 'enetr 1 letter');
	} else {
		for(var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				input[j] = guess;
				remainingLetters --;
			}
		}	
	}
}
alert(input.join(' ') + '    congrats!!!');