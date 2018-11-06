'use strict';

/*генератор дразнилок, чтобы он создавал драз-
нилки такого типа: «У тебя [часть тела] еще более [прилагатель-
ное], чем [часть тела животного] у [животное]».
Подсказка: нужно будет создать еще один массив.
#3.*/


var arreyBody = ['нога', 'рука', 'голова', 'попа', "шея"];
var arreyKind = ['кривая', 'косая', 'гнутая', 'перегнутая', 'закрытая', 'прибитая', 'убитая', 'безобразная'];
var arreyAnimalBody = ['лапа', 'шея', 'попа', 'голова', 'спина'];
var arreyAnimal = ['осла', 'козы', 'таракана', 'гориллы', 'мартышки', 'коровы', 'мухи'];
var arreyBodyIndex = Math.floor(Math.random() *arreyBody.length);
var arreyKindIndex = Math.floor(Math.random() *arreyKind.length);
var arreyAnimalBodyIndex = Math.floor(Math.random() *arreyAnimalBody.length);
var arreyAnimalIndex = Math.floor(Math.random() *arreyAnimal.length);

var body =arreyBody[arreyBodyIndex];
var kind = arreyKind[arreyKindIndex];
var animalBody = arreyAnimalBody[arreyAnimalBodyIndex];
var animal = arreyAnimal[arreyAnimalIndex];

var statement = ('у тебя '+body + ' еще более ' + kind +', чем ' + animalBody +' у ' + animal); 
console.log(statement);





