'use strict';
/*Прекрасные животные
Напишите цикл for, который изменяет массив животных, делая
их прекрасными*/
var three;
for(var i = 3; i <10000; i=i*3) {
	console.log(i);
}

i = 3;
while (i<10000) {
	console.log(i);
	i=i*3;
}

var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
var animalsUowsom = [];
var animalElementAdded; 
for(var i = 0; i<animals.length; i++) {
	animalElementAdded = (animals[i] + " - прекрасное животное!");
	animalsUowsom.push(animalElementAdded);
}	
console.log(animalsUowsom);
