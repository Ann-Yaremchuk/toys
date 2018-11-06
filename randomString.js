'use strict';

/*Генератор случайных строк
Напишите генератор случайных строк.*/

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";

var i =0;
while (i<10) {
	var index = Math.floor(Math.random() * alphabet.length);
	var randomLittera = alphabet[index];
	randomString += randomLittera; 
	console.log(randomString);
	i++;
}

