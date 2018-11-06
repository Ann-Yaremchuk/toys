'use strict';

var input = "javascript is awesome";
var output = '';

for (var i = 0; i < input.length; i++) {
	if (input[i] === 'a') {
		var outputLetter = 4;
	} else if (input[i] === 'e') {
		outputLetter = 3;
	} else if (input[i] === 'i') {
		outputLetter = 1;
	} else if (input[i] === '0') {
		outputLetter = 0;
	} else {
		outputLetter = input[i];
	} 
	output += outputLetter;
}

console.log(output);